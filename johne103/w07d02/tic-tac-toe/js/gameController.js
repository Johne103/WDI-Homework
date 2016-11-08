angular.module('TicTacToe')
  .controller('GameController', GameController);

function GameController() {
  this.gameCounter = 0;

  this.cells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];

  function mrClick($index) {
    this.gameCounter++;
    if (this.gameCounter%2) {
      this.cells[$index] = 'X';
    } else {
      this.cells[$index] = 'O';
    }
  }
  this.mrClick = mrClick;
}
