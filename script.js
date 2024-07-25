// Global Variables
const CONTAINER = document.querySelector('#container');
const button = document.querySelector('button');
const CONTAINER_SIZE = 720;
let gridSize = 16;   // Squares per side of the grid, default 16

CONTAINER.style.width = CONTAINER_SIZE.toString() + "px";
CONTAINER.style.height = CONTAINER_SIZE.toString() + "px";

for (let i = 0; i < gridSize; i++){
    for (let j = 0; j < gridSize; j++){
        const square = document.createElement('div');
        square.setAttribute('class', 'grid');
        square.style.height = (CONTAINER_SIZE/gridSize).toString() + "px";
        square.style.width = (CONTAINER_SIZE/gridSize).toString() + "px";
        CONTAINER.appendChild(square);
    }
}

CONTAINER.addEventListener("mouseover", (e) => {
    targetElement = e.target;
    if(targetElement.getAttribute("class") === "grid"){
        targetElement.style.backgroundColor = 'aquamarine';
    }
});