// console.log("Today's fish is trout a la creme.");

class Fish {
  constructor(_xPos, _yPos, _size) {
    this.xPos = _xPos
    this.yPos = _yPos
    this.size = _size
  }
  
  display() {
    strokeWeight(2);
    stroke('#000000');
      //mouth color
    fill('#54979c');
    push();
    translate(this.xPos,this.yPos);
    scale(this.size);
    beginShape();
    vertex (width * 0.375 - width * 0.375, height *       0.25 - height * 0.25);
    vertex (width * 0.2875 - width * 0.375, height *     0.3125 - height * 0.25);
    vertex (width * 0.175 - width * 0.375, height *       0.255 - height * 0.25);
    vertex (width * 0.125 - width * 0.375, height *       0.3125 - height * 0.25);
    vertex (width * 0.125 - width * 0.375, height *       0.1875 - height * 0.25);
    vertex (width * 0.175 - width * 0.375, height *       0.245 - height * 0.25);
    vertex (width * 0.2875 - width * 0.375, height *     0.1875 - height * 0.25);
    endShape(CLOSE);
    fill ('#000000');
    ellipse (width * 0.325 - width * 0.375, height *     0.24 - height * 0.25, width * 0.01, height *         0.01);
    pop();
  }
  
  move() {
    if (this.xPos <= width * 1.5) {
    this.xPos += 1.25;
    }
      
    else {
    this.xPos = 0;
    }
    
    if (this.yPos <= height * 1.2) {
    this.yPos += 0.25
    }
    
    else {
    this.yPos = 0 - height * 0.1;
    }
  }

}