import "./style.css";
import { useEffect, useState } from "react";

export default function Add(props) {
  

  return (
    <div className="list-item">
      {props.textContent}
      <div className = "check-mark-background">
        <img src = "/assets/checkmark.svg" className = "check-mark-image" onClick = {() => 
          props.handler(props.textContent)
        }></img>
      </div>
    </div>
  );
}
