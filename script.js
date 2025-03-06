import { GameLogic } from './modules/game-logic.js';
import { DomManager } from './modules/dom-manager.js';
import { EventHandler } from './modules/event-handler.js';

class GameController {
  constructor() {
    this.gameLogic = new GameLogic();
    this.domManager = new DomManager();
    this.eventHandler = new EventHandler(this);
    
    this.initializeGame();
  }

  initializeGame() {
    this.gameLogic.initializeBoard();
    this.domManager.createBoard();
    this.eventHandler.setupBoardEvents();
  }

  handleMove(x, y) {
    if (this.gameLogic.isValidMove(x, y)) {
      // 石を配置し反転処理を実行
      this.updateGameState(x, y);
    }
  }

  updateGameState(x, y) {
    // ゲーム状態更新ロジック
  }
}

// ゲーム開始
new GameController();
