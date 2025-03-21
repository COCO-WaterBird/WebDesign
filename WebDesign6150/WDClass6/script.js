document.getElementById("usResident").addEventListener("change", function() {
    // If the checkbox for 'Do you live in the United States?' is checked, show the Zipcode field
    if (this.checked) {
        document.getElementById("zipcodeField").classList.remove("hidden");
    } else {
        document.getElementById("zipcodeField").classList.add("hidden");
        document.getElementById("zipcode").value = ''; // Clear the input when unchecked
        document.getElementById("zipcodeInfo").classList.add("hidden"); // Hide the location info if unchecked
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
    if (usResident && !/^[0-9]{5}$/.test(zipcode)) {
        document.getElementById("zipcodeError").textContent = "Enter a valid 5-digit zipcode.";
        isValid = false;
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
        document.getElementById("successMessage").textContent = "Accepted";
        document.getElementById("successMessage").classList.remove("hidden");

        // If user is a U.S. resident and has entered a zipcode, fetch location data
        if (usResident && zipcode) {
            fetchZipcodeData(zipcode);
        }
    } else {
        document.getElementById("successMessage").classList.add("hidden");
    }
});

// const zipcode = document.getElementById('zipcodeInfo').value.toLowerCase();

// // Function to fetch and display location data based on ZIP code
// function fetchZipcodeData() {
//     fetch(`http://api.zippopotam.us/us/${zipcode}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             if (data && data.places && data.places[0]) {
//                 const city = data.places[0]["place name"];
//                 const state = data.places[0]["state"];
//                 document.getElementById("city").textContent = `City: ${place['place name']}`;
//                 document.getElementById("state").textContent = `State: ${place['state abbreviation']}`;
//                 document.getElementById("zipcodeInfo").classList.remove("hidden");
//             } else {
//                 document.getElementById("zipcodeError").textContent = "Invalid ZIP code. Please try again.";
//             }
//         })
//         .catch(() => {
//             document.getElementById("zipcodeError").textContent = "Error fetching data. Please try again.";
//         });
// }



// const a = 'Northeastern University'

// fetch(`http://universities.hipolabs.com/search?name=${a}`)
//     .then((response) => response.json())
//     .then(data => {
//     console.log(data);
//     })

//     .catch(error => console.error(error))

const zipcodeInput = document.getElementById('zipcode');

// Function to fetch and display location data based on ZIP code
function fetchZipcodeData() {
    const zipcode = zipcodeInput.value.trim();  // Get the value of the Zipcode input

    if (zipcode.length === 5 && /^[0-9]{5}$/.test(zipcode)) { // Validate if Zipcode is 5 digits
        fetch(`http://api.zippopotam.us/us/${zipcode}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data && data.places && data.places[0]) {
                    const city = data.places[0]["place name"];
                    const state = data.places[0]["state abbreviation"];
                    
                    // Populate the city and state input fields
                    document.getElementById("city").value = city;
                    document.getElementById("state").value = state;
                    
                    // Show the zipcode info div
                    document.getElementById("zipcodeInfo").classList.remove("hidden");
                    document.getElementById("zipcodeError").textContent = ''; // Clear any previous error
                } else {
                    document.getElementById("zipcodeError").textContent = "Invalid ZIP code. Please try again.";
                }
            })
            .catch(() => {
                document.getElementById("zipcodeError").textContent = "Error fetching data. Please try again.";
            });
    } else {
        document.getElementById("zipcodeError").textContent = "Please enter a valid 5-digit ZIP code.";
    }
}
