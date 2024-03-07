import React, { useState } from "react";
import "./faq.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-item">
        <div
          className="accordion-title "
          onClick={() => setIsActive(!isActive)}
        >
          <div className="col-lg-10 col-md-10 col-sm-10 col-10">{title}</div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2 sign">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
