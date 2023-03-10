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

    // Deletes last number on calculator screen
    delete() {
        this.currentSum = this.currentSum.toString().slice(0, -1)
    };

    appendNumber(number) {
        if (number === '.' && this.currentSum.includes('.')) return;
        this.currentSum = this.currentSum.toString() + number.toString();
    };

    chooseOperation(operation) {
        if (this.currentSum === '') return;
        if (this.previousSum !== '') {
            this.calculate();
        };
        this.operation = operation;
        this.previousSum = this.currentSum;
        this.currentSum = '';
    };

    calculate() {
        let calculation;
        const prev = parseFloat(this.previousSum);
        const current = parseFloat(this.currentSum);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                calculation = prev + current
                break
            case '-':
                calculation = prev - current
                break
            case 'x':
                calculation = prev * current
                break
            case '÷':
                calculation = prev / current
                break
            default:
                return
        }
        this.currentSum = calculation;
        this.operation = undefined;
        this.previousSum = '';

    };

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        };
    };

    updateDisplay() {
        this.currentSumText.innerText = this.getDisplayNumber(this.currentSum);
        if (this.operation != null) {
            this.previousSumText.innerText = `${this.getDisplayNumber(this.previousSum)} ${this.operation}`;
        } else {
            this.previousSumText.innerText = '';
        };
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

equalsButton.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});