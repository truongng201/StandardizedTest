import React, { useState } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { changeToSignIn } from "../redux/Actions";
import { useFirebase } from "react-redux-firebase";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const TestDone = [];
  const backToLogIn = () => {
    return () => {
      dispatch(changeToSignIn());
    };
  };
  const firebase = useFirebase();
  const signUp = () => {
    console.log(FullName, userName, password, email);
    firebase.createUser(
      { email, password },
      { userName, FullName, email, TestDone }
    );
    dispatch(changeToSignIn());
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeFullName = (event) => {
    setFullName(event.target.value);
  };
  const changeUsername = (event) => {
    setUserName(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="right-container">
      <h1>WeStart</h1>
      <div className="login-form sign-up">
        <form>
          <div className="input-field">
            <input
              type="Email"
              placeholder="Email"
              style={{ borderLeft: "none", padding: "4px", width: "100%" }}
              onChange={changeEmail}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              style={{ borderLeft: "none", padding: "4px", width: "100%" }}
              onChange={changeFullName}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              style={{ borderLeft: "none", padding: "4px", width: "100%" }}
              onChange={changeUsername}
            />
          </div>
          <div className="input-field">
            <input
              type="Password"
              placeholder="Password"
              style={{ borderLeft: "none", padding: "4px", width: "100%" }}
              onChange={changePassword}
            />
          </div>
          <div className="button-group-field-signup">
            <Button color="primary" onClick={signUp}>
              Sign Up
            </Button>
            <div>
              Have An Account? <span onClick={backToLogIn()}> Log In</span>
            </div>
          </div>
        </form>
        <div className="Terms-and-Policy">
          By signing up, you agree to our Terms, Data Policy and Cookies Policy
        </div>
      </div>
    </div>
  );
};

export default SignUp;
