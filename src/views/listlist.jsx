import React from 'react';
import TaskList from './tasklist';

const ListList = (props) => (
  <div>
    <div onClick={() => props.actions.add(prompt("What is your list's title?"))}>
      [+ New List]
    </div>
    <hr />
    <div>
      {props.lists.map((list) => (
        <div className="tasklist">
          <TaskList {...list} />
        </div>
      ))}
    </div>
  </div>
);

export default ListList;
