import React from 'react';
import TaskList from './tasklist';

const AppView = (props) => (
  <article>
    <h1>Application</h1>
    <TaskList tasks={props.tasks} />
    <hr />
    <div className="bloop" onClick={() => props.actions.add(`This is task ${props.tasks.length + 1}`)}>
      Click here to add a task
    </div>
  </article>
);

export default AppView;
