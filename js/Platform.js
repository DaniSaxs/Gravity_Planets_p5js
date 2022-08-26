class Platform{
  
    pos;
    speed;
    aceleration;
    mass;
    
    constructor(){
      this.pos = new createVector(width / 2, height * 0.7);
      this.speed = new createVector(0, 0);
      this.aceleration = new createVector(0, 0);
      this.mass = 10;
    }
    
    display(){
      
      push();
        rectMode(CENTER);
        stroke(255);
        strokeWeight(4);
        fill(0, 255, 100);
        rect(this.pos.x, this.pos.y, 120, 40);
      pop();
      
      push();
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(18);
        text(int(this.mass) + " kg", this.pos.x, this.pos.y);
      pop();
      
    }

    update(){
      platform.speed.add(gravity.calculate());
      platform.speed.add(platform.aceleration);
      platform.pos.add(platform.speed);
    }
    
  }