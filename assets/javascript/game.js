//Declare variables
var wins = 0;
var losses = 0;
var garGem = 0;
var amGem = 0;
var pearlGem = 0;
var stephenGem = 0;
var comGuess = 0;
var userScore = 0;

//Start and reset game on win or loss
function gameStart() {
  comGuess = Math.floor(Math.random() * 101) + 19;
  garGem = Math.floor(Math.random() * 12) + 1;
  amGem = Math.floor(Math.random() * 12) + 1;
  pearlGem = Math.floor(Math.random() * 12) + 1;
  stephenGem = Math.floor(Math.random() * 12) + 1;
  $("#computer-number").text(comGuess);
  $("#user-score").text(userScore);
};
//resets game after win or loss
function reset() {
  userScore = 0;
  gameStart();
};
//checks for win/loss after button press
function winLoss() {
  if (userScore === comGuess) {
    alert("You have won!");
    wins++;
    $("#wins").text(wins);
    reset();
  }
  else if (userScore > comGuess) {
    alert("Sorry! Try again.");
    losses++;
    $("#losses").text(losses);
    reset();
  }
};
//buttons
$("#garnet").on("click", function () {
  userScore = garGem + userScore;
  $("#user-score").text(userScore);
  console.log(userScore);
  console.log(garGem)
  winLoss();
});

$("#amethyst").on("click", function () {
  userScore = amGem + userScore;
  $("#user-score").text(userScore);
  winLoss();
});

$("#pearl").on("click", function () {
  userScore = pearlGem + userScore;
  $("#user-score").text(userScore);
  winLoss();
});

$("#stephen").on("click", function () {
  userScore = stephenGem + userScore;
  $("#user-score").text(userScore);
  winLoss();
});
//loads game upon document load
$(document).ready(function () {
  gameStart();
});