let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();


let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId=setInterval( ()=> {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying=true;
  }else {
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{playGame('rock');});
document.querySelector('.js-paper-button').addEventListener('click',()=>{playGame('paper');});
document.querySelector('.js-scissors-button').addEventListener('click',()=>{playGame('scissors');});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  }else if(event.key==='p'){
    playGame('paper');
  }else if(event.key==='s'){
    playGame('scissors');
  }
})


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if ((playerMove = "scissors")) {
    if (computerMove === "rock") {
      result = "You loose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "tie";
    }
  } else if ((playerMove = "paper")) {
    pickComputerMove();
    let result = "";
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissors") {
      result = "You loose";
    }
  } else if ((playerMove = "rock")) {
    pickComputerMove();

    let result = "";
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "You loose";
    } else if (computerMove === "scissors") {
      result = "You win";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You loose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-move").innerHTML = `Your move
  <img src="${playerMove}-emoji.png" class="move-icon">
  <img src="${computerMove}-emoji.png" class="move-icon">
  Computer's move`;
}
function updateScoreElement() {
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
