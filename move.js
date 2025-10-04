// Hunter Clarke, 9/25/25
// JavaScript to make a meme image move randomly when Start is clicked

// Variable to hold the interval ID (used to stop movement)
let moveInterval = null;

/**
 * Function to start moving the meme image.
 * Disables Start button, enables Stop button, and begins animation.
 */
function startMovement() {
  // Disable Start button so it can’t be clicked twice
  document.getElementById("startBtn").disabled = true;

  // Enable Stop button
  document.getElementById("stopBtn").disabled = false;

  // Show user status
  document.getElementById("statusMessage").innerHTML = "🎮 Meme is now moving!";

  // Begin moving the image every 500ms (half a second)
  moveInterval = setInterval(moveMeme, 500);
}

/**
 * Function to stop moving the meme image.
 * Disables Stop button, enables Start button, and stops animation.
 */
function stopMovement() {
  // Disable Stop button
  document.getElementById("stopBtn").disabled = true;

  // Enable Start button
  document.getElementById("startBtn").disabled = false;

  // Stop the movement interval
  clearInterval(moveInterval);

  // Update user message
  document.getElementById("statusMessage").innerHTML = "⏸ Meme stopped.";
}

/**
 * Function that moves the meme image to a random position on the screen.
 */
function moveMeme() {
  // Get reference to the meme image
  const meme = document.getElementById("memeImage");

  // Get window size (so image stays visible)
  const windowWidth = window.innerWidth - 200; // Subtract width of image
  const windowHeight = window.innerHeight - 200; // Subtract height of image

  // Generate random X and Y positions
  const randomX = Math.floor(Math.random() * windowWidth);
  const randomY = Math.floor(Math.random() * windowHeight);

  // Apply new positions using CSS transform for smooth motion
  meme.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Optional: Add a small rotation for fun effect
  const rotation = Math.floor(Math.random() * 360);
  meme.style.rotate = rotation + "deg";
}