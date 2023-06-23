import React, { useState } from "react";

const UpdateAnime = ({ anime, setAnime }) => {
  const [ipt, setIpt] = useState({
    id: 11,
    name: "",
    atk: "",
    hp: "",
  });
  console.log(ipt.atk);
  console.log(ipt.hp);
  console.log(anime[2].name);
  return (
    <div className="container">
      <div className="app-wrapper">
        {/* {anime.map((card, i) => (
          <div key={i} className="card">
            <h3>{card.name}</h3>
            <p>Atk : {card.atk}</p>
            <p>Hp : {card.hp}</p>
          </div>
        ))} */}
        <div>
          <h2 className="title">Update Name Character</h2>
        </div>
        <form action="" className="form-wrapper">
          <div className="name">
            <label className="label">Id Character</label>
            <input
              type="text"
              className="input"
              name="id"
              value={ipt.id}
              onChange={(e) => {
                setIpt({
                  ...ipt,
                  id: e.target.value,
                  name: "",
                });
                // anime.map((anim) => {
                //   if (anim.id == e.target.value) {
                //     setIpt({
                //       ...ipt,
                //       id: e.target.value,
                //       name: anim.name,
                //     });
                //   }
                // });
              }}
            />
          </div>
          <div className="name">
            <label className="label">New Name</label>
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

          <div>
            <button
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                // anime.map((anim) => {
                //   if (anim.id === ipt.id) {
                //     anim.name = ipt.name;
                //     setAnime([...anime]);
                //   }
                // });
                anime.map((anim) => {
                  if (anim.id == ipt.id) {
                    (anim.name = ipt.name), setAnime([...anime]);
                  }
                });
              }}
            >
              Edit By ID
            </button>
          </div>
        </form>

        <div>
          <h2 className="title">Upp / Lower Power Character</h2>
        </div>
        <form action="" className="form-wrapper">
          <div className="name">
            <label className="label">Id Character</label>
            <input
              type="text"
              className="input"
              name="id"
              value={ipt.id}
              onChange={(e) => {
                setIpt({
                  ...ipt,
                  id: e.target.value,
                  name: "",
                });
                // anime.map((anim) => {
                //   if (anim.id == e.target.value) {
                //     setIpt({
                //       ...ipt,
                //       id: e.target.value,
                //       name: anim.name,
                //     });
                //   }
                // });
              }}
            />
          </div>
          <div className="name">
            <label className="label">Force</label>
            <input
              type="text"
              className="input"
              name="force"
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
              name="heal"
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
                // anime.map((anim) => {
                //   if (anim.id === ipt.id) {
                //     anim.name = ipt.name;
                //     setAnime([...anime]);
                //   }
                // });
                anime.map((anim) => {
                  if (anim.id == ipt.id) {
                    (anim.atk = parseInt(anim.atk) + parseInt(ipt.atk)),
                      (anim.hp = parseInt(anim.hp) + parseInt(ipt.hp)),
                      setAnime([...anime]);
                  }
                });
              }}
            >
              Plus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAnime;
