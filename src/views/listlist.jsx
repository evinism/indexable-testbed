import React from 'react';
import TaskList from './tasklist';

const ListList = (props) => (
  <div>
    <div>
      {props.lists.map((list) => (
        <div className="tasklist">
          <TaskList {...list} />
        </div>
      ))}
    </div>
    <hr />
    <div onClick={() => props.actions.add(prompt("What is your list's title?"))}>
      Click here to add a list
    </div>
  </div>
);

export default ListList;
