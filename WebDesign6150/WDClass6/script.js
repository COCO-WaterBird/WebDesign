document.getElementById("usResident").addEventListener("change", function() {
    // If the checkbox for 'Do you live in the United States?' is checked, show the Zipcode field
    if (this.checked) {
        document.getElementById("zipcodeField").classList.remove("hidden");
        document.getElementById("zipcodeInfo").classList.remove("hidden");  // Show the university fields
    } else {
        document.getElementById("zipcodeField").classList.add("hidden");
        document.getElementById("zipcodeInfo").classList.add("hidden"); // Hide the university fields
        document.getElementById("un_name").value = ''; // Clear the university name input when unchecked
        document.getElementById("web_page").value = ''; // Clear the university web page input
        document.getElementById("zipcodeError").textContent = ''; // Clear error
    }
});

// Function to fetch and display university data based on university name
function fetchUniversityData() {
    const un_name = document.getElementById('un_name').value.toLowerCase().trim(); // Get the value of university name and trim extra spaces

    if (un_name.length === 0) {
        return; // If the input is empty, don't make a fetch request
    }

    fetch(`http://universities.hipolabs.com/search?name=${un_name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data && data.length > 0) {
                const university = data[0]; // Assuming the first result is the correct one
                const web_page = university.web_pages ? university.web_pages[0] : ''; // Extract web page URL (first item in array)
                const country = university.country;
                const name = university.name;

                // Populate the web_page input field
                document.getElementById("web_page").value = web_page || "Web page not available"; // Show message if no web page

                // Optionally, display other information like country
                document.getElementById("country").textContent = `Country: ${country}`;

                // Show the university info div
                document.getElementById("zipcodeInfo").classList.remove("hidden");

                // Clear any previous errors
                document.getElementById("zipcodeError").textContent = ''; 
            } else {
                // Handle the case where no university is found
                document.getElementById("zipcodeError").textContent = "University not found. Please try again.";
                document.getElementById("zipcodeInfo").classList.add("hidden"); // Hide the div if no results
            }
        })
        .catch(() => {
            // Error handling for failed fetch
            document.getElementById("zipcodeError").textContent = "Error fetching data. Please try again.";
            document.getElementById("zipcodeInfo").classList.add("hidden"); // Hide the div if there's an error
        });
}

