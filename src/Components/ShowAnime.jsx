import React from "react";
import Navbar from "./Navbar";
import "../Styles/ShowAnime.css";
import { useState } from "react";

const ShowAnime = ({ anime }) => {
  return (
    <div>
      <section>
        <div className="container">
          <h1>Character Anime Favorite</h1>
          <div className="cards">
            {anime.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.name}</h3>
                <p>Id : {card.id}</p>
                <p>Atk : {card.atk}</p>
                <p>Hp : {card.hp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowAnime;
