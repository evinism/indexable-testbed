import Indexable from '../util/indexable';

export default class Task extends Indexable {
  constructor(text){
    super();
    this.text = text || "";
  };

  setText = (newText) => {
    this.text = newText;
  };
}
