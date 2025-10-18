// sound.js
// Author: Hunter Clarke
// Description: Plays TempleBell.mp3 when any button is clicked on any page

function enableSound() {
  // Find all button elements on the page
  const buttons = document.getElementsByTagName("button");

  // Loop through all buttons
  for (let i = 0; i < buttons.length; i++) {
    // Use addEventListener to ADD sound without removing existing click handlers
    buttons[i].addEventListener('click', function () {
      // Create the audio object inside the click event
      const sound = new Audio("TempleBell.mp3");

      // Rewind and play the sound
      sound.currentTime = 0;
      sound.play().catch((error) => {
        console.log("Sound could not play:", error);
      });
    });
  }
}
