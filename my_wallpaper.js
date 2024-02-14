// Your parameter variables go here!
let flowerCENTREX = 75;
let flowerCENTREY = 120;

let petalpointoneX = 95;
let petalpointoneY = 15;

let petalpointTWOX = 95;
let petalpointTWOY = 116;

let petalpoint3X = 95;
let petalpoint3Y = 70;

let petalpoint4X = 95;
let petalpoint4Y = 230;

let petalpoint5X = 95;
let petalpoint5Y = 222;

let backgroundShape = false;

function setup() {S
  createCanvas(400, 400); // Set the size of the canvas
}

function draw() {
  wallpaper_background();
  my_symbol();
}

function wallpaper_background() {
  background(240, 255, 240); // Light honeydew green color
}

function my_symbol() {
  // Update petal positions for animation
  petalpointoneX = 95 + 20 * cos(frameCount * 0.02);
  petalpointoneY = 15 + 20 * sin(frameCount * 0.02);

  petalpointTWOX = 95 + 20 * cos(frameCount * 0.02 + PI / 3);
  petalpointTWOY = 116 + 20 * sin(frameCount * 0.02 + PI / 3);

  petalpoint3X = 95 + 20 * cos(frameCount * 0.02 + 2 * PI / 3);
  petalpoint3Y = 70 + 20 * sin(frameCount * 0.02 + 2 * PI / 3);

  petalpoint4X = 95 + 20 * cos(frameCount * 0.02 + PI);
  petalpoint4Y = 230 + 20 * sin(frameCount * 0.02 + PI);

  petalpoint5X = 95 + 20 * cos(frameCount * 0.02 - PI / 3);
  petalpoint5Y = 222 + 20 * sin(frameCount * 0.02 - PI / 3);

  if (backgroundShape) {
    fill(107, 142, 35);
    strokeWeight(0);
    stroke(5);
    fill(107, 142, 35);
    beginShape();
    curveVertex(199, 199);
    curveVertex(99, 185);
    curveVertex(44, 92);
    curveVertex(0, 0);
    curveVertex(flowerCENTREX, flowerCENTREY);
    curveVertex(63, 116);
    curveVertex(flowerCENTREX, flowerCENTREY);
    curveVertex(99, 185);
    curveVertex(199, 199);
    endShape(CLOSE);
  }

  strokeWeight(0);
  stroke(5);

  fill(255, 182, 193);
  beginShape();
  curveVertex(petalpointoneX, petalpointoneY);
  curveVertex(34, 29);
  curveVertex(56, 19);
  curveVertex(57, 3);
  curveVertex(71, 50);
  curveVertex(flowerCENTREX, flowerCENTREY);
  curveVertex(59, 66);
  curveVertex(42, 60);
  endShape(CLOSE);

  fill(107, 142, 35);
  beginShape();
  curveVertex(petalpointTWOX, petalpointTWOY);
  curveVertex(155, 115);
  curveVertex(163, 132);
  curveVertex(102, 158);
  curveVertex(149, 148);
  curveVertex(flowerCENTREX, flowerCENTREY);
  curveVertex(135, 132);
  endShape(CLOSE);

  fill(255, 69, 0);
  beginShape();
  curveVertex(petalpoint3X, petalpoint3Y);
  curveVertex(122, 22);
  curveVertex(140, 20);
  curveVertex(151, 31);
  curveVertex(153, 31);
  curveVertex(flowerCENTREX, flowerCENTREY);
  curveVertex(144, 74);
  curveVertex(111, 88);
  endShape(CLOSE);

  fill(100, 149, 237);
  beginShape();
  curveVertex(petalpoint4X, petalpoint4Y);
  curveVertex(46, 111);
  curveVertex(51, 132);
  curveVertex(54, 150);
  curveVertex(11, 167);
  curveVertex(flowerCENTREX, flowerCENTREY);
  curveVertex(22, 131);
  endShape(CLOSE);

  fill(75, 0, 130);
  beginShape();
  curveVertex(petalpoint5X, petalpoint5Y);
  curveVertex(85, 113);
  curveVertex(92, 130);
  curveVertex(129, 142);
  curveVertex(75, 154);
  curveVertex(flowerCENTREX, flowerCENTREY);
  curveVertex(73, 162);
  curveVertex(77, 110);
  endShape(CLOSE);
}
