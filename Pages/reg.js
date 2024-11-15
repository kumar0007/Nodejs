document.getElementById('registerForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;

    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var contactError = document.getElementById('contactError');

    var isValid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    contactError.textContent = '';

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate contact number
    if (!validateContact(contact)) {
        contactError.textContent = 'Invalid contact number';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateContact(contact) {
    var re = /^[0-9]{10}$/;
    return re.test(contact);
}