// イベントハンドラ管理
export class EventHandler {
  constructor(gameController) {
    this.gameController = gameController;
  }

  setupBoardEvents() {
    document.getElementById('game-board').addEventListener('click', (e) => {
      if (e.target.tagName === 'TD') {
        const x = e.target.cellIndex;
        const y = e.target.parentNode.rowIndex;
        this.gameController.handleMove(x, y);
      }
    });
  }
}
