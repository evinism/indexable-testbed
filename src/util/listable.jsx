import Indexable from './indexable';

export default class Listable extends Indexable {
  constructor(parent) {
    super();
    this._listable_parent = parent
  }

  compare = () => {
    throw("Error: Listable requires implementation of compare")
  }
  parent = () => this._listable_parent;
}
