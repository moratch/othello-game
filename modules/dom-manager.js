export class DomManager {
  constructor() {
    this.boardContainer = document.getElementById('board-container');
    this.statusPanel = document.getElementById('status-panel');
  }

  createBoard(board) {
    this.boardContainer.innerHTML = '';
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.x = i;
        cell.dataset.y = j;
        
        if (board[i][j] !== 0) {
          const stone = document.createElement('div');
          stone.className = `stone ${board[i][j] === 1 ? 'black' : 'white'}`;
          cell.appendChild(stone);
        }
        
        this.boardContainer.appendChild(cell);
      }
    }
  }

  updateBoard(board) {
    const cells = this.boardContainer.children;
    for (let i = 0; i < 64; i++) {
      const x = Math.floor(i / 8);
      const y = i % 8;
      const cell = cells[i];
      
      if (board[x][y] !== 0 && !cell.querySelector('.stone')) {
        const stone = document.createElement('div');
        stone.className = `stone ${board[x][y] === 1 ? 'black' : 'white'}`;
        cell.appendChild(stone);
      }
    }
  }
}
