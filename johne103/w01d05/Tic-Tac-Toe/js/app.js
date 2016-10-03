console.log("js is loaded");

var squares = document.querySelectorAll('li');

var clickCounter = 0;

for (var i = 0; i<squares.length; i++)
  squares[i].addEventListener("click", function() {
      clickCounter++;
      this.textContent = clickCounter%2 === 0 ? "O" : "X";
});


   function resetButton () {
       clickCounter = 0;
       for(var i=0;i<squares.length; i++) {
         squares[i].textContent = "";
       }
     }

     function checkColumns () {
       var col1 = [squares[0], squares[3], squares[6]];
       var col2 = [squares[1], squares[4], squares[7]];
       var col3 = [squares[2], squares[5], squares[8]];

       return checkSquares(col1)||checkSquares(col2)||checkSquares(col3);
     }

     function checkRows () {
       var row1 = [squares[0], squares[2], squares[3]];
       var row2 = [squares[4], squares[5], squares[6]];
       var row3 = [squares[7], squares[8], squares[9]];

       return checkSquares(row1)||checkSquares(row2)||checkSquares(row3);
     }

     function checkDiag () {
       var dia1 = [squares[0], squares[3], squares[6]];
       var dia2 = [squares[1], squares[4], squares[7]];

       return checkSquares(dia1)||checkSquares(dia2);
     }


// function whosTurn() {
//   var whosTurn = 'X';
// }

// var button = document.querySelector('.button-top-left-X');
// console.log('button');
// button.addEventListener('onClick', function(event) {
//   var myTurn = document.querySelector(button.getAttribute('btn1'));
//   if (myTurn.style.display == none) {
//     myTurn.style.display = "block";
//     button.innerHTML = button.getAttribute('X');
//   } else {
//     target.style.display = "none";
//     button.innerHTML = button.getAttribute('');
//   }
// });

// function checkRows() {
//   var row1IsAMatch = tiles [0].textContent && tiles[0].textContent ===
//   tiles[1].textContent && tiles[0].textContent === tiles[2].textContent;
//
//   var row2IsAMatch = tiles [3].textContent && tiles[3].textContent ===
//   tiles[4].textContent && tiles[3].textContent === tiles[5].textContent;
//
//   var row3IsAMatch = tiles [6].textContent && tiles[6].textContent ===
//   tiles[7].textContent && tiles[6].textContent === tiles[8].textContent;
//
//   function checkTiles(tileArray) {
// return tileArray[0].textContent && tileArray[0].textContent ===
// tileArray[1].textContent && tileArray[0].textContent === tileArray[2].textContent;
// }
// }




//
//   }
//
//   }
// }
//
//
// var myTurn;
//
// function toggle1() {
//
// if (whosTurn = 'X') {
//   myTurn = document.getElementById('button-top-left-X');
//     if (myTurn.style.display == 'none') {
//         myTurn.style.display = 'block'; }
//      else {
//         myTurn.style.display = 'none';
//       } else if (whosTurn = 'Y') {
//         myTurn = document.getElementById('button-top-left-O');
//           if (myTurn.style.display == 'none') {
//               myTurn.style.display = 'block'; }
//            else {
//                 myTurn.style.display = 'none';}
//               } else {
//                 myTurn.style.display = 'none';
//               }
//           }
//       }
// }
//
// function toggle2() {
//   myTurn = document.getElementById('button-top-centre-X');
//     if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//      myTurn.style.display = 'none';}
// }
//
// function toggle3() {
//
//   myTurn = document.getElementById('button-top-right-X');
//     if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//      myTurn.style.display = 'none';}
// }
//
// function toggle4() {
//
//   myTurn = document.getElementById('button-centre-left-X');
//     if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//     else {
//      myTurn.style.display = 'none';}
// }
//
// function toggle5() {
//
//   myTurn = document.getElementById('button-centre-X');
//     if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//      myTurn.style.display = 'none';}
// }
//
// function toggle6() {
//
//   myTurn = document.getElementById('button-centre-right-X');
//     if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//       myTurn.style.display = 'none';}
// }
//
// function toggle7() {
//
//   myTurn = document.getElementById('button-bottom-left-X');
//   if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//      myTurn.style.display = 'none';}
// }
//
// function toggle8() {
//
//   myTurn = document.getElementById('button-bottom-centre-X');
//   if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//      myTurn.style.display = 'none';}
// }
//
// function toggle9() {
//   myTurn = document.getElementById('button-bottom-right-X');
//   if (myTurn.style.display == 'none') {
//       myTurn.style.display = 'block'; }
//    else {
//      myTurn.style.display = 'none';}
//
// }
