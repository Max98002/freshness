import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

'use strict';

import {
  glide
} from "./modules/glide-slider/glide-slider.js";

import menu from "./modules/menu/menu.js";
import InitMask from './modules/mask/mask.js';
import scrolling from './modules/scroll/scroll.js'

window.addEventListener('DOMContentLoaded', () => {
  menu('.nav__link_menu');


  if (document.querySelector('.glide')) {
    glide.mount();
  }

  new InitMask('#phone').init();

  scrolling();

  if (document.documentElement.scrollTop > 50) {
    document.querySelector('.header').classList.add('header_shadow');
  }

  window.addEventListener('scroll', () => {
    let scroll = Math.round(document.documentElement.scrollTop);
    if (scroll > 50) {
      document.querySelector('.header').classList.add('header_shadow');
    } else {
      document.querySelector('.header').classList.remove('header_shadow');
    }
  });
});

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/