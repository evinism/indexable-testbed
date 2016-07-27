import TaskList from './tasklist';
import Task from './task';
import { action } from 'stupid-subscribe';

export default class App {
  taskList = new TaskList();
  getProps = () => ({
    tasks: this.taskList.taskArray(),
    actions: {
      add: action(text => this.taskList.append(new Task(text))),
      remove: action(task => this.taskList.remove(task)),
    },
  });
}
