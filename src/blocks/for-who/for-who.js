import './for-who.less';
import { Column } from '../../../utils/utils';

const forWho = require('./for-who.html');

export default class ForWho extends Column {
  init () {
    super.init(forWho);
  }
}
