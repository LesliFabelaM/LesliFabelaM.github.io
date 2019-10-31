function setup() {
  createCanvas(800, 600)
}

function draw() {
if(mouseIsPressed) {
  c = color(random(0, 250), random(0, 250), random(0, 250));
  fill(c)
}
else {
  fill(15, 11, 158);
}
ellipse(mouseX,mouseY,80,80)
}