const colors = ["red", "blue", "yellow", "green"];
let shuffledCards = [];
let turn = 0;

function playWrongSound() {
  let wrong = new Audio(
    "audios/multimedia_game_sound_soft_dull_tone_lose_fail_52986.mp3"
  );
  wrong.play();
}

function playRightSound() {
  let correct = new Audio("audios/Right-answer-ding-ding-sound-effect.mp3");
  correct.play();
}

function playWinSound() {
  let win = new Audio(
    "audios/zapsplat_multimedia_game_sound_win_complete_game_congratulations_harp_glissando_with_fanfare_and_fireworks_79053.mp3"
  );
  win.play();
}

function playLoseSound() {
  let lose = new Audio("audios / lose_game.mp3");
  lose.play();
}

function generateRandomIndex(max) {
  //This will generate a number between 0 and max
  return Math.floor(Math.random() * max);
}

function sortColors() {
  return colors.sort(() => Math.random() - 0.5);
}

function displayAndFadeColors() {
  shuffledCards = sortColors();
  console.log(shuffledCards);

  for (let i = 0; i < shuffledCards.length; i++) {
    let squareEl = document.querySelector(`#${shuffledCards[i]}`);

    setTimeout(() => {
      squareEl.style.backgroundColor = shuffledCards[i];
    }, i * 1000);

    setTimeout(() => {
      squareEl.style.backgroundColor = "white";
    }, i * 1000 + 500);
  }
}

function checkColors(turn, clickedColor) {
  if (clickedColor === shuffledCards[turn]) {
    playRightSound();

    if (turn === shuffledCards.length - 1) {
      playWinSound();
      alert("You win! 🥰");
      setTimeout(() => {}, 3000);
    }
  } else {
    playWrongSound();
    alert("Sorry, you lost! 🥲");
    // displayAndFadeColors();
  }
}

function makeAllSquaresWhite() {
  const squares = document.querySelectorAll("#red, #blue , #yellow , #green");

  for (let i = 0; i < squares.length; i++) {
    console.log(squares[i]);
    squares[i].style.backgroundColor = "white";
  }
}

const redSquareEl = document.querySelector("#red");
const blueSquareEl = document.querySelector("#blue");
const yellowSquareEl = document.querySelector("#yellow");
const greenSquareEl = document.querySelector("#green");
const startButtonEl = document.querySelector("button");

redSquareEl.addEventListener("click", () => {
  alert("red 🔴");
});
blueSquareEl.addEventListener("click", () => {
  alert("blue 🔵");
});
yellowSquareEl.addEventListener("click", () => {
  alert("yellow 🟡");
});
greenSquareEl.addEventListener("click", () => {
  alert("green 🟢");
});
startButtonEl.addEventListener("click", () => makeAllSquaresWhite());

redSquareEl.addEventListener("click", () => {
  checkColors(turn, "red");
  turn++;
});

blueSquareEl.addEventListener("click", () => {
  checkColors(turn, "blue");
  turn++;
});

yellowSquareEl.addEventListener("click", () => {
  checkColors(turn, "yellow");
  turn++;
});

greenSquareEl.addEventListener("click", () => {
  checkColors(turn, "green");
  turn++;
});

startButtonEl.addEventListener("click", () => {
  makeAllSquaresWhite();
  displayAndFadeColors();
});
