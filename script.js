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

  // 初期石の配置
  const centerCells = [
    [3, 3], [3, 4],
    [4, 3], [4, 4]
  ];
  
  centerCells.forEach(([row, col]) => {
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    const stone = document.createElement('div');
    stone.className = `stone ${row + col === 7 ? 'white' : 'black'}`;
    cell.appendChild(stone);
  });
});
