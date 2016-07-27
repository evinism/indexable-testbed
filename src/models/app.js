import TaskList from './tasklist';
import { action } from 'stupid-subscribe';

export default class App {
  taskList = new TaskList();
  getProps = () => ({
    taskList: this.taskList.getProps(),
  });
}
