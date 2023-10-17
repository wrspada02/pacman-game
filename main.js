function drawBoard() {
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext("2d");

  ctx.beginPath();

  ctx.moveTo(0, 0);
  ctx.lineTo(0, 200);
  ctx.lineTo(100, 200);
  ctx.lineTo(100, 250);
  ctx.lineTo(0, 250);
  ctx.moveTo(0, 300);
  ctx.lineTo(100, 300);
  ctx.lineTo(100, 350);
  ctx.lineTo(0, 350);
  ctx.lineTo(0, 600);
  ctx.lineTo(600, 600);
  ctx.lineTo(600, 350);
  ctx.lineTo(500, 350);
  ctx.lineTo(500, 300);
  ctx.lineTo(600, 300);
  ctx.moveTo(600, 250);
  ctx.lineTo(500, 250);
  ctx.lineTo(500, 200);
  ctx.lineTo(600, 200);
  ctx.lineTo(600, 0);
  ctx.lineTo(0, 0);

  ctx.stroke();
}

drawBoard();
