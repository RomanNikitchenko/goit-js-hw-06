const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const withoutInput = output.textContent;

textInput.addEventListener("input", (event) => {

    // //V2
    // if (!event.currentTarget.value) {
    //     output.textContent = withoutInput;
    // } else {
    //     output.textContent = event.currentTarget.value;
    // };

    !event.currentTarget.value
        ? output.textContent = withoutInput
        : output.textContent = event.currentTarget.value;
    
});