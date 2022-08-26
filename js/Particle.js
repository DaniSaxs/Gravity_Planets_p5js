class Particle{

    pos;
    speed;
    aceleration;
    mass;
    impactFlag;

    constructor(pos_){
        this.pos = pos_;
        this.speed = createVector(0, 0);
        this.aceleration = createVector(0, 0);
        this.mass = 20;
        this.impactFlag = false;
    }

    display(){
        push();
            stroke(255);
            strokeWeight(4);
            fill(128);
            circle(this.pos.x, this.pos.y, 60);
        pop();

        push();
            fill(255, 0, 0);
            textAlign(CENTER, CENTER);
            textSize(18);
            text(int(this.mass) + " kg", this.pos.x, this.pos.y);
        pop();
    }

    update(){
        this.speed.add(gravity.calculate());
        console.log(gravity.calculate());
        this.pos.add(this.speed);
    }

}