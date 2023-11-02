// Function to generate a random HEX color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Function to create and render boxes
function createBoxes(amount) {
 const boxesContainer = document.getElementById('boxes');
 const boxSize = 30;
 let boxHTML = '';

 for (let i = 0; i < amount; i++) {
   const box = document.createElement('div');
   box.style.width = box.style.height = `${boxSize + i * 10}px`;
   box.style.backgroundColor = getRandomHexColor();
   boxHTML += box.outerHTML;
 }

 boxesContainer.innerHTML = boxHTML;
}

// Function to clear the contents of the boxes
function destroyBoxes() {
 const boxesContainer = document.getElementById('boxes');
 boxesContainer.innerHTML = '';
}

// Get references to the buttons
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

// Add event listeners
createButton.addEventListener('click', () => {
 const inputAmount = document.querySelector('input[type="number"]').value;
 createBoxes(inputAmount);
});

destroyButton.addEventListener('click', destroyBoxes);
