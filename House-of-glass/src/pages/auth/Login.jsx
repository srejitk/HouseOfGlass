import TextField from "components/Textfield/TextField";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../Utils/AuthContext";
import axios from "axios";

export default function Login() {
  const defaultData = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(defaultData);
  //ADD A ERROR MESSAGE TO THE UI
  const [error, setError] = useState("");
  const { isLogged, setIsLogged, userDetails, setUserDetails } = useAuth();

  const handleInput = (e) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = async (loginData) => {
    try {
      const response = await axios.post("/api/auth/login", loginData);
      if (response.status === 200) {
        setIsLogged(true);
        setUserDetails(response.data.foundUser);
        localStorage.setItem("Token", response.data.encodedToken);
        setLoginData(defaultData);
        navigate("/");
      }
    } catch (error) {
      setError("No user exists!");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };

  return (
    <main className="content grid col2x2">
      <div className="glass__form--wrapper position-relative flex-mid-center br-8 flex-column-wrap">
        <h4 className="header-5">Sign In</h4>
        <p className="body-1 text--center">
          Join back and get access to exclusive items
        </p>

        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={loginData.email}
            className="input__field glass__input glass__input--email"
            onChange={handleInput}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            id="pwd"
            value={loginData.password}
            className="input__field glass__input glass__input--email"
            onChange={handleInput}
          />
          <div className="glass__input--options">
            <div className="input__container glass__form--input">
              <label htmlFor="remember-me" className="input--sidelabel">
                Remember Me
              </label>
              <input
                type="checkbox"
                id="remember-me"
                className=" input--field--checkbox input--demo"
              />
            </div>
            <Link
              to="/forgot-password"
              className="glass__input--forgot subtitle-1"
            >
              Forgot Password?
            </Link>
          </div>
          <p className="text--terms caption text--center">
            By signing in you agree to accept all terms and conditions and agree
            to abide by the platform rules
          </p>
          <button
            type="submit"
            className="btn btn--primary btn--large glass__btn glass__btn-1"
          >
            Log In
          </button>
          <p className="subtitle-2">Not a Member?</p>
          <Link
            to="/sign-up"
            className="btn btn--large glass__btn glass__btn-2"
          >
            Sign Up
          </Link>
        </form>
      </div>
      <div className="line__breaker position-absolute" />
      <div className="box-shadow glass__form--image flex-mid-center box-shadow image--responsive">
        <img
          src="https://picsum.photos/id/684/600/400"
          alt="login-hero-illustration"
        />
      </div>
    </main>
  );
}
