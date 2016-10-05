console.log("JS file loaded");

var operation = prompt ("Please enter the operaton + to add, - to subtract, / to divide, * to multipy, p for power, s for square root");
console.log (operation);


var firstinput = prompt ("Please enter your first number");
console.log(firstinput);


switch (operation) {

  case 's':
  var answer = Math.sqrt(parseFloat(firstinput));

  parseInt("answer");
  alert (answer);
  console.log(answer);
  break;

  case '+':

  var secondinput = prompt ("Please enter your second number");
  console.log (secondinput);

  var answer = parseFloat(firstinput) + parseFloat(secondinput);

  parseInt("answer");
  alert (answer);
  console.log(answer);
  break;

  case '-':
  var secondinput = prompt ("Please enter your second number");
  console.log (secondinput);
  var answer = parseFloat(firstinput) - parseFloat(secondinput);

  parseInt("answer");
  alert (answer);
  console.log(answer);
  break;

  case '/':
  var secondinput = prompt ("Please enter your second number");
  console.log (secondinput);
  var answer = parseFloat(firstinput) / parseFloat(secondinput);

  parseInt("answer");
  alert (answer);
  console.log(answer);
  break;

  case '*':
  var secondinput = prompt ("Please enter your second number");
  console.log (secondinput);
  var answer = parseFloat(firstinput) * parseFloat(secondinput);

  parseInt("answer");
  alert (answer);
  console.log(answer);
  break;

  case 'p':
  var secondinput = prompt ("Please enter your second number");
  console.log (secondinput);
  var answer = Math.pow(parseFloat(firstinput),  parseFloat(secondinput));

  parseInt("answer");
  alert (answer);
  console.log(answer);
  break;

  default:
  alert ("Please enter a valid number");
}
