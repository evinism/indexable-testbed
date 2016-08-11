import Listable from './../util/listable';
import { action } from 'stupid-subscribe';

export default class Task extends Listable {
  constructor(text, parentList){
    super(parentList);
    this.text = text || "";
  };

  setText = (newText) => {
    this.text = newText;
  };

  compare = (otherTask) => (this.text.localeCompare(otherTask.text));

  getProps = () => ({
    text: this.text,
    actions: {
      remove: action(() => this.parent().remove(this)),
    }
  });
}
