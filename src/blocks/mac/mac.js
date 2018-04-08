import './mac.less';
import { Column } from '../../../utils/utils';

const mac = require('./mac.html');

export default class Mac extends Column {
  init () {
    super.init(mac);
  }
}


