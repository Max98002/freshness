import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

'use strict';


import {
  glide
} from "./modules/glide-slider/glide-slider.js";

import menu from "./modules/menu/menu.js";
import InitMask from './modules/mask/mask.js';

window.addEventListener('DOMContentLoaded', () => {
  menu('.btn-menu');
  glide.mount();

  new InitMask('#phone').init();

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