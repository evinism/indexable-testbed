import ListList from './listlist';
import TaskList from './tasklist';
import { action } from 'stupid-subscribe';

export default class App {
  constructor() {
    this.taskLists = new ListList();
    this.taskLists.append(new TaskList('Todo List', this.taskLists));
  }

  getProps = () => ({
    tasklists: this.taskLists.getProps(),
  });
}
