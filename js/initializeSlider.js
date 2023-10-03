import { deactivateAllSlides } from './deactivateAllSlides.js';
import { activateSlide } from './activateSlide.js';
export const initializeSlider = () => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      deactivateAllSlides(slides);
      activateSlide(slide);
    });
  });
};
