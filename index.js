// Initialize variables
let clicks = 0;
let holdInterval = null;

// Get DOM elements
const redSlider = document.getElementById('rangeRed');
const greenSlider = document.getElementById('rangeGreen');
const blueSlider = document.getElementById('rangeBlue');
const colorOutput = document.getElementById('colorOutput');
const clicksDisplay = document.getElementById('clicks');
const button = document.querySelector('.large.red.button');

// Update color display
function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    colorOutput.textContent = color;
    document.body.style.backgroundColor = color;
}

// Button click handler
function btnPressed() {
    clicks++;
    clicksDisplay.textContent = clicks;
}

// Hold down functionality
function startHold() {
    // Clear any existing interval
    if (holdInterval) {
        clearInterval(holdInterval);
    }
    
    // Initial click
    btnPressed();
    
    // Set up interval for continuous clicks
    holdInterval = setInterval(() => {
        btnPressed();
    }, 100); // Faster increment when held
}

// Stop holding
function stopHold() {
    clearInterval(holdInterval);
    holdInterval = null;
}

// Event listeners
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

button.addEventListener('mousedown', startHold);
button.addEventListener('mouseup', stopHold);
button.addEventListener('mouseleave', stopHold);
button.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startHold();
});
button.addEventListener('touchend', stopHold);

// Initialize color display
updateColor();
updateColor()
