// Remove entry animation after it completes
setTimeout(() => {
    document.querySelector('.entry-screen').remove();
}, 1800); // Adjusted to match the new animation timing

// Fade out the intro section after a few seconds
setTimeout(() => {
    document.querySelector('.intro-section').classList.add('fade-out');
}, 4000);

// Display the auth container after the intro fades out
setTimeout(() => {
    document.querySelector('.auth-container').classList.add('visible');
}, 5000);

// Form switcher
function toggleAuth() {
    document.body.classList.toggle('switch-active');
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.toggle('hidden');

    // Updating the link text
    const switchLink = document.querySelector('.switch-link a');
    if (document.getElementById('signupForm').classList.contains('hidden')) {
        switchLink.textContent = 'Create New Account';
        switchLink.setAttribute('aria-label', 'Switch to Signup Form');
    } else {
        switchLink.textContent = 'Already have an account? Sign In';
        switchLink.setAttribute('aria-label', 'Switch to Login Form');
    }
}
// ... existing scripts ...

// Toggle Password Visibility
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
}

// Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Email Validation
    const loginEmail = document.getElementById('loginEmail');
    const loginEmailError = document.getElementById('loginEmailError');
    if (!validateEmail(loginEmail.value)) {
        loginEmailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        loginEmailError.textContent = '';
    }

    // Password Validation
    const loginPassword = document.getElementById('loginPassword');
    const loginPasswordError = document.getElementById('loginPasswordError');
    if (loginPassword.value.trim() === '') {
        loginPasswordError.textContent = 'Password cannot be empty.';
        valid = false;
    } else {
        loginPasswordError.textContent = '';
    }

    if (valid) {
        // Proceed with form submission or AJAX request
        alert('Login successful!');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Name Validation
    const signupName = document.getElementById('signupName');
    const signupNameError = document.getElementById('signupNameError');
    if (signupName.value.trim() === '') {
        signupNameError.textContent = 'Please enter your full name.';
        valid = false;
    } else {
        signupNameError.textContent = '';
    }

    // Email Validation
    const signupEmail = document.getElementById('signupEmail');
    const signupEmailError = document.getElementById('signupEmailError');
    if (!validateEmail(signupEmail.value)) {
        signupEmailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        signupEmailError.textContent = '';
    }

    // Password Validation
    const signupPassword = document.getElementById('signupPassword');
    const signupPasswordError = document.getElementById('signupPasswordError');
    if (signupPassword.value.length < 6) {
        signupPasswordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
    } else {
        signupPasswordError.textContent = '';
    }

    if (valid) {
        // Proceed with form submission or AJAX request
        alert('Registration successful!');
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// ... existing scripts ...

