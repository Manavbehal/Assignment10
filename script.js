let displayValue = '';




function appendNumber(num) {
    displayValue += num;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').value = '0';
}

function calculate() {
    if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    }
}
