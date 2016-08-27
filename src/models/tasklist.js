import { action } from 'stupid-subscribe';
import List from './../util/list';
import Task from './task';

export default class TaskList extends List {
  constructor(title) {
    super();
    this.title = title || "";
  }

  compare = () => (0);

  getProps = () => ({
    title: this.title,
    tasks: this.itemArray().map(task => task.getProps()),
    actions: {
      add: action((text) => this.append(new Task(text))),
      destroy: action(() => this.removeFromParent()),
    }
  });
};
