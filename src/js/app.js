import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

'use strict';

import menu from "./modules/menu/menu.js";
import detectMobile from './modules/detectMobile/detect-mobile.js';


window.addEventListener('DOMContentLoaded', () => {
  menu('.btn-menu');
  detectMobile();
});

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/