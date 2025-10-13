// Hunter Clarke, 9/25/25
// Moves the meme image around randomly

let moveInterval = null;

function startMovement() {
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;
  document.getElementById("statusMessage").innerHTML = "🎮 Meme is now moving!";
  moveInterval = setInterval(moveMeme, 500);
}

function stopMovement() {
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("startBtn").disabled = false;
  clearInterval(moveInterval);
  document.getElementById("statusMessage").innerHTML = "⏸ Meme stopped.";
}

function moveMeme() {
  const meme = document.getElementById("memeImage");
  const windowWidth = window.innerWidth - 200;
  const windowHeight = window.innerHeight - 200;
  const randomX = Math.floor(Math.random() * windowWidth);
  const randomY = Math.floor(Math.random() * windowHeight);
  meme.style.transform = `translate(${randomX}px, ${randomY}px)`;
  meme.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
}