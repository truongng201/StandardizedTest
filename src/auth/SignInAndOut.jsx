import React from "react";
import signInandOutImg from "../img/authentication.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import "./SignInAndOut.css";
import ReturnButton from "./ReturnButton";

const SignInAndOut = () => {
  let currentAuth = useSelector((state) => state.currentAuth);

  return (
    <div className="signin-signup-container">
      <ReturnButton></ReturnButton>
      <div className="left-container">
        <img src={signInandOutImg} alt="ads"></img>
      </div>
      {currentAuth === "Sign In" && <SignIn></SignIn>}
      {currentAuth === "Sign Up" && <SignUp></SignUp>}
    </div>
  );
};

export default SignInAndOut;
