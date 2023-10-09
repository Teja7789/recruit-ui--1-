import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the styles
import backArrowIcon from "./../../assets/images/backArrowIcon.svg";


import "./titleHeader.css";

const TitleHeader = ({onClick, title, nextStep, progress }) => {
  return (
    <div className="custom-header">
      <img
        src={backArrowIcon}
        alt=""
        className="cursorPointer"
        onClick={onClick}
      />
      <div className="left ml-2 pt-2">
        {/* Content on the left side */}
        <h5>{title}</h5>
      </div>
      <div className="right">
        <small className="font-light"> Next:</small>
        <br />
        <small>{nextStep}</small>
        <div style={{ width: 60, height: 60 }}>
          <CircularProgressbar 
          value={progress}
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: "#ff6600"

            })} />
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
