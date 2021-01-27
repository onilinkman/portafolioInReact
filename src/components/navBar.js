import React from "react";

import "./style/navBar.css";
import MenuIcon from "../recursos/burgerIcon.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="body-navbar">
        <input type="checkbox" id="btn-menu"></input>
        <label htmlFor="btn-menu">
          <img src={MenuIcon} alt="menuIcon"></img>
        </label>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Iniciar Sesion</a>
            </li>
            <li>
              <a href="/">contactos2</a>
            </li>
            <li>
              <a href="/">contactos3</a>
            </li>
            <li>
              <a href="/">contactos4</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
