import React from 'react';

const TaskList = (props) => (
  <div>
    <div>
      {props.tasks.map((task) => (
        <div>
          <span onClick={() => task.actions.remove(task)}>x </span>
          {task.text}
        </div>
      ))}
    </div>
    <hr />
    <div onClick={() => props.actions.add(prompt("What is your task?"))}>
      Click here to add a task
    </div>
  </div>
);

export default TaskList;
