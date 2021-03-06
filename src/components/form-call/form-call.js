import './form-call.less';
import $ from 'jquery';
import { Column } from '../../../utils/utils';

const contact = require('./form-call.html');

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
          const $form = $('form').eq(0).is(":visible") ? $('form').eq(0) : $('form').eq(1);
          $.ajax({
            type: $form.attr('method'),
            url: 'send.php',
            data: $form.serialize()
          }).done(function() {
            console.log('success');
            Contact.closeDialog();
            $('#done').modal('show');
          }).fail(function() {
            console.log('fail');
            Contact.closeDialog();
            $('#fail').modal('show');
          });

          form.reset();
          form.classList.remove('was-validated');
        }
      }, false);
    });
  }

  static closeDialog() {
    $('#getPresentationModalCall').modal('hide');
    $('#getPresentationModal').modal('hide');
  }
}