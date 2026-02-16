// Get the input element where the user enters their name
let nameInput = document.getElementById("nameInput");

// Get the button element from the HTML
let button = document.getElementById("WelcomeButton");

// Get the paragraph element where we'll show the message
let messageDisplay = document.getElementById("WelcomeMessage");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the name from the input field
  let userName = nameInput.value;
  
  // Create a fun personalized message
  let funMessage = "Welcome to the fun, " + userName + "! 🎉";
  
  // Display the message on the page
  messageDisplay.textContent = funMessage;
  
  // Clear the input field
  nameInput.value = "";
});