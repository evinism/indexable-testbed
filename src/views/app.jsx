import React from 'react';
import TaskList from './tasklist';

const AppView = (props) => (
  <article>
    <h1>Application</h1>
    <TaskList {...props.taskList} />
  </article>
);

export default AppView;
