let mic;
let micLevel;
let userClicked = false;

let fish = [];


function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);

  for (let i = 0; i<=30; i++){
    fish[i] = new Fish(random(1, 10) * width * 0.1,       random(1,10) * height * 0.1, random(10) * 0.2);
  }

  //mic = new p5.AudioIn()
  //mic.start();

}


function draw() {
  background(220);

  if (userClicked) {

  for (i = 0; i < fish.length; i++) {
    fish[i].display();
    fish[i].move();
  }

  micLevel = map(mic.getLevel(0.9), 0, 0.3, 0, 30,     true);

  drawCatTail();
  drawBackPaw()
  drawCatBody();
  drawBackEar();
  drawCatHead();
  drawFrontEar();
  drawFrontPaw();
  drawCatFace();

  }
}


function drawCatTail() {
    //cat lines and color
  strokeWeight(4);
  stroke('#3F2500');
  fill('#F2E3CD');
  push();
  translate(width * 0.325, height * 0.4125);
  rotate(mouseY/15);
    //tail
  beginShape();
    vertex(width * 0.325 - width * 0.325, height *       0.4125 - height * 0.4125);
    bezierVertex(width * 0.3375 - width * 0.325,         height * 0.425 - height * 0.4125, width * 0.15 -     width * 0.325, height * 0.65 - height * 0.4125,       width * 0.4625 - width * 0.325, height * 0.69 -       height * 0.4125);
    bezierVertex(width * 0.4875 - width * 0.325,         height * 0.7 - height * 0.4125, width * 0.5 -         width * 0.325, height * 0.7375 - height * 0.4125,     width * 0.4125 - width * 0.325, height * 0.7375 -     height * 0.4125);
    bezierVertex(width * 0.075 - width * 0.325,           height * 0.725 - height * 0.4125, width * 0.25 -     width * 0.325, height * 0.4125 - height * 0.4125,     width * 0.325 - width * 0.325, height * 0.4125 -     height * 0.4125);
  endShape();
  pop();

}


function drawBackPaw() {
  strokeWeight(4);
  stroke('#3F2500');
  fill('#F2E3CD');
  push();
  ellipse(width * 0.6375, height * 0.65, width *       0.125, height * 0.075);
  pop();

}


function drawCatBody() {
  strokeWeight(4);
  stroke('#3F2500');
  fill('#F2E3CD');
  ellipse(width * 0.5, height * 0.5, width * 0.5,       height * 0.375);

}


function drawBackEar() {
  strokeWeight(4);
  stroke('#3F2500');
  fill('#795C30');
  push();
  triangle(width * 0.6240, height * 0.375, width *     0.675 - micLevel, height * 0.225 + micLevel/3,       width * 0.75, height * 0.425);
    // triangle(250, 150, 270 - micLevel, 90 +           micLevel/3, 300, 170);
  pop();

}


function drawCatHead() {
  strokeWeight(4);
  stroke('#3F2500');
  fill('#F2E3CD');
  ellipse(width * 0.6, height * 0.475, width * 0.375,    height * 0.3125);

}


function drawFrontEar() {
  strokeWeight(4);
  stroke('#3F2500');
  fill('#795C30');
  push();
  triangle( width * 0.6, height * 0.3625, width * 0.5   - micLevel, height * 0.225 + micLevel/2, width *     0.45, height * 0.425);
    // triangle(240, 145, 200 - micLevel, 90 +           micLevel/2, 180, 170);
  pop();

}


function drawFrontPaw() {
  strokeWeight(4);
  stroke('#3F2500');
  fill('#F2E3CD');
  ellipse(width * 0.5625, height * 0.675, width *       0.125, height * 0.0875);

}


function drawCatEyes() {
    //eyes and nose/mouth lines
  strokeWeight(2);
    //eye color
  stroke('#000000');
  fill('#1C9AE9');
    //eyes

  if(mouseIsPressed && mouseX > width * 0.25 &&         mouseX < width * 0.75 && mouseY > height * 0.3 &&     mouseY < height * 0.7) {

  ellipse(width * 0.6, height * 0.475, width *         0.0625, 0);
  ellipse(width * 0.725, height * 0.445, width *       0.05, 0);
  }

  else {
  ellipse(width * 0.6, height * 0.475, width *         0.0625, height * 0.05);
  ellipse(width * 0.725, height * 0.445, width *       0.05, height * 0.045);
  }

}


function drawCatNose() {
  strokeWeight(2);
  stroke('#000000');
    //nose color
  fill('#EB7979');
    //nose
  triangle(width * 0.675, height * 0.5375, width *     0.7175, height * 0.52, width * 0.7, height * 0.55);
  line(width * 0.7, height * 0.55, width * 0.7,         height * 0.5625);

}


function drawCatMouth(x, y) {
  strokeWeight(2);
  stroke('#000000');
    //mouth color
  fill('#B24646');
  if (mouseX > 300 && mouseX < 380 && mouseY >50 &&     mouseY < 130 && mouseIsPressed) {

  quad(width * 0.7, height * 0.5625, width * 0.685,     height * 0.58, width * 0.7, height * 0.5775, width   *   0.715, height * 0.57);
  }

  else {

  quad(width * 0.7, height * 0.5625, width * 0.685,     height * 0.58, width * 0.7, height * 0.56, width *   0.715, height * 0.57);
  }

}


function drawGradient(x, y) {
  noStroke();
  let radius = width * 0.2;
  let t = 0;
  for (let r = radius; r > 0; r--) {
    fill(121, 92, 48, t);
    ellipse(x, y, r, r);
    t= t+0.6;
  }
}


function drawCatFace() {

  if(mouseIsPressed && mouseX > width * 0.25 &&         mouseX < width * 0.75 && mouseY > height * 0.3 &&     mouseY < height * 0.7) {

  drawGradient(width * 0.675, height * 0.5);
  drawCatEyes();
  drawCatNose();
  drawCatMouth();
  }

  else if (mouseX > width * 0.225) {

  push();
  let x1 = map(mouseX, 0, width, -width * 0.05, width   * 0.01, true);
  let y1 = map(mouseY, 0, height, -height * 0.025, 0,   true);
  translate(x1,y1);
  drawGradient(width * 0.675, height * 0.5);
  drawCatEyes();
  drawCatNose();
  drawCatMouth();
  pop();
  }

  else {

  drawGradient(width * 0.675, height * 0.5);
  drawCatEyes();
  drawCatNose();
  drawCatMouth();
  }

}


function mouseIsPressed() {
  mic = new p5.AudioIn()
  mic.start();
  userClicked = true;
}
