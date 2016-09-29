console.log("JS file loaded");

var numberOfPayments = prompt ("Please enter the the number of payments required in years");
console.log (numberOfPayments);

// if (Number.isNaN(numberOfPayments) {
//   var numberOfPayments = prompt ("Yourinput needs to be a number. Please enter the the number of payments required in years");
// }

var purchasePrice = prompt ("Please enter the amount you wish to borrow in £");
console.log(purchasePrice);

var interestRate = prompt ("Please the annual interest rate");
console.log(interestRate);

parseInt("numberOfPayments");
console.log(numberOfPayments);
parseInt("purchasePrice");
console.log(purchasePrice);
parseInt("interestRate");
console.log(interestRate);

numberOfPayments = numberOfPayments*12;
console.log(numberOfPayments);
interestRate = (interestRate/12)/100;
console.log(interestRate);

var interestRatePlusPlusOne = (1 + interestRate);
console.log(interestRatePlusPlusOne);
var CompoundRatePayments = Math.pow(interestRatePlusPlusOne, numberOfPayments);
console.log(CompoundRatePayments);
var ratePaymentsMinusOne = (CompoundRatePayments - 1);
console.log(ratePaymentsMinusOne);
var ratePaymentsTimesRate = (interestRate * CompoundRatePayments);
console.log(ratePaymentsTimesRate)
var numeratorDenominatorCalc = (ratePaymentsTimesRate/ratePaymentsMinusOne);
console.log(numeratorDenominatorCalc)

console.log(purchasePrice);
console.log(numeratorDenominatorCalc);
var monthlyPayments = (purchasePrice * numeratorDenominatorCalc);

var displayMonthlyPayments = monthlyPayments.toFixed(2);
console.log(monthlyPayments);
console.log(displayMonthlyPayments)

//parseInt("displayMonthlyPayments");
//alert (displayMonthlyPayments);
alert("Your monthly mortgagejpayments will be: £" + displayMonthlyPayments);
