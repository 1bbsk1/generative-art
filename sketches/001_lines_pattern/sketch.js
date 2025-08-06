function setup() {
  createCanvas(800, 800); // You can scale this later for export
  background(255);
  stroke(0);
  noLoop(); // Draw only once
  drawLinesPattern();
}

function drawLinesPattern() {
  let spacing = 40;

  for (let y = spacing / 2; y < height; y += spacing) {
    for (let x = spacing / 2; x < width; x += spacing) {
      let len = random(20, spacing);
      let angle = random([0, HALF_PI, PI, PI + HALF_PI]); // 0°, 90°, 180°, 270°
      let x2 = x + cos(angle) * len;
      let y2 = y + sin(angle) * len;
      line(x, y, x2, y2);
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('001_lines_pattern', 'png');
  }
}
