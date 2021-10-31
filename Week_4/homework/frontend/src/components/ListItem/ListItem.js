import "./style.css";
import { useEffect, useState } from "react";

export default function Add(props) {
  

  return (
    <div className="list-item">
      <li className = "list-text">
        {props.textContent}
      </li>
      <div className = "check-mark-background">
        <img src = "/assets/checkmark.svg" className = "check-mark-image" onClick = {() => 
          props.handler(props.textContent)
        }></img>
      </div>
    </div>
  );
}
