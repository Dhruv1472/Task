document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character."
      );
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Registration successful!");
      window.location.href = "Task2confirm.html";
    }
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "test@example.com" && password == "password") {
    alert("Login successful!");
    window.location.href = "Task2welcome.html";
  } else {
    alert("Invalid email or password!");
  }
});
