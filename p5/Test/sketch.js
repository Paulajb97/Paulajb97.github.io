
//https://en.wikipedia.org/wiki/Chaos_game

let points = [];
const totalPoints = 5;

let current;
let previous;

let alpha = 0.5;


let canvasDiv;
let myCanvas;

function setup() {  

  canvasDiv = document.getElementById('canvasP5');
  let finalWidth = canvasDiv.offsetWidth;
  let finalHeight = finalWidth*0.67;

  myCanvas = createCanvas(finalWidth, finalHeight);
  myCanvas.parent("canvasP5");

  // createCanvas(windowWidth, windowHeight);

  rePaint();
}


function rePaint() {
  points = [];

  for (let i = 0; i < totalPoints; i++) {
    let angle = i * TWO_PI / totalPoints;
    let v = p5.Vector.fromAngle(angle);
    v.mult(min(width, height)*0.5);
    v.add(width*0.5, height*0.5);
    points.push(v);
  }

  reset();
}


function reset() {
  
  background(0);

  current = random(points).copy();

  stroke(255);
  strokeWeight(8);
  // for (let p of points) {
  //   point(p.x, p.y);
  // }

}

function draw() {
  
  // if (frameCount % 100 == 0) {
  //   reset();
  // }

  background(0, 5);
  strokeWeight(1);
  stroke(0, 139, 139, 200);
  
  for (let i = 0; i < 1000; i++) {
    
    let next = random(points);
    if (next != previous) {
      current.x = lerp(current.x, next.x, alpha);
      current.y = lerp(current.y, next.y, alpha);
      
      point(current.x, current.y);
    }
    
    previous = next;
    
  }
  
}


function resizeCanvasHTML() {
  let finalWidth = canvasDiv.offsetWidth;
  let finalHeight = finalWidth*0.67;

  resizeCanvas(finalWidth, finalHeight);
  
  rePaint();
}

