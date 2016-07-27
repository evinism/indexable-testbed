import React from 'react';

const TaskList = (props) => (
  <div>
    {props.tasks.map((task) => (
      <div>
        <span onClick={() => props.actions.remove(task)}>x </span>
        {task.text}
      </div>
    ))}
  </div>
);

export default TaskList;
