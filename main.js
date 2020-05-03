// DOM VARIABLE DECLARATIONS
const display = document.querySelector(".display");
const subDisplay = document.querySelector(".sub-display");
const digitButtons = document.querySelectorAll(".btn-num");
const operationButtons = document.querySelectorAll(".btn-op");
const backspaceButton = document.querySelector(".btn-backspace");
const equalsButton = document.querySelector(".btn-equals");
const clearButton = document.querySelector(".btn-clear");
const decimalButton = document.querySelector(".btn-decimal");

// Array of number buttons
const digitsArray = Array.from(digitButtons);
const opButtonsArray = Array.from(operationButtons);

// Variables to store operation details
let num1, num2;
let nums = [];
let operators = [];

// Set display screen to default state
display.textContent = "0";

console.log(digitsArray);
// EVENT LISTENERS

// Event listener for each digit button
digitButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log("You clicked a digit button");
    // If the display is in default/opening state, replace it with the first digit, otherwise add the digits to string of integers
    if (display.textContent === "0") {
      display.textContent = e.target.textContent;
    } else if (
      display.textContent === "+" ||
      display.textContent === "-" ||
      display.textContent === "/" ||
      display.textContent === "X"
    ) {
      subDisplay.textContent += " " + display.textContent;
      operators.push(display.textContent);
      // Loop through the operators array and remove any numeric entries
      for (let i = 0; i < operators.length; i++) {
        if (!isNaN(operators[i])) {
          operators.splice(i, 1);
        }
      }
      display.textContent = "";
      display.textContent = e.target.textContent;
    } else {
      display.textContent += e.target.textContent;
    }
  });
});

// Event listener for each operation button
operationButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log("You clicked an operation button");
    // Save the previously entered digits to the nums array and then move into subdisplay
    if (display.textContent !== "0") {
      let extractOperator = display.textContent[0];
      console.log(extractOperator);
      operators.push(extractOperator);
    }
    nums.push(display.textContent);
    subDisplay.textContent += " " + display.textContent;
    // Replace the main display text with operator
    display.textContent = e.target.textContent;
  });
});

// Event listener for the equals button
equalsButton.addEventListener("click", function (e) {
  console.log("You clicked the equals button");
  display.textContent = operate(operators[0], nums[0], nums[1]);
});
// Event listener for the backspace button
backspaceButton.addEventListener("click", function (e) {
  let temp = display.textContent.toString();
  temp = temp.slice(0, -1);
  if (temp.length < 1) {
    temp = "0";
  }
  display.textContent = temp;
});
// Event listener for the clear button
clearButton.addEventListener("click", function (e) {
  console.log("You clicked the clear button");
  display.textContent = "0";
  subDisplay.textContent = "";
  nums = [];
  operators = [];
});

// Event listener for the decimal button
decimalButton.addEventListener("click", function (e) {
  console.log("You pressed the deicmal button.");
  display.textContent += ".";
});

// FUNCTIONS

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "X":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
