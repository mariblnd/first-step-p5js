function setup() {
    createCanvas(400, 400);
    background(0);
    colorMode(HSL);
    strokeWeight(10);
}
  
  function draw() {
    let hue = 360 * mouseX/width;
    // fill(hue, 50,50);
    stroke(hue, 50,50);
    line(pmouseX, pmouseY, mouseX, mouseY)
    // circle(pmouseX, pmouseY, mouseX, mouseY);
  }