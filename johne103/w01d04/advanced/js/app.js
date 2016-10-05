// var
  var formCalc = document.getElementById("calculator");
  var buttons = document.querySelector('.inputField').children;
  var resultField = document.getElementById("result");

console.log(buttons);

  for(var i = 0; i < buttons.length; i ++){
    var element = buttons[i];
    element.addEventListener('click', collect);
  }

  var resultOne = " ";
  var resultTwo;
  var operator;

  // Calc
  function collect(e){
    e.preventDefault();

    clickedVal = this.value;
    if(clickedVal == '+' || clickedVal == '-' || clickedVal == '/' || clickedVal == '*'){
      operator = clickedVal;

      resultOne = parseFloat(resultOne);
      resultTwo = resultOne;

      resultOne = " ";
    } else {
      resultOne += clickedVal;
    }
    console.log(resultOne);
    return false;
  }

  function calc(e) {
    e.preventDefault();
    resultOne = parseFloat(resultOne);
    resultTwo = parseFloat(resultTwo);
    switch(operator){
        case "+":
          result = resultTwo + resultOne;
          break;
        case "-":
          result = resultTwo - resultOne;
          break;
        case "*":
          result = resultTwo * resultOne;
          break;
        case "/":
          result = resultTwo / resultOne;
          break;
        default:
          result = "Error";
    }
    resultField.value = result;
    resultOne = " ";
    resultTwo = " ";
  }

  formCalc.addEventListener("submit", calc);
