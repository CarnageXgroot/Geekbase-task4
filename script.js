const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
        alert('Please fill in all required fields.');
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        return;
    }

    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    console.log('Form submitted successfully!');
});