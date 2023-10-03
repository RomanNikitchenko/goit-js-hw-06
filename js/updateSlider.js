export const updateSlider = (slides, currentSlideIndex) => {
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  console.log(currentSlideIndex);
};
