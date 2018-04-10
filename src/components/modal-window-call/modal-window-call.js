import { Column } from '../../../utils/utils';
import ContactCall from '../form-call/form-call';

const modalWindow = require('./modal-window-call.html');

export default class ModalWindowCall extends Column {
  init() {
    super.init(modalWindow);

    this.modalBody = this.root.querySelector('#call-window .modal-body');

    const _form = new ContactCall(this.modalBody);
    _form.init();
  }
}