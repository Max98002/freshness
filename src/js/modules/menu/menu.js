import scrolling from '../scroll/scroll.js';

export default function menu(btnSelector) {
  const menuBtn = document.querySelectorAll(btnSelector);

  let isOpen = false;

  const logoMobile = document.querySelector('.header__logo_mobile');
  const addressMobile = document.querySelector('.header__address_mobile');
  const headerLogo = document.querySelector('.header__logo');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const btnLocationMobile = document.querySelector('.btn__location_mobile');

  menuBtn.forEach(menuBtn => {

    menuBtn.addEventListener('click', function () {
      if (!isOpen) {
        isOpen = true;
        menuBtn.classList.add('btn-menu_active');
        document.body.style.cssText = `
          background: #F7FBEC;
        `;

        // Коли меню відкрито додавати клас showMenu до навігації та видалити клас що його ховає hideMenu
        nav.classList.add('showMenu');
        nav.classList.remove('hideMenu');

        // Коли меню відкрито додаємо клас для лого hide
        logoMobile.classList.add('hide');
        // Коли меню відкрито додаємо клас для адрес hide
        addressMobile.classList.add('hide');
        // Коли меню відкрито додаємо клас show для лого

        if (document.documentElement.clientWidth <= 979) {
          headerLogo.classList.add('show', 'header__logo_menu');
          // Коли меню відкрито header отримує клас налаштуваннь для відкритого меню
          // Коли меню відкрито показуємо кнопку локації
          btnLocationMobile.classList.add('btn__location_mobile_active');
        }

        header.classList.add('header_menu');

      } else {
        isOpen = false;
        document.querySelector('.btn-menu').classList.remove('btn-menu_active')
        document.body.style.cssText = `
          background: #FDFFF8;
        `;

        // Коли меню закрито додавати клас hideMenu до навігації та видалити клас що його показує showMenu
        nav.classList.remove('showMenu');
        nav.classList.add('hideMenu');
        setTimeout(() => {
          if (nav.classList.contains('hideMenu')) {
            nav.classList.remove('hideMenu');
          }
        });

        // Коли меню закрито видаляємо клас для лого hide
        logoMobile.classList.remove('hide');
        // Коли меню закрито видаляємо клас для адрес hide
        addressMobile.classList.remove('hide');
        // Коли меню закрито видаляємо клас show для лого
        headerLogo.classList.remove('show', 'header__logo_menu');
        // Коли меню закрито header видаляє клас налаштуваннь для відкритого меню
        header.classList.remove('header_menu');
        // Коли меню закрито ховаємо кнопку локації
        btnLocationMobile.classList.remove('btn__location_mobile_active');
      }
      scrolling();
    });

  });

};