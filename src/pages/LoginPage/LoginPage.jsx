import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserDetails } from "../../contexts/UserContext/UserContext";
import {  toast, validateInputs } from "../../utils";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  
  const navigate = useNavigate();
  const {dispatchUser} = useUserDetails();
  const [isError, setIsError] = useState("");  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const testCredentials = {
    email: "piyushtest@gmail.com",
    password: "adarshBalika123"
  }

  const loginGuest = () => {
    setLoginData(testCredentials);
  }

  const handleLogin = async(e) => {
        e.preventDefault();
        if(validateInputs(loginData.email,loginData.password)){
            setIsError('');
            try{
              const response = await axios.post("/api/auth/login", loginData);
              if(response.status===200 || response.status===201){
                const {foundUser,encodedToken} = response.data;
                localStorage.setItem("authToken",encodedToken)
                dispatchUser({type: "USER_LOGIN", payload: foundUser})
                toast({type: "success", message: "Login Successful"})
                navigate("/explore/All")
              }else{
                toast({type: "error", message: "Login Failed"})
                setIsError('Login Failed');
                
              }
            }catch(err){
              toast({type: "error", message: "Login Failed"})
              setIsError('Login Failed')
            }  
        }
        else{
            setIsError("Please enter correct credentials")
            toast({type: "error", message: "Please enter correct credentials"})
        }
  }

  return (
    <div className={`${styles.loginPage} dark-theme generic-page`}>
      <h1 className={`heading1`}>Welcome to Avayav TV</h1>
      <p className={`paragraph1 brand-color gap-d30`}>
        Please login to continue
      </p>
      <section className={`${styles.loginContainer} flex-vertical`}>
        <h1 className={`heading1 brand-color gap-d30`}>Login</h1>
        <form className={`${styles.loginForm} flex-vertical`} >
          <div className="input-wrapper gap-d20">
            <label className="input-name txt-bold" htmlFor="input">
              Email
            </label>
            <input
              className="input-box"
              type="email"
              placeholder="Enter your email"
              value={loginData.email}
              required
              autocomplete="on"
              onChange={(e)=>setLoginData({...loginData, email: e.target.value})}
            />
          </div>
          <div className={`input-wrapper gap-d20 ${styles.inputWrapper}`}>
            <label className="input-name txt-bold" htnlFor="password">
              Password
            </label>
            <input
              className="input-box"
              type="password"
              value={loginData.password}
              placeholder="Enter Password"
              required
              onChange={(e)=>setLoginData({...loginData, password: e.target.value})}
            />
          </div>
          <p className={`${styles.guestLogin} paragraph2 txt-gray gap-d30`} onClick={loginGuest}>
            Login with guest credentials?
          </p>
          {isError&&<p className={`${styles.guestLogin} paragraph2 txt-gray gap-d30 error-msg`}>{isError}</p>}
          <button class="btn btn-primary gap-d20" onClick={(e)=>handleLogin(e)}>
            <span class="material-icons md-24 gap-r10">login</span>
            Sign - In
          </button>
        </form>
          <Link to="/signup" className={`${styles.signupBtn} btn btn-primary-outline`}>
            <span className="material-icons md-24 gap-r10">account_circle</span>
              New User? Sign-Up
          </Link>
      </section>
    </div>
  );
};

export default LoginPage;
