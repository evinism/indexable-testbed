import Indexable from './indexable';

export default class Listable extends Indexable {
  compare = () => {
    throw("Error: Listable requires implementation of compare")
  }

  setParent = (parent) => {
    this._listable_parent = parent;
  }

  removeFromParent = () => {
    if(this.parent() !== undefined){
      this.parent().remove(this);
    }
  }

  parent = () => this._listable_parent;
}
