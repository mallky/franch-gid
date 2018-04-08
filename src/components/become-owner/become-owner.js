import './become-owner.less';
import { Column } from '../../../utils/utils';
import $ from 'jquery';

const becomeOwner = require('./become-owner.html');

export default class BecomeOwner extends Column {
  init () {
    super.init(becomeOwner);

    this.changeImage();
  }

  changeImage() {
    $(window).on('load resize', () => {
      const imgSrc = $(window).width() <= 993
        ? './images/transformed-arrow-icons.png' : './images/arrow-icons.png';
      $('.image-container').find('.man-img')
        .find('img:last-child').attr('src', imgSrc);
    });
  }
}

