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
        if (number === '.' && this.currentSum.includes('.')) return;
        this.currentSum = this.currentSum.toString() + number.toString();
    };

    chooseOperation(operation) {
        if (this.currentSum === '') return;
        if (this.previousSum !== '') {
            this.compute();
        };
        this.operation = operation;
        this.previousSum = this.currentSum;
        this.currentSum = '';
    };

    calculate() {

    };

    updateDisplay() {
        this.currentSumText.innerText = this.currentSum;
        this.previousSumText.innerText = this.previousSum;
    };
};

// Const variables for calculator buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousSumText = document.querySelector('[data-previous-sum]');
const currentSumText = document.querySelector('[data-current-sum]');

const calculator = new Calculator(previousSumText, currentSumText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});