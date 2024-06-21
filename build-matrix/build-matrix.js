document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  const generateMatrixButton = document.getElementById('generateMatrix');
  const matrixOutput = document.getElementById('matrixOutput');
  const generateGridButton = document.getElementById('generateGrid');
  const widthInput = document.getElementById('widthInput');
  const heightInput = document.getElementById('heightInput');
  const paintbox = document.getElementById('paintbox');
  let isMouseDown = false;
  let selectedCharacter = '0';
  let matrix = [];
  let gridSize = { width: 10, height: 10 };

  // Function to create grid cells
  const createGrid = () => {
      grid.innerHTML = ''; // Clear existing grid
      matrix = Array(gridSize.height).fill(null).map(() => Array(gridSize.width).fill('0'));
      document.documentElement.style.setProperty('--grid-width', gridSize.width);
      document.documentElement.style.setProperty('--grid-height', gridSize.height);

      for (let i = 0; i < gridSize.width * gridSize.height; i++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.index = i;
          cell.textContent = '0';
          grid.appendChild(cell);
      }
  };

  // Function to set cell state
  const setCellState = (cell, state) => {
      const index = cell.dataset.index;
      const row = Math.floor(index / gridSize.width);
      const col = index % gridSize.width;

      matrix[row][col] = state;
      cell.textContent = state;
  };

  // Function to generate and display the matrix string
  const updateMatrixOutput = () => {
      const matrixString = matrix.map(row => row.join('')).join('\n');
      matrixOutput.value = matrixString;
  };

  // Add event listeners to handle painting
  grid.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('cell')) {
          isMouseDown = true;
          setCellState(event.target, selectedCharacter);
      }
  });

  grid.addEventListener('mouseup', () => {
      isMouseDown = false;
      updateMatrixOutput();
  });

  grid.addEventListener('mouseover', (event) => {
      if (isMouseDown && event.target.classList.contains('cell')) {
          setCellState(event.target, selectedCharacter);
      }
  });

  // Generate matrix string on button click
  generateMatrixButton.addEventListener('click', updateMatrixOutput);

  // Generate grid on button click
  generateGridButton.addEventListener('click', () => {
      gridSize.width = parseInt(widthInput.value, 10);
      gridSize.height = parseInt(heightInput.value, 10);
      createGrid();
  });

  // Update selected character from paintbox
  paintbox.addEventListener('change', (event) => {
      if (event.target.name === 'current') {
          selectedCharacter = event.target.nextElementSibling.value;
      }
  });

  // Prevent default behavior to avoid issues with dragging
  grid.addEventListener('dragstart', (event) => {
      event.preventDefault();
  });

  // Initialize default grid
  createGrid();
});
