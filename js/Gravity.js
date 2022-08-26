class Gravity{
  
    m;
    r;
    G = 6.672e-11;
    gravity;
    scale = 100;
  
    constructor(m_, r_){
      this.m = m_;
      this.r = r_;
      this.gravity = createVector(0, 0);
    }
    
    calculate(){
      let g_ = ((this.G * this.m) / pow(this.r, 2)) / this.scale;
      this.gravity = createVector(0, g_);
      return this.gravity;
    }
  
  }