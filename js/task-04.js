
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resultButtons = document.querySelector("#value");


let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue += 1;
    console.log(counterValue);
});




