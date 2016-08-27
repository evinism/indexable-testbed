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

  itemArray = () => (
    values(this.items).sort((a, b) => a.compare(b))
  );
};
