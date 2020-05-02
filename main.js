// BREAKDOWN

// - user enters number 1 using the digits buttons 
// - selection is placed on display screen
// - user selects an operation and that becomes main display screen text 
// - num1 is added to the subdisplay 
// - user selects num 2, and the operator is added to subscreen
// - user presses equals and the calculation is performed, and then becomes the main text on the display screen
// - the num 2 added to the subscreen
// - user presses clearButton, and the application returns to default/opening state


// DOM VARIABLE DECLARATIONS
const display = document.querySelector('.display');
const subDisplay = document.querySelector('.sub-display');
const digitButtons = document.querySelectorAll('.btn-num');
const operationButtons = document.querySelectorAll('.btn-op');
const backspaceButton = document.querySelector('.btn-backspace');
const equalsButton = document.querySelector('.btn-equals');
const clearButton = document.querySelector('.btn-clear');

// Array of number buttons
const digitsArray = Array.from(digitButtons);
const opButtonsArray = Array.from(operationButtons);

// Variables to store operation details
let num1, num2;
let nums = [];
let operators = [];

// Set display screen to default state
display.textContent = '0';


console.log(digitsArray);
// EVENT LISTENERS

// Event listener for each digit button
digitButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log("You clicked a digit button");
        // If the display is in default/opening state, replace it with the first digit, otherwise add the digits to string of integers
        if (display.textContent === '0') {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    });
})

// Event listener for each operation button
operationButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log('You clicked an operation button');
        // Save the previously entered digits to the nums array and then move into subdisplay 
        if (display.textContent !== '0') {
            let extractOperator = display.textContent[0];
            console.log(extractOperator);
            operators.push(extractOperator);
        }
        nums.push(display.textContent);
        subDisplay.textContent = nums;
        // Replace the main display text with operator
        display.textContent = e.target.textContent;
    });
});

// Event listener for the equals button
equalsButton.addEventListener('click', function (e) {
    console.log('You clicked the equals button');

    display.textContent = add(nums[0], nums[1]);

});
// Event listener for the backspace button

// Event listener for the clear button

// Event listener for the digit button

// FUNCTIONS
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