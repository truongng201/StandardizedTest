import React from "react";
import InputField from "./AuthComponents/InputField";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { changeToSignIn } from "../redux/Actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const SignUpContent = [
    { type: "email", placeholder: "Mobile Number / Email" },
    { type: "text", placeholder: "Full Name" },
    { type: "text", placeholder: "Username" },
    { type: "password", placeholder: "Password" }
  ];

  const backToLogIn = () => {
    return () => {
      dispatch(changeToSignIn());
    };
  };

  return (
    <div className="right-container">
      <h1>Amstagram</h1>
      <div className="login-form sign-up">
        <form>
          {SignUpContent.map((item, index) => (
            <InputField
              type={item.type}
              placeholder={item.placeholder}
              key={index}
              style={{ borderLeft: "none", padding: "4px", width: "100%" }}
            ></InputField>
          ))}
          <div className="button-group-field-signup">
            <Button color="primary">Sign Up</Button>
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
