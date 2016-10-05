var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");

var userChoice = "";
var cpuChoice = "";
var cpuPick = "";
var pick = "";

var userScore = [];
var cpuScore = [];
var result = "";

rockBtn.addEventListener("click", setUserChoice);
paperBtn.addEventListener("click", setUserChoice);
scissorsBtn.addEventListener("click", setUserChoice);

function setUserChoice() {
  var userChoice = this.id;
  console.log("user " + this.id);

  var pick = parseInt(Math.floor(Math.random()*3) + 1);
  console.log("pick " + pick);
  var cpuChoice = setCpuChoice();
  console.log("cpu " + cpuPick);

  var theResult = getWinner(userChoice, cpuChoice);
  console.log("result " + theResult);
}


//(userChoice && cpuChoice == "rock" || userChoice && cpuChoice == "paper" || userChoice && cpuChoice == "scissors")


function getWinner (a, b) {
  console.log(a, b);
  if ((a == "rock" && b == "scissors") || (a == "paper" && b == "rock" )|| (a == "scissors" && b == "paper"))  {
      document.getElementById("You").textContent = userScore;
      userScore++;
      document.getElementById("theResult").textContent = "Hurray! You Have Won";
      console.log("user wins");
  } else if ((b == "rock" && a == "scissors") || (b == "paper" && a == "rock") || (b == "scissors" && a == "paper")) {
      document.getElementById("Bot").textContent = cpuScore;
      cpuScore++;
      document.getElementById("theResult").textContent = "Sorry! Bot Has Won";
      console.log("Bot wins");
  } else {
      document.getElementById("theResult").textContent = "It's a Draw";
      console.log("draw");
  }
}



function setCpuChoice() {

  if (pick == 1) {
    cpuPick = "rock" ;
  } else if (pick == 2) {
    cpuPick = "paper"; }
      else {
        cpuPick = "scissors";}

    return cpuPick;


}
// var cpuChoice = setCpuChoice();
// console.log(cpuChoice);
// console.log(userChoice);
