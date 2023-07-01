function registerUser(event) {
    event.preventDefault(); // Prevent form submission

    const first_name = document.getElementById("fname").value;
    const last_name = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    if (password.length < 8) {
        alert("Registration unsuccessful. Password should be at least 8 characters long.");
        return;
    }
    // If passwords match, continue with form submission
    document.getElementById("registration-form").submit();
}
function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
}
function shortenLink(event) {
    event.preventDefault(); // Prevent form submission

    const originalLink = document.getElementById("original-link").value;
}

