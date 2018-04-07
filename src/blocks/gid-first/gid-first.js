import './gid-first.less';
import { Column } from '../../../utils/utils';

const gidFirst = require('./gid-first.html');

export default class GidFirst extends Column {
  init () {
    super.init(gidFirst);
  }
}
