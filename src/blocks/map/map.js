import './map.less';
import { Column } from '../../../utils/utils';

const map = require('./map.html');

export default class Map extends Column {
  init () {
    super.init(map);
  }
}
