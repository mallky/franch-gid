import './map.less';
import { Column } from '../../../utils/utils';
import $ from 'jquery';

const map = require('./map.html');

export default class Map extends Column {
  init () {
    super.init(map);

    $('#map').find('button').click(() => {
      $('#getPresentationModal').modal('show');
    });
  }
}
