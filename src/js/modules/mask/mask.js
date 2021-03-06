export default class InitMask {
  constructor(selector) {
    this.inputs = document.querySelectorAll(selector);
  }

  createMask(event) {

    const setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    let matrix = '(___) ___-____',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  init() {
    this.inputs.forEach(input => {
      input.addEventListener('input', this.createMask);
      input.addEventListener('focus', this.createMask);
      input.addEventListener('blur', this.createMask);

      input.addEventListener('focus', () => {
        document.querySelector('.hero-input__wrap').style.borderColor = '#748745';
      });
      input.addEventListener('blur', () => {
        document.querySelector('.hero-input__wrap').style.borderColor = '#D6E3B5';
      });
      
    });
  }
}