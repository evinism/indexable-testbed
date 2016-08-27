import React from 'react';
import ListList from './listlist';

const AppView = (props) => (
  <article>
    <h1>TodoApp</h1>
    <ListList {...props.tasklists} />
  </article>
);

export default AppView;
