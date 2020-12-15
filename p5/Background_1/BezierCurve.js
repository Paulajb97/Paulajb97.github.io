  
  /**   Example points =====>  https://www.desmos.com/calculator/d1ofwre0fr?lang=es
    --> (-1 , -1), (0.5, -1), (-0.5, 1), (1, 1)
    --> (0 , 0), (0.8, 0), (0.2, 1), (1, 1)
   */
  
  
  
  class BezierCurve {
  
    constructor(p0, p1, p2, p3) {
      this.p0 = p0;
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
    }
  
    //By lerp + t
    getBezier2Point(t) {
      return p5.Vector.lerp(this.p0, this.p1, t);
    }
    getBezier3Point(t) {
  
      let a = p5.Vector.lerp(this.p0, this.p1, t);
      let b = p5.Vector.lerp(this.p1, this.p2, t);
      
      return p5.Vector.lerp(a, b, t);
    }
    getBezier4Point(t) {
  
      let a = p5.Vector.lerp(this.p0, this.p1, t);
      let b = p5.Vector.lerp(this.p1, this.p2, t);
      let c = p5.Vector.lerp(this.p2, this.p3, t);
      
      let d = p5.Vector.lerp(a, b, t);
      let e = p5.Vector.lerp(b, c, t);
    
      return p5.Vector.lerp(d, e, t);
    }
  
    //By formula + t
    getBezier2PointFormula(t) {
      
      //P   = (1-t) *     P1    + t *    P2
      let x = (1-t) * this.p0.x + t * this.p1.x;
      let y = (1-t) * this.p0.y + t * this.p1.y;
  
      return createVector(x, y);
  
    }
    getBezier3PointFormula(t) {
  
      //P   =   (1−t)^2   *      P1   + 2 * (1−t) * t *      P2   + t^2 *     P3
      let x = (1-t)*(1-t) * this.p0.x + 2 * (1-t) * t * this.p1.x + t*t * this.p2.x;
      let y = (1-t)*(1-t) * this.p0.y + 2 * (1-t) * t * this.p1.y + t*t * this.p2.y;
  
      return createVector(x, y);
  
    }
    getBezier4PointFormula(t) {
  
      //P   =      (1−t)^3      *     P1    + 3     (1−t)^2   * t *    P2     + 3 * (1−t) * t^2 *    P3     + t^3   *    P4
      let x = (1-t)*(1-t)*(1-t) * this.p0.x + 3 * (1-t)*(1-t) * t * this.p1.x + 3 * (1-t) * t*t * this.p2.x + t*t*t * this.p3.x;
      let y = (1-t)*(1-t)*(1-t) * this.p0.y + 3 * (1-t)*(1-t) * t * this.p1.y + 3 * (1-t) * t*t * this.p2.y + t*t*t * this.p3.y;
  
      return createVector(x, y);
  
    }
  
  }