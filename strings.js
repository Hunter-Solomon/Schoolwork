// Hunter Clarke, 9/18/25
// Validates user name and zip, then reveals secret message

function validateForm() {
  // Combine first + last name
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const fullName = `${firstName} ${lastName}`;
  const zipCode = document.getElementById("zipCode").value.trim();
  const output = document.getElementById("outputMessage");

  // Check name length
  if (fullName.length > 20) {
    output.innerHTML = "⚠️ Name too long (must be 20 characters or fewer).";
    return false;
  }

  // Check zip validity
  const zipValid = /^\d{5}$/.test(zipCode);
  if (!zipValid) {
    output.innerHTML = "⚠️ Invalid ZIP — must be exactly 5 digits.";
    return false;
  }

  // Success message
  output.innerHTML = "🎉 Access Granted! Your secret message is: 'The cake is a lie.'";
  return false;
}