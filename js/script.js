function validationEmail() {
    let emailInput = document.getElementById("email-content");
    let email = emailInput.value;

    if (emailInput) {
        if (email.length == 0) {
            emailInput.style.border = "2px solid red";
            return false;
        } else if (!email.match(/\w+@\w+[.]\w+/)) {
            emailInput.style.border = "2px solid red";
            return false;
        } else {
            emailInput.style.border = "2px solid green";
            return true;
        }
    } else {
        // Handle the case where the element is not found
        console.error("Email input element not found!");
    }
}
