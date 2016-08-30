import Listable from './listable';
import { values } from 'ramda';

export default class List extends Listable {
  items = {};

  append = (item) => {
    item.setParent(this);
    return this.items[item] = item;
  };

  remove = (item) => {
    item.setParent(undefined);
    delete this.items[item];
  };

  static compare = (a, b) => {
    throw("Error: Listable requires static implementation of compare")
  }

  itemArray = () => (
    values(this.items).sort((a, b) => this.constructor.compare(a, b))
  );
};
