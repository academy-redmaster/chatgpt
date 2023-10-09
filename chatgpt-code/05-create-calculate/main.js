let currentResult = "";
let currentOperator = "";
let previousResult = "";

function appendNumber(number) {
  currentResult += number;
  updateDisplay();
}

function setOperator(operator) {
  if (currentOperator !== "") {
    calculate();
  }
  currentOperator = operator;
  previousResult = currentResult;
  currentResult = "";
}

function calculate() {
  let result;
  const num1 = parseFloat(previousResult);
  const num2 = parseFloat(currentResult);

  if (currentOperator === "+") {
    result = num1 + num2;
  } else if (currentOperator === "-") {
    result = num1 - num2;
  } else if (currentOperator === "*") {
    result = num1 * num2;
  } else if (currentOperator === "/") {
    result = num1 / num2;
  }

  currentResult = result.toString();
  currentOperator = "";
  previousResult = "";
  updateDisplay();
}

function clearCalculator() {
  currentResult = "";
  currentOperator = "";
  previousResult = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").value = currentResult;
}
