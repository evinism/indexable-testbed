import { values } from 'ramda';
import { action } from 'stupid-subscribe';

import Indexable from '../util/indexable';
import Task from './task';

export default class TaskList extends Indexable {
  tasks = {};
  append = (task) => {
    return this.tasks[task] = task;
  };

  remove = (task) => {
    delete this.tasks[task];
  };

  taskArray = () => (
    values(this.tasks).sort((a, b) => (a.text.localeCompare(b.text)))
  );

  getProps = () =>({
    tasks: this.taskArray().map(task => task.getProps()),
    actions: {
      add: action((text) => this.append(new Task(text, this))),
    }
  });
};
