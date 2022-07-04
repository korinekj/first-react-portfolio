import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Ahoj, já jsem</h5>
        <h1>Jarda Kořínek</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
