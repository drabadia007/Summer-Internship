const slides = document.querySelectorAll(".slide");
const next_btn = document.querySelector(".next");
const prev_btn = document.querySelector(".prev");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

next_btn.addEventListener("click", () => {
  counter++;
  carousel();
});

prev_btn.addEventListener("click", () => {
  counter--;
  carousel();
});

const carousel = () => {
  // working with the slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%`;
  });
};
