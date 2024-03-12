import React from "react";
import "./prizes.scss";

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      <div className="prizeicons">
        {props.icon}
        <img src={props.srcx} alt={props.alt} className={props.className} />
      </div>
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}
function SponsorTrack(props) {
  return (
    <div className="Prizes sponsorPrizes">
      <div className="prizeicons sponsorTrackIcons">
        <a href={props.link} rel="noreferrer" target="_blank" >
          <img src={props.srcx} alt={props.alt} />
        </a>
      </div>
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export {FirstPrize, PrizeHeading, SponsorTrack};
