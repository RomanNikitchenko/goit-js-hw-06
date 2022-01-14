function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputAmountElements = document.querySelector('input[type="number"]');
const сreateBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");


сreateBtn.addEventListener("click", () => {
  const length = inputAmountElements.value
  
  const result = [];
  
  for (let i = 0; i <= length - 1; i++) {
    const blockElement = document.createElement("div");
    const multiplicationСycle = 30 + i * 10;

    blockElement.classList.add("boxes_item");
    blockElement.style.backgroundColor = getRandomHexColor();
    blockElement.style.width = `${multiplicationСycle}px`;
    blockElement.style.height = `${multiplicationСycle}px`;

    result.push(blockElement);
  }

  boxes.append(...result);
});


destroyBtn.addEventListener("click", () => {
  const listItems = boxes.children;

  const items = [];

  for (const listItem of listItems) {
    console.log(listItem);
    items.push(listItem);
  }

  items.map(item => item.remove());
});
