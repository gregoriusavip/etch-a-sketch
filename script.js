// Global Variables
const CONTAINER = document.querySelector('#container');
const GRID_SIZE = 100;   // Squares per side of the grid
const CONTAINER_SIZE = 720;

CONTAINER.style.width = CONTAINER_SIZE.toString() + "px";
CONTAINER.style.height = CONTAINER_SIZE.toString() + "px";

for (let i = 0; i < GRID_SIZE; i++){
    for (let j = 0; j < GRID_SIZE; j++){
        const square = document.createElement('div');
        square.setAttribute('class', 'grid');
        square.style.height = (CONTAINER_SIZE/GRID_SIZE).toString() + "px";
        square.style.width = (CONTAINER_SIZE/GRID_SIZE).toString() + "px";
        CONTAINER.appendChild(square);
    }
}

CONTAINER.addEventListener("mouseover", (e) => {
    targetElement = e.target;
    if(targetElement.getAttribute("class") === "grid"){
        targetElement.style.backgroundColor = 'aquamarine';
    }
});