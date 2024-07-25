// Global Variables
const CONTAINER = document.querySelector('#container');
const button = document.querySelector('button');
const CONTAINER_SIZE = 720;
let gridSize = 16;   // Squares per side of the grid, default 16

CONTAINER.style.width = CONTAINER_SIZE.toString() + "px";
CONTAINER.style.height = CONTAINER_SIZE.toString() + "px";

function createGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.setAttribute('class', 'grid');
            square.style.height = (CONTAINER_SIZE/size).toString() + "px";
            square.style.width = (CONTAINER_SIZE/size).toString() + "px";
            CONTAINER.appendChild(square);
        }
    }
}

button.addEventListener('click', () => {
    gridSize = Number(prompt('Please enter the numbers of squares per side (MAX 100)'));
    if (gridSize > 100 || gridSize <= 0){
        console.log("Invalid size.");
        gridSize = 16;
    }
    CONTAINER.textContent = "";
    createGrid(gridSize)
});

CONTAINER.addEventListener("mouseover", (e) => {
    targetElement = e.target;
    if(targetElement.getAttribute("class") === "grid"){
        targetElement.style.backgroundColor = 'aquamarine';
    }
});

document.addEventListener('load', createGrid(gridSize));