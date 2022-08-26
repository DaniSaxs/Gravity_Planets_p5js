function planetsVectors(){

    this.sun = createVector(1.989e30, 696340e3);
    this.moon = createVector(7.349e22, 1737.4e3);
    this.mercury = createVector(3.285e23, 2439.7e3);
    this.venus = createVector(4.867e24, 6051.8e3);
    this.earth = createVector(5.972e24, 6371e3);
    this.mars = createVector(6.39e23, 3389.5e3);
    this.jupiter = createVector(1.9e27, 69911e3);
    this.saturn = createVector(5.683e26, 58232e3);
    this.uranus = createVector(8.681e25, 25362e3);
    this.neptune = createVector(1.024e26, 24622e3);

}

function GUI(){
  push();
    stroke(255);
    strokeWeight(1);
    line(0, height * 0.375, width, height * 0.375);
    line(width * 0.25, 0, width * 0.25, height * 0.375);
    line(width * 0.25, height * 0.625, width * 0.25, height);
    line(width / 2, 0, width / 2, height);
    line(0, height * 0.625, width, height * 0.625);
    line(width * 0.75, 0, width * 0.75, height * 0.375);
    line(width * 0.75, height * 0.625, width * 0.75, height);
  pop();
  
  push();
    textAlign(CENTER, CENTER);
    textSize(18);
    fill(0);
    text("Moon", width * 0.75, height / 2);
    fill(255);
    text("Sun", width * 0.25, height / 2);
    text("Mercury", width * 0.125, height * 0.1875);
    text("Venus", width * 0.375, height * 0.1875);
    text("Earth", width * 0.625, height *0.1875);
    text("Mars", width * 0.875, height * 0.1875);
    text("Jupiter", width * 0.125, height * 0.8125);
    text("Saturn", width * 0.375, height * 0.8125);
    text("Uranus", width * 0.625, height * 0.8125);
    text("Neptune", width * 0.875, height * 0.8125);
  pop();
  
  push();
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(255);
    if(count){
      text("Planet Gravity = " + planetName, width * 0.05, height * 0.425); 
      printCount = (millis() - t1) / 1000;
      text("t1 = " + printCount.toFixed(5) + " sec", width * 0.05, height * 0.475); 
    }else{
      text("Planet Gravity = " + planetName, width * 0.05, height * 0.425);
      text("t1 = " + float(printCount).toFixed(5) + " sec", width * 0.05, height * 0.475);
      if(gravity != null){
        fParticle = particle.mass * ((gravity.calculate().y * gravity.scale) / printCount);
        // platform.aceleration.y = ((fParticle / (particle.mass - platform.mass)) / gravity.scale);
        platform.aceleration.y = ((fParticle / particle.mass) / gravity.scale);
        text("F = " + fParticle.toFixed(5) + " N", width * 0.05, height * 0.525);
        if(particle.impactFlag){
          printCount2 = (millis() - t2) / 1000;
          v0 = (gravity.calculate().y * printCount);
          //particle.speed.y *= -v0;
          //vf = v0 + (gravity.calculate().y * printCount);
          //vf = v0 - (gravity.calculate().y * printCount2);
          //h = (v0 * printCount2) - (0.5 * gravity.calculate().y * pow(printCount2, 2));
          text("t2 = " + printCount2.toFixed(5) + " sec", width * 0.05, height * 0.575);
          if(dist(particle.pos.x, particle.pos.y, platform.pos.x, platform.pos.y) < 50){
            particle.speed.y *= -(v0 / particle.mass);
            // particle.speed.y *= -((gravity.calculate().y - ((particle.mass - platform.mass) * gravity.calculate().y)) / gravity.scale);
            //particle.speed.y *= -(((particle.mass - platform.mass) * gravity.calculate().y) / gravity.scale);
            
            //particle.speed.y *= -((gravity.calculate().y - (fParticle / (particle.mass - platform.mass))) / gravity.scale);
            //particle.speed.y *= -(((particle.mass - platform.mass) * gravity.calculate().y) / gravity.scale);
          }
        }else{
          text("t2 = " + printCount2.toFixed(5) + " sec", width * 0.05, height * 0.575);
        }
      }
    }
    
  pop();
}

