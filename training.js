// Hunter Solomon, 10/18/25
// Description: Soldier Training Simulator demonstrating loops, conditionals, and string manipulation.

// Function to start training when form is submitted
function startTraining() {
  const output = document.getElementById("output");
  const name = document.getElementById("name").value.trim();
  const stamina = parseInt(document.getElementById("stamina").value);

  // String validation
  if (name.length < 3) {
    output.innerHTML = "❌ Soldier name must be at least 3 characters long.";
    return false;
  }

  // Decision logic
  if (stamina < 1 || stamina > 100) {
    output.innerHTML = "⚠️ Invalid stamina value. Must be between 1 and 100.";
    return false;
  }

  // Loop (simulate 5 training exercises)
  let trainingLog = "";
  let currentStamina = stamina;

  for (let i = 1; i <= 5; i++) {
    const loss = Math.floor(Math.random() * 10) + 1;
    currentStamina -= loss;

    // Ensure stamina doesn’t drop below 0
    if (currentStamina <= 0) {
      trainingLog += `<p>💀 Training ${i}: ${name} collapsed from exhaustion!</p>`;
      break;
    } else {
      trainingLog += `<p>🏋️ Training ${i}: ${name} pushed through and lost ${loss} stamina. Remaining: ${currentStamina}</p>`;
    }
  }

  // Final result string manipulation
  let finalMessage = "";
  if (currentStamina > 60) {
    finalMessage = `${name.toUpperCase()} is combat ready! 🪖`;
  } else if (currentStamina > 30) {
    finalMessage = `${name} needs more rest before battle. ⚔️`;
  } else {
    finalMessage = `${name} should stay in camp and recover. 🛌`;
  }

  // Display results using innerHTML
  output.innerHTML = `
    <h3>Training Summary</h3>
    ${trainingLog}
    <p><strong>${finalMessage}</strong></p>
  `;

  return false; // Prevent form from reloading page
}