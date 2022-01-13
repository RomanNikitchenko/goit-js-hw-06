
const textInput = document.querySelector(`[data-length="6"]`);

textInput.addEventListener("blur", (event) => {

    const length = event.currentTarget.value.length;
    const dataLength = Number(textInput.getAttribute("data-length"));

    if (length === dataLength) {
        textInput.classList.replace("invalid", "valid");
    } else if (length === 0) {
        textInput.classList.remove("invalid", "valid");
    } else {
        textInput.classList.add("invalid");
    }

});