function planetsGravity(){

  //MOON
  if(mouseX > width / 2 && mouseX < width && mouseY > 0.375 && mouseY < height * 0.625){
    gravity = new Gravity(this.moon.x, this.moon.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Moon";
  }
  //SUN
  if(mouseX > 0 && mouseX < width / 2 && mouseY > 0.375 && mouseY < height * 0.625){
    gravity = new Gravity(sun.x, sun.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Sun";
  }
  //MERCURY
  if(mouseX > 0 && mouseX < width * 0.25 && mouseY > 0 && mouseY < height * 0.375){
    gravity = new Gravity(mercury.x, mercury.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Mercury";
  }
  //VENUS
  if(mouseX > width * 0.25 && mouseX < width / 2 && mouseY > 0 && mouseY < height * 0.375){
    gravity = new Gravity(venus.x, venus.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Venus";
  }
  //EARTH
  if(mouseX > width / 2 && mouseX < width * 0.75 && mouseY > 0 && mouseY < height * 0.375){
    gravity = new Gravity(earth.x, earth.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Earth";
  }
  //MARS
  else if(mouseX > width * 0.75 && mouseX < width && mouseY > 0 && mouseY < height * 0.375){
    gravity = new Gravity(mars.x, mars.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Mars";
  }
  //JUPITER
  else if(mouseX > 0 && mouseX < width * 0.25 && mouseY > height * 0.625 && mouseY < height){
    gravity = new Gravity(jupiter.x, jupiter.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Jupiter";
  }
  //SATURN
  else if(mouseX > width * 0.25 && mouseX < width / 2 && mouseY > height * 0.625 && mouseY < height){
    gravity = new Gravity(saturn.x, saturn.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Saturn";
  }
  //URANUS
  else if(mouseX > width / 2 && mouseX < width * 0.75 && mouseY > height * 0.625 && mouseY < height){
    gravity = new Gravity(uranus.x, uranus.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Uranus";
  }
  //NEPTUNE
  else if(mouseX > width * 0.75 && mouseX < width && mouseY > height * 0.625 && mouseY < height){
    gravity = new Gravity(neptune.x, neptune.y);
    particle = new Particle(createVector(width / 2, 0));
    planetName = "Neptune";
  }

}

function gravityPlat(){
  
  if(gravity != null){
    
    //if(particle.pos.y + 30) >= ((height * 0.7) - 20)){}
    
    if(dist(particle.pos.x, particle.pos.y, platform.pos.x, platform.pos.y) < 50 && platform.pos.y <= height * 0.7){
      particle.impactFlag = true;
      t2 = millis();
    }
    
    if(particle.impactFlag){
      count = false;
      platform.update();
    }
    
    if(particle.pos.y >= height) particle.impactFlag = false;
    
  }
}

function GUI2(){
    push();
      stroke(255);
      strokeWeight(1);
      line(0, height * 0.375, width, height * 0.375);
      line(width * 0.25, 0, width * 0.25, height * 0.375);
      line(width * 0.25, height * 0.625, width * 0.25, height);
      line(width / 2, 0, width / 2, height);
      line(0, height * 0.625, width, height * 0.625);
      line(width * 0.75, 0, width * 0.75, height * 0.375);
      line(width * 0.75, height * 0.625, width * 0.75, height);
    pop();
    
    push();
      textAlign(CENTER, CENTER);
      textSize(18);
      fill(0);
      text("Moon", width * 0.75, height / 2);
      fill(255);
      text("Sun", width * 0.25, height / 2);
      text("Mercury", width * 0.125, height * 0.1875);
      text("Venus", width * 0.375, height * 0.1875);
      text("Earth", width * 0.625, height *0.1875);
      text("Mars", width * 0.875, height * 0.1875);
      text("Jupiter", width * 0.125, height * 0.8125);
      text("Saturn", width * 0.375, height * 0.8125);
      text("Uranus", width * 0.625, height * 0.8125);
      text("Neptune", width * 0.875, height * 0.8125);
    pop();
    
    push();
      textAlign(LEFT, CENTER);
      textSize(14);
      fill(255);
      if(count){
        text("Planet Gravity = " + planetName, width * 0.05, height * 0.425); 
        printCount = (millis() - t1) / 1000;
        text("t1 = " + printCount.toFixed(5) + " sec", width * 0.05, height * 0.475); 
      }else{
        text("Planet Gravity = " + planetName, width * 0.05, height * 0.425);
        text("t1 = " + float(printCount).toFixed(5) + " sec", width * 0.05, height * 0.475);
        if(gravity != null){
          fParticle = particle.mass * ((gravity.calculate().y * gravity.scale) / printCount);
          platform.aceleration.y = ((fParticle / particle.mass) / gravity.scale);
          platform.update();
          text("F = " + fParticle.toFixed(5) + " N", width * 0.05, height * 0.525);
        }
      }
      
    pop();
  }