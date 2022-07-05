import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Stáhni životopis
      </a>
      <a href="#contact" className="btn btn-primary">
        Kontaktuj mě
      </a>
    </div>
  );
};

export default CTA;
