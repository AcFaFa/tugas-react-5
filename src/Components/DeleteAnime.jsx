import React, { useState } from "react";

const DeleteAnime = ({ anime, setAnime }) => {
  const [ipt, setIpt] = useState({
    id: 11,
    name: "",
    atk: "",
    hp: "",
  });
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Delete Character</h2>
        </div>
        <form action="" className="form-wrapper">
          <div className="name">
            <label className="label">Id</label>
            <input
              type="text"
              className="input"
              name="name"
              value={ipt.id}
              onChange={(e) =>
                setIpt({
                  ...ipt,
                  id: e.target.value,
                })
              }
            />
          </div>
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                setAnime(anime.filter((anim) => anim.id != ipt.id));
              }}
            >
              Delete By Id
            </button>
          </div>
          <br />
          <br />
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                if (anime.id <= 1) {
                  return false;
                }
                setAnime({
                  ...anime,
                  id: anime.id - 1,
                });
                const newAnime = anime.slice(1);
                setAnime(newAnime);
              }}
            >
              Delete Front
            </button>
          </div>
          <br />
          <br />
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                if (anime.id <= 1) {
                  return false;
                }
                setAnime({
                  ...anime,
                  id: anime.id - 1,
                });
                const newAnime = anime.slice(0, anime.length - 1);
                setAnime(newAnime);
              }}
            >
              Delete Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteAnime;
