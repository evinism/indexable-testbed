import React from 'react';
import TaskList from './tasklist';

const AppView = (props) => (
  <article>
    <h1>Application</h1>
    <TaskList {...props} />
    <hr />
    <div onClick={() => props.actions.add(prompt("What is your task?"))}>
      Click here to add a task
    </div>
  </article>
);

export default AppView;
