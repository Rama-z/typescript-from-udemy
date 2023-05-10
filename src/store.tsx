import React from "react";
import { IAction, IState } from "./interfaces/interface";

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const store = React.createContext<IState | any>(initialState);

export function reducer(state: IState, action: IAction): IState {
  // pass
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  //
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  );
}
