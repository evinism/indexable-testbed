import Listable from './listable';
import { values } from 'ramda';


export default class List extends Listable {
  constructor(parent){
    super(parent);
  }

  items = {};

  append = (item) => {
    return this.items[item] = item;
  };

  remove = (item) => {
    delete this.items[item];
  };

  itemArray = () => (
    values(this.items).sort((a, b) => a.compare(b))
  );
};
