import Glide from "@glidejs/glide";

import "@glidejs/glide/dist/css/glide.core.css";
// import "@glidejs/glide/dist/css/glide.theme.css";

const glide = new Glide(".glide", {
  type: "carousel",
  perView: 1,
  startAt: 0,
  keyboard: true,
  gap: 50,
  // autoplay: 3000,
  hoverpause: true,
  animationDuration: 1000,
  peek: {
    before: 0,
    after: 95
  },
  breakpoints: {
    1040: {
      peek: {
        before: 0,
        after: 0
      },
    }
  }
});

export { glide }

