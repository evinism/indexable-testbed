import React from 'react';

const TaskList = (props) => (
  <div>
    <h2>
      {props.title}
    </h2>
    <span onClick={() => props.actions.destroy()}>x</span>
    <div>
      {props.tasks.map((task) => (
        <div>
          <span onClick={() => task.actions.destroy()}>x </span>
          {task.text}
        </div>
      ))}
    </div>
    <hr />
    <div onClick={() => props.actions.add(prompt("What is your task?"))}>
      + New Task
    </div>
  </div>
);

export default TaskList;
