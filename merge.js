document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const articleSection = document.getElementById('articleSection');
    const errorMessage = document.getElementById('errorMessage'); // Reference existing errorMessage element

    // Set correct login credentials
    const correctUsername = "exampleuser";
    const correctPassword = "12345";

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page

        // Get user input
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Hide any previous error messages
        errorMessage.style.display = 'none';

        // Check if credentials are correct
        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            // Hide the login form
            loginSection.style.display = 'none';
            // Show the article section
            articleSection.style.display = 'block';
        } else {
            // Show error message for incorrect credentials
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Incorrect username or password. Please try again.';
        }
    });
});



