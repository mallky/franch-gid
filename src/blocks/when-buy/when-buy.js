import './when-buy.less';
import { Column } from '../../../utils/utils';
import $ from 'jquery';

import BecomeOwner from '../../components/become-owner/become-owner';

const whenBuy = require('./when-buy.html');

export default class WhenBuy extends Column {
  init () {
    super.init(whenBuy);

    const becomeOwner = new BecomeOwner(this.root.querySelector('#become-owner'));

    becomeOwner.init();
    
    this.showForm();
  }

  showForm () {
    $('#get-presentation-btn').click( () => {
      $('#getPresentationModal').modal('show');
    });    
  }
}

