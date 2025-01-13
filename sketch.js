function setup() {
    createCanvas(800, 800);
    background(0);
    colorMode(HSL);

    let widthRect = (width/2)/6;
    let heightRect = (height/2)/4; 

    let colors = [];

    for(let i = 0; i<=5 ; i++){
      let hue = random(0, 360);
      let saturation = random(50, 100); 
      let lightness = random(50, 80);

      colors[i] = { hue, saturation, lightness };
    }

    let offsetX = (width - widthRect*6)/2;
    let offsetY = (height - heightRect*4)/2;

    for(let col = 0; col <= 3; col++){
      for(let row = 0; row <=5; row++){

        let color = random(colors);

        noStroke();
        fill(color.hue, color.saturation, color.lightness);
        rect(offsetX+widthRect*row,offsetY+heightRect*col,widthRect,heightRect);
        
      }
    }

  }
  
  function draw() {

    
    
  }