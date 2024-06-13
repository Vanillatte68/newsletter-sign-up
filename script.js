// get variable
var errorMsg = document.getElementById("errorMsg");
var emailValue = document.getElementById("emailValue");
var mainForm = document.getElementById("mainForm");
var successForm = document.getElementById("successForm");
var form = document.querySelector("form");

// validate form
function validateForm() {
  let email = document.getElementById("email");

  // if email empty
  if (!email.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
    errorMsg.style.display = "block";
    email.classList.add("inavlid");
    // if email valid
  } else {
    errorMsg.style.display = "none";
    email.classList.remove("inavlid");
    emailValue.innerHTML = email.value;
    form.reset();
    mainForm.style.display = "none";
    successForm.style.display = "flex";
  }
}

function dismissForm() {
  successForm.style.display = "none";
  mainForm.style.display = "flex";
}
