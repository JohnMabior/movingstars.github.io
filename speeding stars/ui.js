
var stars = [];

var speed;
//the cavas to display my functions
function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}
// elements with each other
function draw() {
  speed = map(mouseX, 0, width, 0, 10);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}