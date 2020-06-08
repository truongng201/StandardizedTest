import React, { useState } from "react";
import usernameIcon from "../img/usernameIcon.png";
import passwordIcon from "../img/passwordIcon.png";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { changeToSignUp } from "../redux/Actions";
import { useHistory } from "react-router-dom";
import firebase from "../config/fbconfig";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [emailvalue, setEmailvalue] = useState("");
  const [passwordvalue, setPasswordvalue] = useState("");

  const LogIn = () => {
    return () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailvalue, passwordvalue)
        .catch(function (error) {
          // Handle Errors here.
        });

      history.goBack();
    };
  };

  const goToSignUp = () => {
    return () => {
      dispatch(changeToSignUp());
    };
  };

  const handleChangeEmail = (event) => {
    setEmailvalue(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPasswordvalue(event.target.value);
  };

  return (
    <div className="right-container">
      <h1>WeStart</h1>
      <div className="login-form">
        <form>
          <div className="input-field">
            <img src={usernameIcon} alt="icon"></img>
            <input
              type="email"
              className="email"
              placeholder="Email"
              value={emailvalue}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="input-field">
            <img src={passwordIcon} alt="icon"></img>
            <input
              type="password"
              className="password"
              placeholder="Password"
              value={passwordvalue}
              onChange={handleChangePassword}
            />
          </div>
          <div className="button-group-field">
            <input type="checkbox" />
            <div>Remember Me</div>

            <Button color="primary" onClick={LogIn()}>
              Log In{" "}
            </Button>
          </div>
          <div className="signup-retake">
            <div
              style={{ color: "#007bff" }}
              className="Register"
              onClick={goToSignUp()}
            >
              Register Now?
            </div>
            <div className="Retake">Forgot Password?</div>
          </div>
        </form>
      </div>
      <div className="horizontal-line">
        <div style={{ padding: "0 10px" }}>or</div>
      </div>

      <div className="OAuth">
        <div className="OAuth-facebook">
          <i className="fa fa-facebook fa-fw"></i>
          Login with Facebook
        </div>
        <div className="OAuth-gmail">
          <i className="fa fa-google fa-fw"></i> Login with Gmail
        </div>
      </div>
    </div>
  );
};

export default SignIn;
