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

  function removeDoneTask(e){
    var array = doneTaskList.taskNames;
    var index = array.indexOf(e);
    if(index !== -1){
      array.splice(index, 1);
      setDoneTaskList({taskNames: array});
    }
  }

  function taskHandler(newTask){
    var array = taskList.taskNames;
    var index = array.indexOf(newTask);
    if(index == -1) {
      setNumTasks(numTasks + 1);
      setTaskList({taskNames: taskList.taskNames.concat(newTask)});
      removeDoneTask(newTask);
    } else {
      alert("This task already exists");
    }
  }

  function doneTaskHandler(newTask){
    setNumTasks(numTasks - 1);
    setDoneTaskList({taskNames: doneTaskList.taskNames.concat(newTask)});
    removeTask(newTask);
  }

  return (
    <div>
      <div id = "upper-body-container">
        <h3>
          You have {numTasks} tasks left to do
        </h3>
        <Add handler = {taskHandler}></Add>
      </div>
      <div id="lower-body-container">
        <h3>To Do</h3>
        <div>
          {taskList.taskNames.map((taskList) => <ListItem textContent = {taskList} handler = {doneTaskHandler}></ListItem>)}
        </div>
        <h3>Done</h3>
        <div>
          {doneTaskList.taskNames.map((doneTaskList) => <DoneListItem textContent = {doneTaskList} handler = {taskHandler}></DoneListItem>)}
        </div>
      </div>
    </div>
  );
}
