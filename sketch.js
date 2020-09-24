// Rotate this rectangle around it's center point!

function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER);

  ellipse(50, 150, 30, 60);
  
  push();
  
  translate(200,110);
  rotate(PI/6);
  rect(0, 0, 200, 20);
  
  pop();
}

function draw() {
}