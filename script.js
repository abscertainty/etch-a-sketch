const container = document.querySelector('.container');

let gridDimensions = 16;

function drawGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < dimensions; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener('mouseenter', changeGridColor);
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

function changeGridColor(e) {
    if (e.target.style.opacity >= 1) return;

    if (!e.target.classList.contains('color-change')) {
        e.target.classList.add('color-change');
    }

    let newOpacity = +e.target.style.opacity + 0.1;
    e.target.style.opacity = newOpacity;
}

drawGrid(gridDimensions);

function clearGrid() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function getNewGridDimensions() {
    let newDimensions;
    newDimensions = parseInt(prompt("Enter new grid dimensions (max 100)"));
    if (isNaN(newDimensions) || newDimensions < 1 || newDimensions > 100) {
        return;
    }
    clearGrid();
    drawGrid(newDimensions);
}

const changeDimensionsBtn = document.querySelector('.change-dimensions');
changeDimensionsBtn.addEventListener('click', getNewGridDimensions);