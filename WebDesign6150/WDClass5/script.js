document.getElementById("usResident").addEventListener("change", function() {
    // If the checkbox for 'Do you live in the United States?' is checked, show the Zipcode field
    if (this.checked) {
        document.getElementById("zipcodeField").classList.remove("hidden");
    } else {
        document.getElementById("zipcodeField").classList.add("hidden");
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting until validation passes
    let isValid = true;

    // Clear previous error messages
    document.getElementById("successMessage").classList.add("hidden");
    document.getElementById("nameError").textContent = '';
    document.getElementById("yearError").textContent = '';
    document.getElementById("zipcodeError").textContent = '';
    document.getElementById("passwordError").textContent = '';
    document.getElementById("pizzaError").textContent = '';

    let name = document.getElementById("name").value.trim();
    let year = document.getElementById("year").value.trim();
    let usResident = document.getElementById("usResident").checked;
    let zipcode = document.getElementById("zipcode").value.trim();
    let password = document.getElementById("password").value;
    let pizza = document.querySelector("input[name='pizza']:checked");
    let currentYear = new Date().getFullYear();

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Year of Birth validation
    if (isNaN(year) || year < 1901 || year >= currentYear) {
        document.getElementById("yearError").textContent = "Enter a valid year of birth.";
        isValid = false;
    }

    // Zipcode validation (only if checkbox is checked)
    if (usResident && document.getElementById("zipcodeField").classList.contains("hidden") === false) {
        // if (!/^[0-9]{5}$/.test(zipcode)) {
        //     document.getElementById("zipcodeError").textContent = "Enter a valid 5-digit zipcode.";
        //     isValid = false;
        // }

        if (!/^[0-9]{5}$/.test(zipcode) || zipcode === "00000") {
            document.getElementById("zipcodeError").textContent = "Enter a valid 5-digit zipcode (not '00000').";
            isValid = false;
        }
        
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    // Pizza selection validation
    if (!pizza) {
        document.getElementById("pizzaError").textContent = "Please select a pizza preference.";
        isValid = false;
    }

    // Show success message if all validations pass
    if (isValid) {
        // Change the message to "Accepted"
        document.getElementById("successMessage").textContent = "Accepted";
        document.getElementById("successMessage").classList.remove("hidden");
    } else {
        document.getElementById("successMessage").classList.add("hidden");
    }
});
