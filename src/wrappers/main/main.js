import './main.less';
import $ from 'jquery';
import { Column } from '../../../utils/utils';
import ModalWindow from '../../components/modal-window/modal-window';
import DoneModalWindow from '../../components/send-done/send-done';
import FailModalWindow from '../../components/send-failed/send-fail';

const main = require('./main.html');

export default class Main extends Column {
  init () {
    super.init(main);

    const modalWindow = new ModalWindow(this.root.querySelector('.modal-btn-wrapper'));
    const doneModalWindow = new DoneModalWindow(this.root.querySelector('.done-btn-wrapper'));
    const failModalWindow = new FailModalWindow(this.root.querySelector('.fail-btn-wrapper'));

    modalWindow.init();
    doneModalWindow.init();
    failModalWindow.init();

    this.askForCall();
  }

  askForCall () {
    $('#main-white').click( () => {
      $('#getPresentationModal').modal('show');
    });
  }
}