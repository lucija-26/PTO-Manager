

const signinForm = document.getElementById('sign-in');
signinForm.addEventListener('submit', validateSigninForm);
const signinButton = document.getElementById('sign-in_button');
signinButton.addEventListener('click', saveToCookie);

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const minLenght = 8;
    // checks if password contains uppercase letter (A-Z)
    const hasUpperCase = /[A-Z]/.test(password);
    // checks if password contains lowercase letter (a-z)
    const hasLowerCase = /[a-z]/.test(password);
    // checks if password contains a number (0-9)
    const hasNumber = /\d/.test(password);
    // checks if password contains a special character
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    return (password.length >= minLenght && 
        hasUpperCase && 
        hasLowerCase && 
        hasNumber && 
        hasSpecialChar
    );
}

function validateSigninForm(event) {
    event.preventDefault();

    const email = document.getElementById('sign-in_email');
    const password = document.getElementById('sign-in_password');
    if(!isValidEmail(email.value)) {
        alert('Please enter a valid email.');
        return;
    }
    if(!isValidPassword(password.value)) {
        alert('Please enter a valid password.');
        return;
    }
    window.location.href = '../pages/dashboard.html';
}

function saveToCookie(event) {
    const email = document.getElementById('sign-in_email');
    const password = document.getElementById('sign-in_password');
    if(email && password) {
        document.cookie = "Email=" + email.value + "Expires=Fri, 10 Oct 2025 00:00:00 UTC;";
        document.cookie = "Password=" + password.value + "Expires=Fri, 10 Oct 2025 00:00:00 UTC;";
    }
}