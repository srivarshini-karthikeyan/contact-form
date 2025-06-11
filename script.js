//innertext or innerHTML = transfer the data from backend to HTML
var contactData = []; // creating an empty array to store the contact data

function submitForm() {
    // Get input elements
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var phoneField = document.getElementById("phonenumber");

    // Get values from input fields
    var name = nameField.value;
    var email = emailField.value;
    var phonenumber = phoneField.value;

    // Check if fields are empty
    if (!name || !email || !phonenumber) {
        alert("Please fill all the fields");
        return false;
    }

    // Push data to array
    contactData.push({ name: name, email: email, phonenumber: phonenumber });

    // Clear input fields
    nameField.value = "";
    emailField.value = "";
    phoneField.value = "";

    displayData(); // Correct function name
    return false; // Prevent form submission
}

function displayData() {
    const outputDiv = document.getElementById("about");
    outputDiv.innerHTML = "";

    contactData.forEach((entry, index) => {
        outputDiv.innerHTML += `
            <div class="entry">
                <strong>${index + 1}. ${entry.name}</strong><br>
                Email: ${entry.email}<br>
                Phone Number: ${entry.phonenumber}
                <hr>
            </div>
        `;
    });
}

function clearOutput() {
    document.getElementById("about").innerHTML = "";
}
