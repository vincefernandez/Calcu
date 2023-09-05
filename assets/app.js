function validateInput(display) {
    const inputValue = display.value;
    // Use a regular expression to allow digits and the specified operators (+, -, /, *)
    const regex = /^[0-9+\-*/\s]*$/;

    if (!regex.test(inputValue)) {
        // If the input doesn't match the pattern, remove invalid characters
        display.value = inputValue.replace(/[^0-9+\-*/\s]/g, '');

        const customAlert = document.getElementById("customAlert");
        customAlert.style.display = "block";

        // Hide the Bootstrap alert after a certain duration (e.g., 3 seconds)
        setTimeout(function () {
            customAlert.style.display = "none";
        }, 3000); // 3000 milliseconds (3 seconds)
    }
}