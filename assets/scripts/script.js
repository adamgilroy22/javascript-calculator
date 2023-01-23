// Const variables for calculator buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousSumTextElement = document.querySelector('[data-previous-sum]');
const currentSumTextElement = document.querySelector('[data-current-sum]');

const calculator = new Calculator(previousSumTextElement, currentSumTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

class Calculator {
    constructor(previousSumText, currentSumText) {
        this.previousSumText = previousSumText;
        this.currentSumText = currentSumText;
        this.clear();
    };

    clear() {
        this.currentSum = '';
        this.previousSum = '';
        this.operation = undefined;
    };

    delete() {

    };

    appendNumber(number) {
        this.currentSum = number
    };

    chooseOperation(operation) {

    };

    calculate() {

    };

    updateDisplay() {

    };
};