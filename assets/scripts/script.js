// Const variables for calculator buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousSumText = document.querySelector('[data-previous-sum]');
const currentSumText = document.querySelector('[data-current-sum]');

class calculator {
    constructor(previousSumText, currentSumText) {
        this.previousSumText = previousSumText;
        this.currentSumText = currentSumText;
    };

    clear() {

    };

    delete() {

    };

    appendNumber(number) {

    };

    chooseOperation(operation) {

    };

    calculate() {

    };

    updateDisplay() {

    };
}