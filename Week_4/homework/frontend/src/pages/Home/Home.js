import "./style.css";
import { useEffect, useState, Fragment } from "react";

import Add from "../../components/Add/Add.js";
import ListItem from "../../components/ListItem/ListItem.js";
import DoneListItem from "../../components/DoneListItem/DoneListItem.js";

export default function Home() {
  const [numTasks, setNumTasks] = useState(0);
  const [taskList, setTaskList] = useState({taskNames: []});
  const [doneTaskList, setDoneTaskList] = useState({taskNames: []});

  function removeTask(e){
    var array = taskList.taskNames;
    var index = array.indexOf(e);
    if(index !== -1){
      array.splice(index, 1);
      setTaskList({taskNames: array});
    }
  }

  function taskHandler(newTask){
    setNumTasks(numTasks + 1);
    setTaskList({taskNames: taskList.taskNames.concat(newTask)})
    console.log(taskList);
  }

  function doneTaskHandler(newTask){
    setNumTasks(numTasks - 1);
    setDoneTaskList({taskNames: doneTaskList.taskNames.concat(newTask)});
    removeTask(newTask);
  }

  return (
    <div>
      <h1>
        You have {numTasks} tasks left to do
      </h1>
      <Add handler = {taskHandler}>
      </Add>
      <div>
        {taskList.taskNames.map((taskList) => <li><ListItem textContent = {taskList} handler = {doneTaskHandler}></ListItem></li>)}
      </div>
      <div>
        {doneTaskList.taskNames.map((doneTaskList) => <li><DoneListItem textContent = {doneTaskList} handler = {doneTaskHandler}></DoneListItem></li>)}
      </div>
    </div>
  );
}
