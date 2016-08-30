import React from 'react';
import Task from './task';

const TaskList = (props) => (
  <div>
    <span onClick={props.actions.destroy}>[x] </span>
    <h2>
      {props.title}
    </h2>
    <ul>
      {props.tasks.map((task) => (
        <Task {...task} />
      ))}
    </ul>
    <hr />
    <div onClick={() => props.actions.add(prompt("What is your task?"))}>
      [+ New Task]
    </div>
  </div>
);

export default TaskList;
