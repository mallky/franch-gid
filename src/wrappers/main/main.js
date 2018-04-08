import './main.less';
import $ from 'jquery';
import { Column } from '../../../utils/utils';
import ModalWindow from '../../components/modal-window/modal-window';
import DoneModalWindow from '../../components/send-done/send-done';
import FailModalWindow from '../../components/send-failed/send-fail';
import GidFirst from '../../blocks/gid-first/gid-first';
import ForWho from '../../blocks/for-who/for-who';
import Cooperation from '../../blocks/cooperation/cooperation';
import WhenBuy from '../../blocks/when-buy/when-buy';

const main = require('./main.html');

export default class Main extends Column {
  init () {
    super.init(main);
    const mainContainer = this.root.querySelector('main');

    const modalWindow = new ModalWindow(this.root.querySelector('.modal-btn-wrapper'));
    const doneModalWindow = new DoneModalWindow(this.root.querySelector('.done-btn-wrapper'));
    const failModalWindow = new FailModalWindow(this.root.querySelector('.fail-btn-wrapper'));
    const gidFirst = new GidFirst(mainContainer);
    const forWho = new ForWho(mainContainer);
    const cooperation = new Cooperation(mainContainer);
    const whenBuy = new WhenBuy(mainContainer);

    modalWindow.init();
    doneModalWindow.init();
    failModalWindow.init();
    gidFirst.init();
    forWho.init();
    cooperation.init();
    whenBuy.init();

    this.askForCall();
    this.forIpad();
  }

  askForCall () {
    $('#main-white').click( () => {
      $('#getPresentationModal').modal('show');
    });
  }

  forIpad () {
    const isIPad = navigator.userAgent.match(/iPad/i) != null;

    if (isIPad) {
      $('#app').find('main').find('#about').css('background-position-x', '-2250px');
    }
  }
}