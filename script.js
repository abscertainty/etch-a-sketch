const container = document.querySelector('.container');
let gridDimensions = 16;

for (let i = 0; i < gridDimensions; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < gridDimensions; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseenter', changeGridColor);
        row.appendChild(grid);
    }
    container.appendChild(row);
}

function changeGridColor(e) {
    e.target.classList.add('color-change');
}

