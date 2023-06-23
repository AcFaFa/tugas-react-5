import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/home">Home</a>
        <a href="/add">Add</a>
        <a href="/update">Update</a>
        <a href="/delete">Delete</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
