const changeSlides = (prop = 0) => {
  const slides = document.querySelectorAll(".slide");
  slides[prop].classList.add("active");
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearSlideActive();
      slide.classList.add("active");
    });
  });

  function clearSlideActive() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
};
changeSlides();
