
const rangeInput = document.querySelector("#font-size-control");
const changeSizeText = document.querySelector("#text");


rangeInput.addEventListener("input", (event) => {

    const namber = `${event.currentTarget.value}px`;

    changeSizeText.style.fontSize = namber;

});