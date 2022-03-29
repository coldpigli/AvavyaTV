import React from "react";
import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <div className={`${styles.topnav} flex`}>
        <div className={`${styles.logoContainer} flex`}>
            <h2 className="txt-bold">avavyaTV</h2>
        </div>
        <button className={`btn btn-primary-outline`}>LOGIN</button>
    </div>
  );
};

export default TopNav;
