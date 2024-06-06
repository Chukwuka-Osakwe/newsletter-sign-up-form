const emailForm = document.querySelector(".js-email-input-section");
const inputBox = document.querySelector(".js-input-field");
const submitButton = document.querySelector(".js-button");
const enterValidEmail = document.querySelector(".js-valid-email-text");

inputBox.addEventListener("input", () => {
  if (inputBox.value.trim() !== "") {
    submitButton.classList.add("input-field-active");
  } else {
    submitButton.classList.remove("input-field-active");
  }

  checkFormValidity();
});

function checkFormValidity() {
  if (!inputBox.validity.valid && inputBox.value.trim() !== "") {
    inputBox.classList.add("invalid-input-styles");
    enterValidEmail.style.display = "inline-block";
  } else if (!inputBox.validity.valid && inputBox.value.trim() === "") {
    inputBox.classList.remove("invalid-input-styles");
    enterValidEmail.style.display = "none";
  } else if (inputBox.validity.valid) {
    inputBox.classList.remove("invalid-input-styles");
    enterValidEmail.style.display = "none";
  }
}

// add logic to handle form submission if email value is valid.

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailForm.checkValidity()) {
    const email = inputBox.value;
    console.log(email);

    localStorage.setItem("userEmail", email);
    //navigate to new page
    window.location.href = "../docs/success.html";
  } else {
    console.log("form is invalid.");
  }
});
