let widthRect, heightRect, colors = [];
let offsetX, offsetY;

function setup() {
  createCanvas(800, 800);
  background(0);
  colorMode(HSL);

  widthRect = (width / 2) / 6;
  heightRect = (height / 2) / 4;

  for (let i = 0; i <= 5; i++) {
    let hue = random(150, 200);
    let saturation = random(50, 80);
    let lightness = random(50, 80);

    colors[i] = { hue, saturation, lightness };
  }

  offsetX = (width - widthRect * 6) / 2;
  offsetY = (height - heightRect * 4) / 2;
}

function draw() {
  background(0); 

  for (let col = 0; col <= 3; col++) {
    for (let row = 0; row <= 5; row++) {
      let color = random(colors);

      let x = offsetX + widthRect * row;
      let y = offsetY + heightRect * col;

      let hue = (color.hue + (frameCount * 10)) % 360;

      noStroke();
      fill(hue, color.saturation, color.lightness);
      rect(x, y, widthRect, heightRect);
    }
  }
}
