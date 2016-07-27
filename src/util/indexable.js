import {v4} from "uuid";

class Indexable {
  uuid = v4();
  toString = () => ("Indexable-" + this.uuid);
}

export default Indexable;
