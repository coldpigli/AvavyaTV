import React from "react";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import styles from "./TopNav.module.css";

const TopNav = () => {

  const {userState} = useUserDetails();
  const {firstName, isLoggedIn} = userState;

  return (
    <div className={`${styles.topnav} flex`}>
        <div className={`${styles.logoContainer} flex`}>
            <h2 className="txt-bold">avavyaTV</h2>
        </div>
        {isLoggedIn
        ?
        <div className={`flex children-middle`}>
          <span className={`txt-label gap-r10`}>Hi, {firstName}</span>
          <Link to="/" className={`btn btn-primary-outline`}>Logout</Link>
        </div>
        
        :
        <Link to="/login" className={`btn btn-primary-outline`}>LOGIN</Link>}
    </div>
  );
};

export default TopNav;
