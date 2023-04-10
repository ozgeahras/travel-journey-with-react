import React from "react";
import path from '../assets/path.svg'

export default function Card(props) {
  return (
    <div className="container">
      <div className="flex-item">
        <img src={props.imageUrl} className="main-img" />
      </div>
      <div className="flex-item">
        <div className="info">
          <img src={path} className="path" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View On Google Maps</a>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
          <h4>{props.startDate} - {props.endDate}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
