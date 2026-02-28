const display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num === '0') return;
    display.value += num;
}

function appendOperator(op) {
    if (display.value === '') return;
    const lastChar = display.value.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        // replace operator if user types two in a row
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function appendDot() {
    const parts = display.value.split(/[-+/*]/);
    const last = parts[parts.length - 1];
    if (!last.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}