import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";
import "./navbar.css";
import Contact from "../contact/Contact";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Fonction pour ouvrir et fermer la modale
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={avatar} alt="logo de Paris.Art" className="logo" />
      </div>
      <div className="navbar__name">
        <Link to="/">
          <h1>PARIS.ART</h1>
        </Link>
      </div>
      <div className="navbar__links">
        <ul className="navbar__links-list">
          <Link to="/store">STORE</Link>
          <li onClick={toggleModal}>CONTACT</li>
        </ul>
      </div>

      <Contact isOpen={isModalOpen} toggleModal={toggleModal} />
    </nav>
  );
}
