import './cooperation.less';
import { Column } from '../../../utils/utils';

const cooperation = require('./cooperation.html');

export default class Cooperation extends Column {
  init () {
    super.init(cooperation);
  }
}

