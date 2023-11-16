document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() { }

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("username-display").textContent = "";

}

function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Display the username in the app
    displayUsername(username);

    console.log("Username: " + username);
    console.log("Password: " + password);
}

function displayUsername(username) {
    // You can update an HTML element to display the username
    var usernameDisplay = document.getElementById("username-display");
    usernameDisplay.textContent = "Welcome, " + username;
}
