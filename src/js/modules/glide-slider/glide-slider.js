import Glide from "@glidejs/glide";

import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";

const glide = new Glide(".glide", {
  type: "carousel",
  perView: 1,
  startAt: 0,
  keyboard: true,
});

export { glide }

