import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

'use strict';

import menu from "./modules/menu/menu.js";
import { glide } from "./modules/glide-slider/glide-slider.js";

window.addEventListener('DOMContentLoaded', () => {
  menu('.btn-menu');
  glide.mount();
});

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/