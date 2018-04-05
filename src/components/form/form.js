import './form.less';
import $ from 'jquery';
import { Column } from '../../../utils/utils';

const contact = require('./form.html');

export default class Contact extends Column {
  init () {
    super.init(contact);

    this.validateForm();
  }

  validateForm () {
    const forms = document.getElementsByClassName('needs-validation');

    const validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
          event.stopPropagation();

          form.classList.add('was-validated');
        } else {
          const xhr = new XMLHttpRequest();

          xhr.open('POST', '/telegram', true);
          xhr.onload = () => {
            if (xhr.status === 200) {
              console.log('DONE');
              $('#getPresentationModal').modal('hide');
              $('#done').modal('show');
            }
            if (xhr.status !== 200) {
              console.log('MISTAKE');
              $('#getPresentationModal').modal('hide');
              $('#fail').modal('show');
            }
          };

          form.reset();
          form.classList.remove('was-validated');
        }
      }, false);
    });
  }
}