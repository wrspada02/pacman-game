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

  ctx.moveTo(5, 5);
  ctx.lineTo(5, 195);
  ctx.lineTo(105, 195);
  ctx.lineTo(105, 255);
  ctx.lineTo(0, 255);
  ctx.lineTo(0, 250);
  ctx.moveTo(0, 300);
  ctx.lineTo(0, 295);
  ctx.lineTo(105, 295);
  ctx.lineTo(105, 355);
  ctx.lineTo(5, 355);
  ctx.lineTo(5, 595);
  ctx.lineTo(595, 595);
  ctx.lineTo(595, 355);
  ctx.lineTo(495, 355);
  ctx.lineTo(495, 295);
  ctx.lineTo(600, 295);
  ctx.lineTo(600, 300);
  ctx.moveTo(600, 250);
  ctx.lineTo(600, 255);
  ctx.lineTo(495, 255);
  ctx.lineTo(495, 195);
  ctx.lineTo(595, 195);
  ctx.lineTo(595, 5);
  ctx.lineTo(5, 5);

  ctx.moveTo(50, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(150, 90);
  ctx.lineTo(50, 90);
  ctx.lineTo(50, 50);

  ctx.moveTo(50, 130);
  ctx.lineTo(150, 130);
  ctx.lineTo(150, 150);
  ctx.lineTo(50, 150);
  ctx.lineTo(50, 130);
  
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.closePath();
}

drawBoard();
