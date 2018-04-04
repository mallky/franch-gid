import $ from 'jquery';
import * as _ from 'lodash';

const createComponent = (component) => {
  return $(component)[0];
};

class Column {
  constructor (root) {
    this.root = root;
  }
  
  init (component, opt = {}) {
    const _component = _.template(component)(opt);

    this.root.appendChild(createComponent(_component));
  }
}

export {
  createComponent,
  Column
};