let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

// CHECK BUTTON
document.getElementById("btn").addEventListener("click", () => {
  const guessNo = Number(document.getElementById("num").value);

  if (!guessNo) {
    document.querySelector(".message").textContent = "Enter a number";
    return;
  }

  // CORRECT
  if (guessNo === secretNumber) {
    document.querySelector(".message").textContent = "Correct Answer!";
    document.querySelector(".hiddenNumber").textContent = secretNumber;
    document.body.style.backgroundColor = "green";

    // update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // WRONG
  else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNo > secretNumber ? "Too High" : "Too Low";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});


// AGAIN BUTTON (NO score reset)
document.querySelector(".again").addEventListener("click", () => {
  // generate new number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // set score = highscore
  score = highscore;

  // UI reset
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".hiddenNumber").textContent = "?";
  document.body.style.backgroundColor = "black";

  // update score display
  document.querySelector(".score").textContent = score;

  // keep highscore same
  document.querySelector(".highscore").textContent = highscore;

  // clear input
  document.getElementById("num").value = "";
});