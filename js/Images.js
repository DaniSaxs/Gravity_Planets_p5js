class Images{
  
    mercury;
    venus;
    earth;
    mars;
    jupiter;
    saturn;
    uranus;
    neptune;
    sun;
    moon;
    
    constructor(){
      this.mercury = loadImage("img/mercury.png");
      this.venus = loadImage("img/venus.png");
      this.earth = loadImage("img/earth.png");
      this.mars = loadImage("img/mars.png");
      this.jupiter = loadImage("img/jupiter.png");
      this.saturn = loadImage("img/saturn.png");
      this.uranus = loadImage("img/uranus.png");
      this.neptune = loadImage("img/neptune.png");
      this.sun = loadImage("img/sun.png");
      this.moon = loadImage("img/moon.png");
    }
    
    loadImages(){
      image(this.mercury, 0, 0);
      image(this.venus, width * 0.25, 0);
      image(this.earth, width / 2, 0);
      image(this.mars, width * 0.75, 0);
      image(this.jupiter, 0, height * 0.625);
      image(this.saturn, width * 0.25, height * 0.625);
      image(this.uranus, width / 2, height * 0.625);
      image(this.neptune, width * 0.75, height * 0.625);
      image(this.sun, 0, height * 0.375);
      image(this.moon, width / 2, height * 0.375);
    }
    
  }