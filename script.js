const sliderImage = document.getElementById("slide-image");
const indicatorContainer = document.getElementById("indicator-container");

const images = ["Slider", "Slider-1", "Slider-2", "Slider-3"];

const indicators = [
  `<div class="active-slider"></div>
     <div class="slide-indicator"></div>
     <div class="slide-indicator"></div>
     <div class="slide-indicator"></div>`,
  `<div class="slide-indicator"></div>
     <div class="active-slider"></div>
     <div class="slide-indicator"></div>
     <div class="slide-indicator"></div>`,
  `<div class="slide-indicator"></div>
     <div class="slide-indicator"></div>
     <div class="active-slider"></div>
     <div class="slide-indicator"></div>`,
  `<div class="slide-indicator"></div>
     <div class="slide-indicator"></div>
     <div class="slide-indicator"></div>
     <div class="active-slider"></div>`,
];

let index = 0;

setInterval(() => {
  index++;
  if (index === 4) {
    index = 0;
  }
  indicatorContainer.innerHTML = indicators[index];
  sliderImage.setAttribute("src", `./images/${images[index]}.png`);
}, 2000);
