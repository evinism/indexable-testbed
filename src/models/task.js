import Indexable from '../util/indexable';
import { action } from 'stupid-subscribe';

export default class Task extends Indexable {
  constructor(text, parentList){
    super();
    this.parentList = parentList;
    this.text = text || "";
  };

  setText = (newText) => {
    this.text = newText;
  };

  getProps = () => ({
    text: this.text,
    actions: {
      remove: action(() => this.parentList.remove(this)),
    }
  });
}
