import Navbar from "../Components/Navbar";
import AddAnime from "../Components/AddAnime";
import ShowAnime from "../Components/ShowAnime";

const Add = ({ anime, setAnime }) => {
  return (
    <>
      <ShowAnime anime={anime} />
      <AddAnime anime={anime} setAnime={setAnime} />
    </>
  );
};

export default Add;
