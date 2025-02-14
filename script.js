const board = document.getElementById('board');

// Função para inicializar o tabuleiro de xadrez com peças
function initBoard() {
  const pieces = [
    'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
    'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
    'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
  ];

  let squareIndex = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');

      // Adicionando a peça no quadrado, se houver
      if (pieces[squareIndex]) {
        const piece = document.createElement('span');
        piece.textContent = pieces[squareIndex];
        piece.classList.add('piece');
        square.appendChild(piece);
      }

      square.dataset.index = squareIndex; // Para saber qual índice corresponde a cada quadrado
      board.appendChild(square);

      // Permitir movimento de peça ao clicar
      square.addEventListener('click', () => handleSquareClick(square, i, j, squareIndex));

      squareIndex++;
    }
  }
}

// Função para lidar com o clique na casa
let selectedPiece = null;
let selectedSquare = null;
function handleSquareClick(square, row, col, index) {
  const piece = square.querySelector('.piece');

  if (selectedPiece) {
    if (!piece) {
      // Se não houver peça na casa selecionada, movemos a peça
      const moveSquare = document.querySelector(`[data-index="${selectedSquare.dataset.index}"]`);
      moveSquare.textContent = ''; // Limpa a casa anterior
      moveSquare.classList.remove('highlight');
      
      square.textContent = selectedPiece.textContent;
      square.classList.remove('highlight');
      
      selectedPiece = null;
      selectedSquare = null;
    }
  } else if (piece) {
    // Se houver uma peça, seleciona ela
    selectedPiece = piece;
    selectedSquare = square;
    square.classList.add('highlight');
  }
}

// Inicializa o tabuleiro
initBoard();
