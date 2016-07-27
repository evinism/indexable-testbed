import React from 'react';

const TaskList = (props) => (
  <div>
    {props.tasks.map((task) => (
      <div>
        {task.text}
      </div>
    ))}
  </div>
);

export default TaskList;
