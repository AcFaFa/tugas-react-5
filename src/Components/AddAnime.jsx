import React, { useState } from "react";
import "../Styles/AddAnime.css";

const AddAnime = ({ anime, setAnime }) => {
  // const [anime, setAnime] = state;
  // const [name, setName] = useState("");
  // const [id, setId] = useState(11);
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
          <h2 className="title">Add Character</h2>
        </div>
        <form action="" className="form-wrapper">
          <div className="name">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              value={ipt.name}
              onChange={(e) =>
                setIpt({
                  ...ipt,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="name">
            <label className="label">Force</label>
            <input
              type="text"
              className="input"
              name="atk"
              value={ipt.atk}
              onChange={(e) =>
                setIpt({
                  ...ipt,
                  atk: e.target.value,
                })
              }
            />
          </div>
          <div className="name">
            <label className="label">Heal</label>
            <input
              type="text"
              className="input"
              name="name"
              value={ipt.hp}
              onChange={(e) =>
                setIpt({
                  ...ipt,
                  hp: e.target.value,
                })
              }
            />
          </div>
          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                setAnime([
                  {
                    ...ipt,
                  },
                  ...anime,
                ]);
                setIpt({
                  ...ipt,
                  id: ipt.id + 1,
                });
              }}
            >
              Add Front
            </button>
            <br />
            <br />
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                setAnime([
                  ...anime,
                  {
                    ...ipt,
                  },
                ]);
                setIpt({
                  ...ipt,
                  id: ipt.id + 1,
                });
              }}
            >
              Add Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnime;
