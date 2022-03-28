import React from "react";
import styles from "./SideNav.module.css";
import { navdata } from "../../constants";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className={`${styles.sidenav} txt-label dark-theme`}>
      {navdata.map(({ title, icon, nextUrl }) => {
        return (
          <Link to={nextUrl} className={`${styles.navItem}`}>
            <span className="material-icons md-24">{icon}</span>
            <span className={`${styles.navTitle}`}>{title}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default SideNav;
