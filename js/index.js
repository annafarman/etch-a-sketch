const gridContainer = document.querySelector('#grid-container');
const inputTxt = document.querySelector('input');
inputTxt.defaultValue= '10';
const screenSize = 600; //the max size of the grid-container in pixel

function getRandomHSLColor() {
    const hue = Math.floor(Math.random()*360);
    const saturation = Math.floor(Math.random()*101);
    const lightness = Math.floor(Math.random()*101);
    return (`hsl(${hue},${saturation}%,${lightness}%)`);
}

function makeGridItem(value) {
    gridContainer.innerHTML = '';
    for(let i = 0; i < value; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        gridContainer.appendChild(div);
    };
}

function adjustGridSize(value) {
    const gridItem = document.querySelectorAll('.grid-item');
    let gridContainerSize = document.querySelector('#grid-container');

    const gridSize = Math.floor(screenSize/value);
    gridContainerSize.style.maxWidth = (gridSize*value) + 'px';

    gridItem.forEach(grid => {
        grid.style.width = gridSize + 'px';
        grid.style.height = gridSize + 'px';

        grid.addEventListener('mouseenter', () => {
            if(checkColor(grid)) addDarkness(grid);
            else assignColor(grid);
        });
    });
}

function checkColor(grid){
    return grid.style.backgroundColor;
}

function assignColor(grid){
    const color = getRandomHSLColor();
    grid.style.backgroundColor = color;
}

function addDarkness(grid){
    

    const rgb = grid.style.backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    let r = parseInt(rgb[1]);
    let g = parseInt(rgb[2]);
    let b = parseInt(rgb[3]);

    // Darken each RGB component by 10%
    r = Math.max(0, r - Math.round(r * 0.1));
    g = Math.max(0, g - Math.round(g * 0.1));
    b = Math.max(0, b - Math.round(b * 0.1));

    grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

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
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(grid => {
        grid.style.backgroundColor = '';
    });
});








