const ratingLabel = document.querySelector("#ratingLabel");
const ratingInput = document.querySelector("#rating");
updateRatingLabel();

ratingInput.addEventListener("input", updateRatingLabel);

function updateRatingLabel() {
    ratingLabel.textContent = ratingInput.value;
}

const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const passwordError = document.querySelector("#passwordError");

password1.addEventListener("blur", () => {
    passwordError.classList.toggle("show", false);
});

password2.addEventListener("blur", checkPasswords);

function checkPasswords() {
    if (password1.value !== password2.value) {
        passwordError.classList.toggle("show", true);
        password1.value = "";
        password2.value = "";
        password1.focus();
    } else {
        passwordError.innerHTML = "";
        passwordError.classList.toggle("show", false);
    }
}