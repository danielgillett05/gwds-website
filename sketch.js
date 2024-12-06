let angle = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
canvas.style('position', 'absolute')
canvas.style('z-index', '-1');
angleMode(DEGREES);
noStroke();
fill(0, 15, 30, 220)
}

function draw() {
background(0)

translate(width / 2, height /2);

//first loop
for (let a = 0; a <360; a += 22.5) {
  rotate(a);

  push();
  for (let i = 0; i <100; i++) {
    scale(0.95);
    rotate(angle);
    fill(255, 0, 29)
    ellipse(width, 0, 120, 120);
  }
  pop();

  //second loop
  push();

  for(let i = 0; i <100; i++) {
    scale(0.95);
    rotate(-angle);
    fill(255, 0, 29)
    ellipse(width, 0, 100, 100);
  }
  pop();

  //third loop
  push();

  for(let i = 0; i <100; i++) {
    scale(0.8);
    rotate(-angle);
    fill(255, 0, 29)
    rect(width, 2, 110, 110);
  }
  pop();
  
  }
  angle += 0.01;
}

