import React from "react";
import "./SideNav.css";
import { navdata } from "../constants";

const SideNav = () => {
  return (
    <aside className="sidenav">
      <ul className="navbar-nav">
        {navdata.map(({ title, icon }) => {
          return (
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span class="material-icons md-24">{icon}</span>
                <span className="link-text">{title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideNav;
