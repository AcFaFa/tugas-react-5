import Navbar from "../Components/Navbar";
import ShowAnime from "../Components/ShowAnime";
import UpdateAnime from "../Components/UpdateAnime";

const Update = ({ anime, setAnime }) => {
  return (
    <>
      <ShowAnime anime={anime} />
      <UpdateAnime anime={anime} setAnime={setAnime} />
    </>
  );
};

export default Update;
