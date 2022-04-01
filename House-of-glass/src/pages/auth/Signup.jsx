import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from "../../Utils/AuthContext";
import "./Signup.css";
import axios from "axios";

export default function Signup() {
    const defaultData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [userData,setUserData]=useState(defaultData);
      //ADD A ERROR MESSAGE TO THE UI
    const [error, setError] = useState("");
    const navigate = useNavigate()


    const handleInput = (e) => {
        const { value, name } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSignup = async (userData) => {
        try {
          const response = await axios.post("/api/auth/signup", userData);
          if (response.status === 201) {
            setUserData(defaultData);
            navigate("/sign-in");
          }
        } catch (error) {
          setError("No user exists!");
        }
      };

      const submitHandler = (e) => {
        e.preventDefault();
        handleSignup(userData);
      };
  return (
    <main className="content">
  <div className=" glass__form--wrapper flex-mid-center br-8 flex-column-wrap">
    <h4 className="header-5">Sign Up</h4>
    <p className="body-1">Join us and get access to exclusive items</p>
    <form onSubmit={submitHandler}>
    <div className="input__container">
      <input type="name" placeholder="Full Name" name="firstName" onChange={handleInput} className="input__field glass__input glass__input--fname" required />
    </div>
    <div className="input__container">
      <input type="email" placeholder="Email" name="email" onChange={handleInput} className="input__field glass__input glass__input--email" required />
    </div>
    <div className="input__container">
      <input type="password" placeholder="Password" name="password" onChange={handleInput} className="input__field glass__input glass__input--pwd" required />
    </div>
    <div className="input__container">
      <input type="password" placeholder="Confirm your password" onChange={handleInput} name="confirmPassword" className="input__field glass__input glass__input--pwd" required />
    </div>
    <p className="text--terms caption text--center">By signing up you agree to accept all terms and
      conditions and
      agree to
      abide by the
      platform rules</p>
    <button type="submit" className="btn btn--primary btn--large glass__btn glass__btn-1">Sign up</button>
    <p className="subtitle-2">Already a Member?</p>
    <Link to="/sign-in" className="btn btn--large glass__btn glass__btn-2">Log In</Link>
    </form>
  </div>
  <div className="line__breaker" />
  <div className="box-shadow glass__form--image flex-mid-center box-shadow image--responsive">
    <img src="https://picsum.photos/id/684/600/400" alt="" />
  </div>
</main>

  )
}
