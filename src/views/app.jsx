import React from 'react';
import ListList from './listlist';

const AppView = (props) => (
  <article>
    <h1>Application</h1>
    <ListList {...props.tasklists} />
  </article>
);

export default AppView;
