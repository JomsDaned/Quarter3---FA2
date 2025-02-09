function displayResult(message) {
  document.getElementById('result').innerHTML = message;
}

function add() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  displayResult("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".");
}

function subtract() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  displayResult("The difference of " + num1 + " and " + num2 + " is " + (num1 - num2) + ".");
}

function multiply() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  displayResult("The product of " + num1 + " and " + num2 + " is " + (num1 * num2) + ".");
}

function divide() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (num2 === 0) {
    displayResult('Cannot divide by zero.');
    return;
  }
  displayResult("The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2) + ".");
}

function modulus() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (num2 === 0) {
    displayResult('Cannot divide by zero.');
    return;
  }
  displayResult("The remainder of " + num1 + " divided by " + num2 + " is " + (num1 % num2) + ".");
}
