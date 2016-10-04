var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");

var userChoice = "";
var cpuChoice = "";

var userScore = [];
var cpuScore = [];
var result = "";

rockBtn.addEventListener("click", setUserChoice);
paperBtn.addEventListener("click", setUserChoice);
scissorsBtn.addEventListener("click", setUserChoice);

function setUserChoice() {
  var userChoice = this.id;
  console.log("user " + this.id);
  var cpuChoice = getCpuChoice();
  console.log("cpu " + cpuChoice);
  var theResult = getWinner();
  console.log("result " + theResult);
}

function getWinner () {
  if (userChoice == "rock" && cpuChoice == "rock" || userChoice == "paper" && cpuChoice == "paper" || userChoice == "scissors" && cpuChoice == "scissors") {
      result = "It's a Draw";
      console.log("draw");
  } else if (userChoice == "rock" && cpuChoice == "paper" || userChoice == "paper" && cpuChoice == "scissors" || userChoice == "scissors" && cpuChoice == "rock") {
      result = "Bot Has Won";
      cpuScore++;
      document.getElementById("Bot").textContent = cpuScore;
      console.log("Bot wins");
  } else {
      result = "You Have Won";
      userScore++;
      document.getElementById("You").textContent = userScore;
      console.log("user wins");
  }
}

randomNumber = Math.floor(Math.random()*3) + 1;
console.log("random " + randomNumber);

function getCpuChoice() {
  selectCpuChoice = Math.floor(Math.random()*3) + 1;
  if (selectCpuChoice === 1) {
    setCpuChoice = "rock" ;
  } else if (selectCpuChoice === 2) {
    setCpuChoice = "paper"; }
      else {
        setCpuChoice = "scissors";}

    return setCpuChoice;

  //cpuChoice = ""; // rock paper or scissors
}
var cpuChoice = getCpuChoice();
console.log(cpuChoice);
console.log(userChoice);
