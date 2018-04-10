import './form.less';
import { Column } from '../../../utils/utils';

const contact = require('./form.html');

export default class Contact extends Column {
  init () {
    super.init(contact);
  }
}