export default function menu (btnSelector) {
  const menuBtn = document.querySelector(btnSelector);
  
  let isOpen = false;

  menuBtn.addEventListener('click', function() {
    if (!isOpen) {
      isOpen = true;
      this.classList.add('btn-menu_active');
      document.querySelector('.header__logo').style.display = 'inherit';
      document.querySelector('.header__logo_mobile').style.display = 'none';
      document.querySelector('.header__address_mobile').style.display = 'none';
      document.querySelector('.nav').classList.add('showMenu');
      document.querySelector('.nav').classList.remove('hideMenu');
      document.body.style.background = '#F7FBEC';
      document.querySelector('.header').style.background = '#F7FBEC';
    } else {
      isOpen = false;
      this.classList.remove('btn-menu_active');
      document.querySelector('.header__logo').style.display = 'none';
      document.querySelector('.header__logo_mobile').style.display = 'inherit';
      document.querySelector('.header__address_mobile').style.display = 'inherit';
      document.querySelector('.nav').classList.remove('showMenu');
      document.querySelector('.nav').classList.add('hideMenu');
      document.body.style.background = '#FDFFF8';
      document.querySelector('.header').style.background = '#FDFFF8';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.width > 960) {
      document.querySelector('.nav').classList.remove('hideMenu');
    }
    if (window.screen.width > 960) {
      document.querySelector('.header__logo_mobile').style.display = 'none';
    } else {
      document.querySelector('.header__logo_mobile').style.display = 'inherit';
    }
  });

};