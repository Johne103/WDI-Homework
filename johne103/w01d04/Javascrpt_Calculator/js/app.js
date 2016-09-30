console.log("JS loaded");

document.getElementById("form_event").addEventListener("submit", function(e){
  var firstNumberInput = parseFloat(document.getElementById("number1").value);
  var secondNumberInput = parseFloat(document.getElementById("number2").value);
  var operatorInput = document.getElementById("select_event").value;
  var display = document.getElementById("answerOutput");

  console.log("1st num: ", firstNumberInput);
  console.log("2nd num: ", secondNumberInput);
  console.log("operatorInput: ", operatorInput);

  switch (operatorInput) {
   case "+":
      display.innerHTML = firstNumberInput + secondNumberInput;
      break;

   case "-":
      display.innerHTML = firstNumberInput - secondNumberInput;
      break;

   case "*":
      display.innerHTML = firstNumberInput * secondNumberInput;
      break;

   case "/":
      display.innerHTML = firstNumberInput / secondNumberInput;
      break;
  }
  e.preventDefault();
});
