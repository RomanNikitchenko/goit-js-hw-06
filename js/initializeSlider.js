import { updateSlider } from './updateSlider.js';
export const initializeSlider = () => {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let currentSlideIndex = 0;

  prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlider(slides, currentSlideIndex);
  });

  nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlider(slides, currentSlideIndex);
  });

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      currentSlideIndex = index;
      updateSlider(slides, currentSlideIndex);
    });
  });
};
