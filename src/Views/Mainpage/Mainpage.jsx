import React from "react";
import Banner from "./Banner/Banner";
import MainNavBar from "../../Navbar/MainNavBar";

const Mainpage = () => {
  return (
    <div className="Mainpage">
      <MainNavBar section={""}></MainNavBar>
      <Banner></Banner>
    </div>
  );
};

export default Mainpage;
