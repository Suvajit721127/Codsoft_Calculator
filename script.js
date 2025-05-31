// script.js
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperation(operator) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  currentOperator = operator;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  updateDisplay(result);
  currentInput = result.toString();
  currentOperator = '';
  previousInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperator = '';
  updateDisplay('');
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
