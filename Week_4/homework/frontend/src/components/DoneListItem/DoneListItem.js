import "./style.css";
import { useEffect, useState } from "react";

export default function Add(props) {
  

  return (
    <div className="done-list-item">
      <li className = "done-list-text">
        {props.textContent}
      </li>
      <div className = "undo-mark-background">
        <img src = "/assets/arrow-undo.svg" className = "undo-mark-image" onClick = {() =>
          props.handler(props.textContent)
        }></img>
      </div>
    </div>
  );
}
