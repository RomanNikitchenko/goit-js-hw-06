export const deactivateAllSlides = slides => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
};
