function showRegistrationForm() {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("register-btn").style.display = "none";
}
function submitRegistration() {
    alert("Registration successful! You can now start the course.");
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("start-course").style.display = "inline-block";
}