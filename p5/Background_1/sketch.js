
var points = [];
var total = 250;



class Point {

  constructor(x, y, sw, col) {
    this.x = x;
    this.y = y;
    this.sw = sw;
    this.col = col;

    this.dir = 1;
    this.minW = 1;
    this.maxW = random(60, 100);
    this.growSpeed = random(0.003, 0.005);

    this.bezierCurveSpeed = new BezierCurve(
      createVector(-1 , -1),
      createVector(0.5, -1),
      createVector(-0.5, 1),
      createVector(1, 1));
      this.bezierSpeed = 0;
    this.t = 0;
  }


  calculateBezierSpeed() {

    this.bezierSpeed = this.bezierCurveSpeed.getBezier4Point(this.t).y;

    this.t += this.dir * this.growSpeed;

  }

  update() {

    if (this.t >= 1) {
      this.dir *= -1;
    }
    else if (this.t <= 0) {
      this.dir *= -1;
      this.x = random(width);
      this.y = random(height);
    }

    this.sw = map(this.bezierSpeed, -1, 1, this.minW, this.maxW);

  }

  show() {
    stroke(this.col, 100);
    strokeWeight(this.sw);
    point(this.x, this.y);
  }

}


function setup() {

  canvasDiv = document.getElementById('background-global');
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("background-global");

  // createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < total; i++) {
    points[i] = new Point(random(width), random(height), random(10, 100), random(150)); //color(0, 0, random(200), 100)
  }

  stroke(0, 255, 0);
  strokeWeight(5);

}

function draw() {
  background(51);
  

  for (let p of points) {
    p.calculateBezierSpeed();
    p.update();
    p.show();
  }




}