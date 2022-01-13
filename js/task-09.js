function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector("body");
const colorChangingButton = document.querySelector(".change-color");
const colorСodeText = document.querySelector(".color");

colorChangingButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorСodeText.textContent = getRandomHexColor();
});
