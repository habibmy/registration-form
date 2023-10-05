function validateForm(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  var isValid = true;

  // Validate name (non-empty)
  if (name === "") {
    nameError.innerHTML = "Name is required.";
    isValid = false;
  } else {
    nameError.innerHTML = "";
  }

  // Validate email (non-empty and valid format)
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email === "") {
    emailError.innerHTML = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email format.";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  // Validate password (non-empty and at least 8 characters)
  if (password === "") {
    passwordError.innerHTML = "Password is required.";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters.";
    isValid = false;
  } else {
    passwordError.innerHTML = "";
  }

  if (isValid) {
    alert("Form submitted successfully!"); // Show an alert on successful validation
    registrationForm.reset();
  }

  return false; // Prevent the form from actually submitting
}
