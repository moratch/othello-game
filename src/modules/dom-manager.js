// DOM操作管理クラス
export class DomManager {
  constructor() {
    this.boardElement = document.getElementById('game-board');
    this.messageElement = document.getElementById('status-message');
  }

  createBoard(gameLogic) {
    const table = document.createElement('table');
    for (let y = 0; y < gameLogic.boardSize; y++) {
      const row = table.insertRow();
      for (let x = 0; x < gameLogic.boardSize; x++) {
        const cell = row.insertCell();
        cell.dataset.x = x;
        cell.dataset.y = y;
        if (gameLogic.board[y][x]) {
          cell.className = gameLogic.board[y][x];
          cell.textContent = '';
        }
      }
    }
    this.boardElement.replaceChildren(table);
  }

  updateCell(x, y, player) {
    const cell = this.boardElement.querySelector(	r:nth-of-type() td:nth-of-type());
    cell.className = player;
    cell.textContent = '';
  }
}
