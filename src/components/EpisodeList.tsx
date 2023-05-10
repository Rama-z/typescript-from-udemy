import React from "react";
import { IAction, IEpisode } from "../interfaces/interface";
import { store } from "../store";

export default function EpisodeList() {
  const { state, dispatch } = React.useContext(store);
  const navigation = (url: string): void => {
    window.open(url);
  };
  React.useEffect(() => {
    const fetchDataAction = async () => {
      const URL =
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
      const data = await fetch(URL);
      const dataJson = await data.json();
      return dispatch({
        type: "FETCH_DATA",
        payload: dataJson._embedded.episodes,
      });
    };
    state.episodes.length === 0 && fetchDataAction();
  }, [state.episodes.length, dispatch]);

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };

  return (
    <>
      {state.episodes.map((item: IEpisode) => {
        return (
          <div
            key={item.id}
            style={{ padding: "10px", borderTop: "1px black solid" }}
          >
            <div>Title: {item.name}</div>
            <div>Season: {item.season}</div>
            <div style={{ display: "flex", gap: "5px" }}>
              <div>Link: </div>
              <div
                onClick={() => navigation(item.url)}
                style={{ cursor: "pointer", color: "blue" }}
              >
                Here
              </div>
            </div>
            <div>{item.summary}</div>
            <button type="button" onClick={() => toggleFavAction(item)}>
              {state.favorites.find((fav: IEpisode) => fav.id === item.id)
                ? "UnFavorite"
                : "Favorite"}
            </button>
          </div>
        );
      })}
    </>
  );
}
