// Register new user
function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (username === "" || password === "") {
    showMessage("Please fill all fields");
    return;
  }

  // Store user in localStorage
  localStorage.setItem("user", JSON.stringify({ username, password }));
  showMessage("Registration successful! You can login now.", "green");
}

// Login function
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    showMessage("No user found. Please register first.");
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    showMessage("Invalid credentials!");
  }
}

// Show message helper
function showMessage(msg, color = "red") {
  const message = document.getElementById("message");
  message.style.color = color;
  message.textContent = msg;
}