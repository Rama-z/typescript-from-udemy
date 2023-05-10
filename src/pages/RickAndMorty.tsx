import React from "react";
import { useNavigate } from "react-router-dom";

const EpisodeList = React.lazy(() => import("../components/EpisodeList"));

export default function RickAndMorty(): JSX.Element {
  const navigation = useNavigate();
  return (
    <>
      <button onClick={() => navigation("/")}>Back to Home</button>
      <h1>Rick And Morty</h1>
      <div>Pick your favorite episode </div>
      <div>Image not found in the API</div>
      <React.Suspense fallback={<div>loading...</div>}>
        <section>
          <EpisodeList />
        </section>
      </React.Suspense>
    </>
  );
}
