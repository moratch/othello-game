// DOM操作管理クラス
export class DomManager {
  constructor() {
    this.boardElement = document.getElementById('game-board');
    this.messageElement = document.getElementById('status-message');
  }

  createBoard() {
    // 盤面生成ロジック
  }

  updateCell(x, y, player) {
    const cell = this.boardElement.rows[y].cells[x];
    cell.className = player;
  }
}
