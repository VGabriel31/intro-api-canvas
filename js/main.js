
function draw_cuadrado() {
  const canvas = document.getElementById("canvas_cuadrado");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle='rgb(139,103,175)';

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

function draw_camino() {
  const canvas = document.getElementById("canvas_camino");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(100, 25);
    ctx.lineTo(60, 100); 
    ctx.lineTo(140, 100);
    ctx.closePath();     
    ctx.fill();
    
  }
}

draw_cuadrado();
draw_camino();