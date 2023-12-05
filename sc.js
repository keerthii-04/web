function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = passwordInput.nextElementSibling;
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.innerHTML = '&#x1F440;'; // Eye open icon
    } else {
      passwordInput.type = 'password';
      toggleIcon.innerHTML = '&#x1F441;'; // Eye closed icon
    }
  }
  function validatePassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('password-error');
  
    if (passwordInput.value !== confirmPasswordInput.value) {
      passwordError.textContent = "Passwords don't match";
    } else {
      passwordError.textContent = '';
    }
  }
  function validateForm(event) {
    event.preventDefault();
  
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("error-message");
  
    if (password === "" || confirmPassword === "") {
        errorMessage.textContent = "Please fill in both password and confirm password.";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
    } else {
        // Perform your login logic here
        // For demonstration purposes, we'll just clear the error message
        errorMessage.textContent = "";
    }
  }
  function enableConfirmPassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  
  if (password.value.trim() !== "") {
      confirmPassword.disabled = false;
  } else {
      confirmPassword.disabled = true;
      confirmPassword.value = ""; // Clear the Confirm Password field if Password is empty
  }
  }
  
  function validateForm(event) {
  event.preventDefault();
  
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var errorMessage = document.getElementById("error-message");
  
  if (password === "" || confirmPassword === "") {
      errorMessage.textContent = "Please fill in both password and confirm password.";
  } else if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match. Please try again.";
  } else {
      // Perform your login logic here
      // For demonstration purposes, we'll just clear the error message
      errorMessage.textContent = "";
  }
  }
  function showAlert(){
    alert("Login successful :)");
  }