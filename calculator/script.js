let screen = document.getElementById('screen');
let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    screen.textContent = currentInput;
}

function clearScreen() {
    currentInput = '';
    screen.textContent = '0';
}

function calculate() {
    try {
        let result = eval(currentInput);
        screen.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        screen.textContent = 'Error';
        currentInput = '';
    }
}
