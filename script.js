let mode = 'degree';

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        if (mode === 'degree') {
            expression = expression.replace(/Math.sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1} * Math.PI / 180)`);
            expression = expression.replace(/Math.cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1} * Math.PI / 180)`);
            expression = expression.replace(/Math.tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1} * Math.PI / 180)`);
        }

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function setMode(selectedMode) {
    mode = selectedMode;
    document.getElementById('degree').style.backgroundColor = selectedMode === 'degree' ? '#00796b' : '#4db6ac';
    document.getElementById('radian').style.backgroundColor = selectedMode === 'radian' ? '#00796b' : '#4db6ac';
}
