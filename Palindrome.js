 // Author: Hunter Clarke
// Description: Checks if a word or phrase is a palindrome using innerHTML

// Get form and message area from HTML
const form = document.getElementById("palindromeForm");
const message = document.getElementById("message");

// Handle form submission
form.onsubmit = function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get input from user
  let text = document.getElementById("userInput").value;

  // Remove spaces and convert to lowercase
  let cleaned = text.replace(/\s+/g, '').toLowerCase();

  // Reverse the cleaned text
  let reversed = cleaned.split('').reverse().join('');

  // Check if palindrome
  if (cleaned === reversed && cleaned.length > 0) {
    message.innerHTML = `<p style="color:green;">✅ "${text}" is a palindrome!</p>`;
  } else {
    message.innerHTML = `<p style="color:red;">❌ "${text}" is not a palindrome.</p>`;
  }

  // Ask user if they want to continue
  let again = confirm("Would you like to check another word?");
  if (again) {
    // Clear input for next entry
    document.getElementById("userInput").value = "";
  } else {
    message.innerHTML += `<p>Thanks for using the Palindrome Checker!</p>`;
    form.style.display = "none";
  }
};