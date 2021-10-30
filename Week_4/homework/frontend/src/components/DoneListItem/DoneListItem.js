import "./style.css";
import { useEffect, useState } from "react";

export default function Add(props) {
  

  return (
    <div className="list-item">
      {props.textContent}
      <div className = "undo-mark-background">
        <img src = "/assets/arrow-undo.svg" className = "check-mark-image" onClick = {() =>
          props.handler(props.textContent)
        }></img>
      </div>
    </div>
  );
}
