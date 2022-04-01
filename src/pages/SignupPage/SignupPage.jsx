import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./SignupPage.module.css";
import { validateInputs } from "../../utils";
import axios from "axios";
import { useUserDetails } from "../../contexts/UserContext/UserContext";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPass, setConfirmPass] = useState("");
  const { dispatchUser } = useUserDetails();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  console.log(signupData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const matchPasswords = (e) => {
    if (e.target.value !== signupData.password) {
      setErrorMsg("Passwords don't match");
    } else {
      setErrorMsg("");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (validateInputs(signupData.email, signupData.password)) {
      try {
        const response = await axios.post("/api/auth/signup", signupData);
        if (response.status === 200 || response.status === 201) {
          const { createdUser, encodedToken } = response.data;
          localStorage.setItem("authToken",encodedToken)
          dispatchUser({ type: "USER_LOGIN", payload: createdUser });
          navigate("/explore/All");
        }
      } catch (err) {
        setErrorMsg("Couldn't signup");
        console.log("Uh!oh. Something went wrong", err);
      }
    } else {
      setErrorMsg("Check email/password");
    }
  };

  return (
    <div className={`${styles.signUpPage} dark-theme generic-page`}>
      <section className={`${styles.signupContainer} flex-vertical`}>
        <h1 className={`heading1 brand-color gap-d30`}>Signup</h1>
        <form className={`${styles.signupForm} flex-vertical`}>
          <div className={`${styles.nameContainer} flex`}>
            <div className={`input-wrapper gap-d20 ${styles.inputField}`}>
              <label className="input-name txt-bold" htmlFor="input">
                First Name
              </label>
              <input
                className="input-box"
                name="firstName"
                type="text"
                value={signupData.firstName}
                placeholder="Enter first name"
                required
                autocomplete="on"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={`input-wrapper gap-d20 ${styles.inputField}`}>
              <label className="input-name txt-bold" htmlFor="input">
                Last Name
              </label>
              <input
                className="input-box"
                type="text"
                name="lastName"
                value={signupData.lastName}
                placeholder="Enter Last Name"
                required
                autocomplete="on"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={`input-wrapper gap-d20 ${styles.inputField}`}>
            <label className="input-name txt-bold" htmlFor="input">
              Email
            </label>
            <input
              className="input-box"
              type="email"
              name="email"
              value={signupData.email}
              placeholder="Enter your email"
              required
              autocomplete="on"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={`input-wrapper gap-d20 ${styles.inputField}`}>
            <label className="input-name txt-bold" htmlFor="password">
              Password
            </label>
            <input
              className="input-box"
              name="password"
              value={signupData.password}
              type="password"
              placeholder="Enter Password"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className={`input-wrapper gap-d20 ${styles.inputField}`}>
            <label className="input-name txt-bold" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="input-box"
              type="password"
              name="confirmPass"
              value={confirmPass}
              onChange={(e) => {
                matchPasswords(e);
                setConfirmPass(e.target.value);
              }}
              placeholder="Re-enter Password"
              required
            />
          </div>
          {errorMsg && <p className={`tx-label error-msg`}> {errorMsg}</p>}
          <button
            className="btn btn-primary gap-d20"
            onClick={(e) => handleSignup(e)}
          >
            <span className="material-icons md-24 gap-r10">login</span>
            Sign Up
          </button>
        </form>
        <Link
          to="/login"
          className={`${styles.loginBtn} btn btn-primary-outline`}
        >
          <span class="material-icons md-24 gap-r10">account_circle</span>
          Already a User? Login
        </Link>
      </section>
    </div>
  );
};

export default SignupPage;
