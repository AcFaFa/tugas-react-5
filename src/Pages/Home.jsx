import ShowAnime from "../Components/ShowAnime";
import React from "react";
const Home = ({ anime }) => {
  return (
    <>
      <ShowAnime anime={anime} />
    </>
  );
};

export default Home;
