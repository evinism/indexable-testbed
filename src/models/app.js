import ListList from './listlist';
import TaskList from './tasklist';

export default class App {
  constructor() {
    this.taskLists = new ListList();
  }

  getProps = () => ({
    tasklists: this.taskLists.getProps(),
  });
}
