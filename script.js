const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //prebacujemo string u number
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    //when player win
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 You winn!";

    document.querySelector("body").style.backgroundColor = "#14c91a";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".between").style.color = "white";
      document.querySelector("h1").style.color = "white";
      document.querySelector("header").style.borderBottom = "7px solid white";
      document.querySelector(".number").style.color = "red";
      document.querySelector(".number").style.backgroundColor = "white";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".message").style.color = "white";
      document.querySelector(".label-score").style.color = "white";
      document.querySelector(".label-highscore").style.color = "white";
      document.querySelector(".guess").style.border = "4px solid white";
      document.querySelector(".guess").style.color = "white";
      document.querySelector("button").style.color = "red";
      document.querySelector("button").style.backgroundColor = "white";
      document.querySelector("button.check").style.color = "red";
      document.querySelector("button.check").style.backgroundColor = "white";
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost game!!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".between").style.color = "white";
      document.querySelector("h1").style.color = "white";
      document.querySelector("header").style.borderBottom = "7px solid white";
      document.querySelector(".number").style.color = "red";
      document.querySelector(".number").style.backgroundColor = "white";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".message").style.color = "white";
      document.querySelector(".label-score").style.color = "white";
      document.querySelector(".label-highscore").style.color = "white";
      document.querySelector(".guess").style.border = "4px solid white";
      document.querySelector(".guess").style.color = "white";
      document.querySelector("button").style.color = "red";
      document.querySelector("button").style.backgroundColor = "white";
      document.querySelector("button.check").style.color = "red";
      document.querySelector("button.check").style.backgroundColor = "white";
    }
  }
});

const messageOne = document.querySelector(".message").textContent;
const hiddenNumber = document.querySelector(".number").textContent;
const inputOne = document.querySelector(".guess").textContent;

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = inputOne;
  document.querySelector(".message").textContent = messageOne;
  document.querySelector("header").style.borderBottom = "7px solid blue";
  document.querySelector(".number").style.backgroundColor = "blue";
  document.querySelector(".message").style.color = "blue";
  document.querySelector(".score").textContent = 5;
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = hiddenNumber;
  document.querySelector(".number").style.color = "white";
  document.querySelector(".number").style.backgroundColor = "blue";
  document.querySelector("button.check").style.color = "white";
  document.querySelector(".again").style.backgroundColor = "blue";
  document.querySelector(".again").style.color = "white";
  document.querySelector(".check").style.backgroundColor = "blue";
  document.querySelector(".guess").style.border = "4px solid blue";
  document.querySelector(".guess").style.color = "blue";
  document.querySelector(".check").style.color = "white";
  document.querySelector("h1").style.color = "blue";
  document.querySelector(".between").style.color = "blue";
  document.querySelector(".label-score").style.color = "blue";
  document.querySelector(".label-highscore").style.color = "blue";

  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
