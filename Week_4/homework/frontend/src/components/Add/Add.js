import "./style.css";
import { useEffect, useState } from "react";

export default function Add(props) {
  

  return (
    <div id="add-container">
      <input id="add-input" placeholder="Type your task here"></input>
      <button id="add-button" onClick = {() =>
        props.handler(document.querySelector("#add-input").value)
      }>Add</button>
    </div>
  );
}
