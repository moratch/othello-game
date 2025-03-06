export class GameLogic {
  constructor() {
    this.board = [];
    this.currentPlayer = 1; // 1:黒, -1:白
  }

  initializeBoard() {
    this.board = Array(8).fill().map(() => Array(8).fill(0));
    // 初期石の配置
    this.board[3][3] = -1;
    this.board[3][4] = 1;
    this.board[4][3] = 1;
    this.board[4][4] = -1;
  }

  isValidMove(x, y) {
    return this.board[x][y] === 0;
  }

  makeMove(x, y) {
    this.board[x][y] = this.currentPlayer;
  }

  switchPlayer() {
    this.currentPlayer *= -1;
  }
}
