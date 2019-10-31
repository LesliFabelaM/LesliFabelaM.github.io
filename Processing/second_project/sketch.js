let angle = 0.0;
let jitter = 0.0;

function setup() {
  createCanvas(800, 600)
}

function draw()
{
  // Light blue color
  fill(255,0,0,160);// Red color
  ellipse(132,82,200,200);// Red circle
  fill(0,255,0,160);// Green color
  ellipse(228,-16,200,200);// Green circle
  fill(0,0,255,160);// Blue color
  ellipse(268,118,200,200);// Blue circle
  if (second() % 2 === 0) 
    jitter = (-0.1, 0.1);
  
  //increase the angle value using the most recent jitter value
  angle = angle + jitter;
  //use cosine to get a smooth CW and CCW motion when not jittering
  let c = cos(angle);
  //move the shape to the center of the canvas
  translate(width / 2, height / 2);
  //apply the final rotation
  rotate(c);
  rect(0, 0, 180, 180);

  fill(139, 168, 254)
  ellipse(140,0,190,190);
  // The rectangle draws on top of the ellipse// because it comes after in the code
  rect(160,30,260,20);
}
