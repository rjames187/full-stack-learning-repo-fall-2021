import "./style.css";
import { useEffect, useState, Fragment } from "react";

import Add from "../../components/Add/Add.js";

export default function Home() {
  const [numTasks, setNumTasks] = useState(0);
  const [taskList, setTaskList] = useState({taskNames: []});

  function taskHandler(newTask){
    setNumTasks(numTasks + 1);
    setTaskList({taskNames: taskList.taskNames.concat(newTask)})
    console.log(taskList);
  }

  return (
    <div>
      <h1>
        {numTasks}
      </h1>
      <Add handler = {taskHandler}>

      </Add>
    </div>
  );
}
