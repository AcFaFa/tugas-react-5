import React, { useState, Component, Fragment } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Delete from "./Pages/Delete";
import Update from "./Pages/Update";

const App = () => {
  const [anime, setAnime] = useState([
    {
      id: 1,
      name: "Kiyotaka Ayano",
      atk: 100000,
      hp: 30000,
    },
    {
      id: 2,
      name: "Light Yagami",
      atk: 80000,
      hp: 60000,
    },
    {
      id: 3,
      name: "Lawliet",
      atk: 90000,
      hp: 90000,
    },
    {
      id: 4,
      name: "Khuhaku",
      atk: 100000,
      hp: 100000,
    },
    {
      id: 5,
      name: "Oreqi",
      atk: 40000,
      hp: 10000,
    },
    {
      id: 6,
      name: "Lelouch",
      atk: 60000,
      hp: 20000,
    },
    {
      id: 7,
      name: "Levi Archman",
      atk: 90000,
      hp: 100000,
    },
  ]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home anime={anime} />} />
        <Route
          path="/add"
          element={<Add anime={anime} setAnime={setAnime} />}
        />
        <Route
          path="/delete"
          element={<Delete anime={anime} setAnime={setAnime} />}
        />
        <Route
          path="/update"
          element={<Update anime={anime} setAnime={setAnime} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
