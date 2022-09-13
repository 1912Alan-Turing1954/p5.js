let angle = 0;

function preload() {
  img = loadImage('./img/cyptography-icon.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(50);
  ambientLight(255);
  push();

  orbitControl(2);
  // rotateX(angle);
  // rotateZ(angle * 0.03);
  // rotateY(angle * 0.06);
  noStroke();
  normalMaterial();
  frameRate(60);
  fill(10)
  texture(img);
  box(150, 150, 150);
  push();
  angle += .06
}






