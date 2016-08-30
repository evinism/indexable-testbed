import Listable from './../util/listable';
import { action } from 'stupid-subscribe';

export const Status = {
  open: {value: "open", text: "Open"},
  inProgress: {value: "inProgress", text: "In Progress"},
  finished: {value: "finished", text: "Closed"},
  dismissed: {value: "dismissed", text: "Dismissed"},
};

export default class Task extends Listable {
  constructor(text) {
    super();
    this.text = text || "";
    this.status = Status.open;
  };

  setText = (newText) => {
    this.text = newText;
  };

  setStatus = (newStatus) => {
    this.status = newStatus;
  }

  getProps = () => ({
    text: this.text,
    status: this.status,
    actions: {
      destroy: action(() => this.removeFromParent()),
      setStatus: action((status) => this.setStatus(status)),
    }
  });
}
