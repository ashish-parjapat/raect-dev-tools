import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>

      <div className="bottom">
        <Info details={props.tel} />
        <Info details={props.email} />
      </div>
    </div>
  );
}

export default Card;
