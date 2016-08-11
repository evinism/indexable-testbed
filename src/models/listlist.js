import { values } from 'ramda';
import { action } from 'stupid-subscribe';

import List from './../util/list';
import TaskList from './tasklist';

export default class ListList extends List {
  constructor(parent){
    super(parent);
  }

  compare = () => (0);

  getProps = () => ({
    lists: this.itemArray().map(list => list.getProps()),
    actions: {
      add: action((text) => this.append(new TaskList(text, this))),
    }
  });
};
