import './garant.less';
import { Column } from '../../../utils/utils';
import $ from 'jquery';

const garant = require('./garant.html');

export default class Garant extends Column {
  init () {
    super.init(garant);

    this.showGarant();
  }

  showGarant() {
    $('#garant-btn').click( () => {
      $('#getPresentationModal').modal('show');
    });
  }
}

