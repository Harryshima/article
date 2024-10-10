document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const articleSection = document.getElementById('articleSection');
    const errorMessage = document.createElement('p'); // Create error message element

    // Set correct login credentials
    const correctUsername = "harolddavecabiles@gmail.com";
    const correctPassword = "12345";

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page

        // Get user input
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Clear any previous error messages
        if (errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
        }

        // Check if credentials are correct
        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            // Hide the login form
            loginSection.style.display = 'none';
            // Show the article section
            articleSection.style.display = 'block';
        } else {
            // Show error message for incorrect credentials
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Incorrect username or password. Please try again.';
            loginSection.appendChild(errorMessage);
        }
    });
});



