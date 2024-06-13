var errorMsg = document.getElementById("errorMsg");
var emailValue = document.getElementById("emailValue");
function validateForm() {
  let email = document.getElementById("email");

  // if email empty
  if (!email.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
    errorMsg.style.display = "block";
    email.style.borderColor = "var(--primary-color)";
    // if email valid
  } else {
    errorMsg.style.display = "none";
    email.style.borderColor = "var(--grey)";
    emailValue.innerHTML = email.value;
  }
}
