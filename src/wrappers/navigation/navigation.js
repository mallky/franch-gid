import './navigation.less';
import { Column } from '../../../utils/utils';

const navigation = require('./navigation.html');

export default class Navigation extends Column {
  init() {
    super.init(navigation);
  }
};
