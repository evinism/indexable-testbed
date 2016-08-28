import React from 'react';

const TaskList = (props) => (
  <div>
    <h2>
      {props.title}
    </h2>
    <span onClick={props.actions.destroy}> [x]</span>
    <div>
      {props.tasks.map((task) => (
        <div>
          <b>{task.text}</b>
          <span onClick={task.actions.destroy}> [x]</span>
          <div>
            Status: {task.status}
            <span onClick={() => task.actions.setStatus(prompt("What is the new status?"))}> [edit]</span>
          </div>
        </div>
      ))}
    </div>
    <hr />
    <div onClick={() => props.actions.add(prompt("What is your task?"))}>
      [+ New Task]
    </div>
  </div>
);

export default TaskList;
