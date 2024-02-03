const gridContainer = document.querySelector('#grid-container');
const inputTxt = document.querySelector('input');
inputTxt.defaultValue= '10';
const screenSize = 600; //the max size of the grid-container in pixel


function makeGridItem(value) {
    gridContainer.innerHTML = '';
    for(let i = 0; i < value; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        gridContainer.appendChild(div);
    };
}

function adjustGridSize(value) {
    const gridItem= document.querySelectorAll('.grid-item');
    let gridContainerSize = document.querySelector('#grid-container');

    const gridSize = Math.floor(screenSize/value);
    gridContainerSize.style.maxWidth = (gridSize*value) + 'px';


    gridItem.forEach(grid => {
        grid.style.width = gridSize + 'px';
        grid.style.height = gridSize + 'px';
    });

}

const confirmBtn = document.querySelector('#confirmBtn');
const hiddenElement = document.querySelector('#hidden');
const note = document.querySelector('#note');
confirmBtn.addEventListener('click', () => {

    const gridSizeInput = parseInt(inputTxt.value);

    if (gridSizeInput == NaN || gridSizeInput < 2 || gridSizeInput > 100) {
        note.style.color = 'red';
        
    } else {
        note.style.color = 'white';
        const gridSize = Math.pow(gridSizeInput, 2);
        makeGridItem(gridSize);
        adjustGridSize(gridSizeInput);
    }

});


const outputTxt = document.querySelector('#output');
inputTxt.addEventListener('input', () => {
    const inputValue = inputTxt.value;
    outputTxt.textContent = inputValue;
});

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {

});
