import './when-buy.less';
import { Column } from '../../../utils/utils';

const whenBuy = require('./when-buy.html');

export default class WhenBuy extends Column {
  init () {
    super.init(whenBuy);
  }
}

