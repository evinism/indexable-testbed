import React from 'react';
import { Status } from './../models/task';

const Task = (props) => (
  <li>
    <span onClick={props.actions.destroy}>[x] </span>
    <b>{props.text}</b>
    <div>
      <label>Status:
        <select
          onChange={(e) => props.actions.setStatus(Status[e.target.value])}
          value={props.status.value}
        >
          {Object.values(Status).map((status) => (
            <option value={status.value} selected>
              {status.text}
            </option>
          ))}
        </select>
      </label>
    </div>
  </li>
);

export default Task;
