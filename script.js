// Global Variables
const CONTAINER = document.querySelector('#container');
const GRID_SIZE = 16;
const SQUARE_SIZE = 64;
const CONTAINER_SIZE = GRID_SIZE * SQUARE_SIZE;

CONTAINER.style.width = CONTAINER_SIZE.toString() + "px";
CONTAINER.style.height = CONTAINER_SIZE.toString() + "px";

for (let i = 0; i < GRID_SIZE; i++){
    for (let j = 0; j < GRID_SIZE; j++){
        const square = document.createElement('div');
        square.setAttribute('class', 'grid');
        if(j % 2 === 0){
            square.style.backgroundColor = (i % 2) === 0 ? "black" : "yellow";
        }
        else{
            square.style.backgroundColor = (i % 2) === 0 ? "yellow" : "black";
        }
        square.style.height = SQUARE_SIZE.toString() + "px";
        square.style.width = SQUARE_SIZE.toString() + "px";
        CONTAINER.appendChild(square);
    }
}
