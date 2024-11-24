document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
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

  if (email === "test@example.com" && password === "password") {
    alert("Login successful!");
    window.location.href = "Task2welcome.html";
  } else {
    alert("Invalid email or password!");
  }
});
