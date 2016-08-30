import { values } from 'ramda';
import { action } from 'stupid-subscribe';

import List from './../util/list';
import TaskList from './tasklist';

export default class ListList extends List {
  static compare = (a, b) => (a.title.localeCompare(b.title));

  getProps = () => ({
    lists: this.itemArray().map(list => list.getProps()),
    actions: {
      add: action((text) => this.append(new TaskList(text))),
    }
  });
};
