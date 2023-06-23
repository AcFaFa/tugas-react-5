import DeleteAnime from "../Components/DeleteAnime";
import ShowAnime from "../Components/ShowAnime";

const Delete = ({ anime, setAnime }) => {
  return (
    <>
      <ShowAnime anime={anime} />
      <DeleteAnime anime={anime} setAnime={setAnime} />
    </>
  );
};

export default Delete;
