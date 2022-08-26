var particle;
var platform;
var gravity;

let images;
//Stars[] stars = new Stars[200];
let t1;
let t2;
let fParticle;
let count;
let printCount;
let printCount2;
let planetName;
let v0;
let vf;
let h;

function setup() {
  createCanvas(1280, 720);
  planetsVectors();
  planetName = "None";
  particle = new Particle(createVector(width / 2, height * 0.1));
  platform = new Platform();
  images = new Images();
}

function draw() {
  background(0);
  images.loadImages();

  GUI();
  gravityPlat();

  if(gravity != null){
    particle.display();
    platform.display();
    particle.update();
  }

}

function mousePressed() {
  // reset();
  t1 = millis();
  count = true;
  planetsGravity();
  platform = new Platform();
}