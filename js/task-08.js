
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    };

    const anObject = {
        email: email.value,
        password: password.value
    }

    console.log(anObject);

    event.currentTarget.reset();
});

