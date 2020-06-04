import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import LogoPage from "../img/LogoPage2.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCurrentTest } from "../redux/Actions";
import NavBar from "./NavBar";

const MainNavbar = (props) => {
  let { section, test, testNumb, QuestionNumb } = props;
  let [pagePosition, setPagePosition] = useState(0);
  window.onscroll = function (ev) {
    setPagePosition(window.pageYOffset);
  };
  const dispatch = useDispatch();
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
  return (
    <div>
      {section === "" && (
        <animated.div className="Nav-bar" style={styleNavbar}>
          <div style={{ cursor: "pointer", width: "20%" }}>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
              onClick={() => dispatch(changeCurrentTest("MainPage"))}
            >
              <img
                alt="logopage"
                src={LogoPage}
                height="50px"
                width="auto"
              ></img>
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
              onClick={() => dispatch(changeCurrentTest("Ielts"))}
            >
              IELTS
            </Link>
            <Link
              to="/Toefl"
              style={{ color: "inherit", textDecoration: "inherit" }}
              onClick={() => dispatch(changeCurrentTest("Toefl"))}
            >
              TOEFL
            </Link>
            <Link
              to="/SAT"
              style={{ color: "inherit", textDecoration: "inherit" }}
              onClick={() => dispatch(changeCurrentTest("SAT"))}
            >
              SAT
            </Link>
            <Link
              to="/ACT"
              style={{ color: "inherit", textDecoration: "inherit" }}
              onClick={() => dispatch(changeCurrentTest("ACT"))}
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
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Log in
            </Link>
          </div>
        </animated.div>
      )}
      {section !== "" && (
        <NavBar
          section={section}
          test={test}
          testNumb={testNumb}
          QuestionNumb={QuestionNumb}
        ></NavBar>
      )}
    </div>
  );
};

export default MainNavbar;
