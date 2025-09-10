// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Form toggle functionality
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
   
    
    loginToggle.addEventListener('click', function() {
        showForm('login-form');
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
    });
    
    registerToggle.addEventListener('click', function() {
        showForm('register-form');
        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');
    });
    
    // Password visibility toggle
    document.getElementById('toggle-login-password').addEventListener('click', function() {
        togglePassword('login-password');
    });
    
    document.getElementById('toggle-register-password').addEventListener('click', function() {
        togglePassword('register-password');
    });
    
    document.getElementById('toggle-confirm-password').addEventListener('click', function() {
        togglePassword('confirm-password');
    });
    
    // Form validation
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        validateLoginForm();
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        validateRegisterForm();
    });
});

function showForm(formId) {
    // Hide all form sections
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected form section
    document.getElementById(formId).classList.add('active');
}

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function validateLoginForm() {
    let isValid = true;
    
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    
    if (!email.value || !isValidEmail(email.value)) {
        document.getElementById('login-email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('login-email-error').style.display = 'none';
    }
    
    if (!password.value) {
        document.getElementById('login-password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('login-password-error').style.display = 'none';
    }
    
    if (isValid) {
        alert('Login successful! Redirecting to your dashboard...');
        // Here you would typically send the data to your server

        
    }
    else{
        loginerror.textContent = 'Invalid username or password';
    }
};
//Show dashboard function

function validateRegisterForm() {
    let isValid = true;
    
    const name = document.getElementById('full-name');
    const email = document.getElementById('register-email');
    const address = document.getElementById('address');
    const district = document.getElementById('district');
    const password = document.getElementById('register-password');
    const confirmPassword = document.getElementById('confirm-password');
    
    if (!name.value) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }
    
    if (!email.value || !isValidEmail(email.value)) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }
    
    if (!address.value) {
        document.getElementById('address-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('address-error').style.display = 'none';
    }
    
    if (!district.value) {
        document.getElementById('district-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('district-error').style.display = 'none';
    }
    
    if (!password.value || password.value.length < 8) {
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }
    
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirm-password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('confirm-password-error').style.display = 'none';
    }
    
    if (isValid) {
        alert('Registration successful! Welcome to our community.');
        // Here you would typically send the data to your server
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
