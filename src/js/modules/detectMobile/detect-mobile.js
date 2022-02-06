import MobileDetect from 'mobile-detect';


export default function detectMobile() {
  let detect = new MobileDetect(window.navigator.userAgent);

  let mobile = detect.mobile();
  let userAgent = detect.userAgent();

  const nav = document.querySelector('.nav');

  if (mobile && userAgent === 'Safari') {
    console.log('телефон Safari');
    nav.style.cssText = `
      height: calc(100vh - 180px);
    `;
  } else if (mobile && userAgent === 'Chrome') {
    console.log('телефон Chrome');
    nav.style.cssText = `
      height: calc(100vh - 205px);
    `;
  } else {
    console.log('Ноутбук');
  }
};