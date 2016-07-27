import Indexable from '../util/indexable';
import { values } from 'ramda';

export default class TaskList extends Indexable {
  tasks = {};
  append = (task) => {
    return this.tasks[task] = task;
  };

  remove = (index) => {
    delete this.tasks[task];
  };

  taskArray = () => (
    values(this.tasks).sort((a, b) => (a.text.localeCompare(b.text)))
  );
};
