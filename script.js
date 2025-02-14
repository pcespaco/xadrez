const board = document.getElementById('board');

// Função para inicializar o tabuleiro de xadrez
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
      square.textContent = pieces[squareIndex];
      board.appendChild(square);
      squareIndex++;
    }
  }
}

initBoard();
