const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;

const formData = {
    email, 
    password, 
};

    if (email === "" || password === "") {
    return alert("Заповніть усі поля");
};

console.log(formData);
formEl.reset();
};
