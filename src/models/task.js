import Listable from './../util/listable';
import { action } from 'stupid-subscribe';

export default class Task extends Listable {
  constructor(text) {
    super();
    this.text = text || "";
    this.status = "open";
  };

  setText = (newText) => {
    this.text = newText;
  };

  setStatus = (newStatus) => {
    this.status = newStatus;
  }

  compare = (otherTask) => (this.text.localeCompare(otherTask.text));

  getProps = () => ({
    text: this.text,
    status: this.status,
    actions: {
      destroy: action(() => this.removeFromParent()),
      setStatus: action((status) => this.setStatus(status)),
    }
  });
}
