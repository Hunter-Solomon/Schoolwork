// Hunter Clarke, 9/18/25
// JavaScript for validating name + zip, and revealing a secret message

/**
 * Function to validate the form input
 * Checks full name length and zip code validity
 * Displays a message or error using innerHTML
 */
function validateForm() {
  // Get user input from text boxes
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let zipCode = document.getElementById("zipCode").value;

  // Combine first and last names into one variable with a space
  let fullName = firstName + " " + lastName;

  // Check if name is too long (>20 characters)
  if (fullName.length > 20) {
    document.getElementById("outputMessage").innerHTML =
      "⚠️ Your full name is too long! (Must be 20 characters or fewer.)";
    return false; // Stop form submission
  }

  // Regular expression to check if zip code is exactly 5 digits
  let zipPattern = /^\d{5}$/;

  // Validate zip code against pattern
  if (!zipPattern.test(zipCode)) {
    document.getElementById("outputMessage").innerHTML =
      "⚠️ Invalid zip code! Please enter exactly 5 digits.";
    return false; // Stop form submission
  }

  // If everything is valid, show secret message
  document.getElementById("outputMessage").innerHTML =
    `🎉 Welcome, ${fullName}! 🎉<br />` +
    "The secret message is: <strong>“Knowledge is power!”</strong>";

  return false; // Prevent actual form submission (page reload)
}
