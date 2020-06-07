import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import LogoPage from "../img/LogoPage2.png";
import { Link } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import firebase from "../config/fbconfig";

const MainNavbar = (props) => {
  let { section, test, testNumb, QuestionNumb } = props;
  let isLogged = useSelector((state) => state.firebase.auth.isEmpty);
  let [pagePosition, setPagePosition] = useState(0);
  window.onscroll = function (ev) {
    setPagePosition(window.pageYOffset);
  };

  let styleNavbar = useSpring({
    width: "100%",
    height: "auto",
    position: "fixed",
    top: 0,
    zIndex: "10",
    padding: "5px 40px",
    display: "flex",
    color: pagePosition === 0 ? "white" : "#CA005E",
    fontWeight: "500",
    fontSize: "20px",
    backgroundColor: pagePosition === 0 ? "rgba(0,0,0,0)" : "white",
    boxShadow:
      pagePosition === 0
        ? "0px 0px 0px 0px rgba(0,0,0,0)"
        : "0px 8px 20px 5px rgba(0,0,0,0.2)",
  });

  const logOut = () => {
    return () => {
      firebase.auth().signOut();
    };
  };

  if (section === "")
    return (
      <animated.div className="Nav-bar" style={styleNavbar}>
        <div style={{ cursor: "pointer", width: "20%" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <img alt="logopage" src={LogoPage} height="50px" width="auto"></img>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            width: "30%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "30%",
          }}
        >
          <Link
            to="/Ielts"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            IELTS
          </Link>
          <Link
            to="/Toefl"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            TOEFL
          </Link>
          <Link
            to="/SAT"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            SAT
          </Link>
          <Link
            to="/ACT"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            ACT
          </Link>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: "10%",
            display: "flex",
            alignItems: "center",
            marginLeft: "5%",
            justifyContent: "center",
            paddingLeft: "30px",
          }}
        >
          {isLogged ? (
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Log in
            </Link>
          ) : (
            <div onClick={logOut()}>Log out</div>
          )}
        </div>
      </animated.div>
    );

  if (section !== "" && section !== "login")
    return (
      <NavBar
        section={section}
        test={test}
        testNumb={testNumb}
        QuestionNumb={QuestionNumb}
      ></NavBar>
    );

  if (section === "login") {
    return <ReturnButton></ReturnButton>;
  }
};

export default MainNavbar;
