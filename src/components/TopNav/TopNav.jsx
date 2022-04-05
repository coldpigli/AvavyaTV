import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDetails } from "../../contexts";
import styles from "./TopNav.module.css";

const TopNav = () => {
  const { userState, dispatchUser } = useUserDetails();
  const { firstName, isLoggedIn } = userState;
  const navigate = useNavigate();

  return (
    <div className={`${styles.topnav} flex`}>
      <div className={`${styles.logoContainer} flex`}>
        <Link to="/" className="txt-bold heading1">avavyaTV</Link>
      </div>
      {isLoggedIn ? (
        <div className={`flex children-middle`}>
          <span className={`txt-label gap-r10`}>Hi, {firstName}</span>
          <Link
            to="/"
            className={`btn btn-primary-outline`}
            onClick={() => {
              dispatchUser({ type: "USER_LOGOUT", payload: "" });
              navigate("/");
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        <Link to="/login" className={`btn btn-primary-outline`}>
          LOGIN
        </Link>
      )}
    </div>
  );
};

export default TopNav;
