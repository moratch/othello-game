export class GameLogic {
  constructor() {
    this.boardSize = 8;
    this.board = Array.from({length: this.boardSize}, () => 
      Array.from({length: this.boardSize}, () => null));
    this.currentPlayer = 'black';
    this.initializeBoard();
  }

  initializeBoard() {
    // 初期配置（デバッグ用に中央4マスを明示的に設定）
    this.board[3][3] = 'white';
    this.board[3][4] = 'black';
    this.board[4][3] = 'black';
    this.board[4][4] = 'white';
    return this.board; // DOMManagerが参照できるように返り値追加
  }

  isValidMove(x, y) {
    // 暫定実装：常にtrueを返す
    return true;
  }
}
