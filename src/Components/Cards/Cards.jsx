import React from "react";

function Cards(props) {
  return (
    <div
      className="ContainerCards"
      style={{width: props.width, flexDirection: props.flex }}
    >
      <div className="containerImages">
        <img src={props.img} alt={props.alt} height={props.height} className="img" />
      </div>
      <div className="ContainerText">
        <h6>{props.txt}</h6>
      </div>
    </div>
  );
}

export default Cards;
