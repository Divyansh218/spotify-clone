document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password match the expected values
    if (username === "div12" && password === "div21") {
        // Check if "Remember Me" checkbox is checked
        var rememberMe = document.getElementById("remember-me").checked;

        if (rememberMe) {
            // Store username and password in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // Clear username and password from localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Show login success message
        var loginMessage = document.getElementById("loginMessage");
        loginMessage.classList.remove("hidden");

        // Simulate session expiry warning after 5 seconds
        setTimeout(function() {
            var sessionExpiryWarning = document.getElementById("session-expiry-warning");
            sessionExpiryWarning.classList.remove("hidden");

            // Redirect to next page after another 3 seconds
            setTimeout(function() {
                window.location.href = "home.html";
            }, 3000); // Delay of 3000 milliseconds (3 seconds) before redirecting
        }, 5000); // Delay of 5000 milliseconds (5 seconds) before showing session expiry warning
    } else {
        // If incorrect, display an alert or handle error message (optional)
        alert("Incorrect username or password. Please try again.");
    }
});

// Toggle password visibility
document.querySelector(".toggle-password").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    var icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("far", "fa-eye");
        icon.classList.add("fas", "fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fas", "fa-eye-slash");
        icon.classList.add("far", "fa-eye");
    }
});

// Caps Lock warning
document.getElementById("password").addEventListener("keyup", function(event) {
    var capsLockWarning = document.getElementById("caps-lock-warning");
    if (event.getModifierState("CapsLock")) {
        capsLockWarning.classList.remove("hidden");
    } else {
        capsLockWarning.classList.add("hidden");
    }
});

// Check if "Remember Me" is checked and populate username/password fields
document.addEventListener("DOMContentLoaded", function() {
    var rememberedUsername = localStorage.getItem("username");
    var rememberedPassword = localStorage.getItem("password");

    if (rememberedUsername && rememberedPassword) {
        document.getElementById("username").value = rememberedUsername;
        document.getElementById("password").value = rememberedPassword;
        document.getElementById("remember-me").checked = true;
    }
});

// Google login button action (replace with actual Google login functionality)
document.getElementById("google-login").addEventListener("click", function() {
    alert("Implement Google login functionality here.");
});
