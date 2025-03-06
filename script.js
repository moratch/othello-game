document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  
  // 8x8盤面の作成
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      board.appendChild(cell);
    }
  }

  // 初期石の配置（修正版）
  const initialStones = [
    {row: 3, col: 3, color: 'white'},
    {row: 3, col: 4, color: 'black'},
    {row: 4, col: 3, color: 'black'},
    {row: 4, col: 4, color: 'white'}
  ];

  initialStones.forEach(({row, col, color}) => {
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    const stone = document.createElement('div');
    stone.className = `stone ${color}`;
    cell.appendChild(stone);
  });

  // ステータス表示の初期化
  const statusPanel = document.createElement('div');
  statusPanel.className = 'status-panel';
  statusPanel.innerHTML = `
    <p>現在のプレイヤー: 黒</p>
    <p>黒: 2</p>
    <p>白: 2</p>
  `;
  board.parentNode.appendChild(statusPanel);
});
