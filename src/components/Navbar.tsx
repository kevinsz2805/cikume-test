import React from "react";
import { PropsNavbar, PropsMenuItems } from "../interfaces/navbar-props";
import { Link } from "react-router-dom";

const Navbar = (props: PropsNavbar) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        Cikume Test
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menu
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {props.items.map((menu: PropsMenuItems, index: number) => {
                return (
                  <Link key={index} className="dropdown-item" to={menu.route}>
                    {menu.title}
                  </Link>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
