function submitForm(event) {
    event.preventDefault();

    // Basic validation (you can enhance this)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Additional validation (you can enhance this)
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass, you can submit the form data to a server or show a confirmation page.
    alert('Registration successful!');
}

function isValidEmail(email) {
    // Basic email validation (you can enhance this)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
