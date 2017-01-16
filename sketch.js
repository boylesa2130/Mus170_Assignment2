var song;
var amp;
var theta = 0;
var img;
var col = 0;
var sliderVolume;
var rectangle1 ={
  x: -35,
  y: 300,
  diam: 50,
}
var rectangle2 ={
  x: -35,
  y: 100,
  diam: 50,
}
var rectangle3 ={
  x: -170,
  y: 100,
  diam: 50,
}
var rectangle4 ={
  x: 100,
  y: 100,
  diam: 50,
}

var playButton;
var stopbutton;


var rFuschia = 255;
var gFuschia = 0;
var bFuschia = 128;

var rRoyal = 65;
var gRoyal = 105;
var bRoyal = 225;

var rCurrent = rFuschia;
var gCurrent = gFuschia;
var bCurrent = bFuschia;

var rInc = (rRoyal - rFuschia) / 100;
var gInc = (gRoyal - gFuschia) / 100;
var bInc = (bRoyal - bFuschia) / 100;

var button;

var volhistory = [];

function preload() {
  song = loadSound('Jazz Sound.mp3');
  for (var i = 0; i < 3; i++) {
    img = loadImage("Tuba.jpg");
    
  }
}


function setup() {
  createCanvas(1000, 1000, WEBGL);
  song.setVolume(0.6);
  amp = new p5.Amplitude();

  var myArray = new Array("Piano", "Trombone", "Tuba", "Jazz", "Clapping")
  console.log(myArray)
  
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position(10, 10);
  sliderVolume.style('width', '80px');


  song.addCue(5, changeBackground);
  song.addCue(14, changeBackground);
  song.addCue(23, changeBackground);
  song.addCue(32, changeBackground);
  song.addCue(44, changeBackground);
  song.addCue(48.5, changeBackground);
  song.addCue(53, changeBackground);
  song.addCue(57.5, changeBackground);
  song.addCue(62, changeBackground);
  song.addCue(66, changeBackground);
  song.addCue(70.5, changeBackground);
  song.addCue(75.5, changeBackground);
  song.addCue(80, changeBackground);
  song.addCue(89.5, changeBackground);
  song.addCue(107, changeBackground);
  song.addCue(110, changeBackground);
  song.addCue(119, changeBackground);
  song.addCue(123.5, changeBackground);
  song.addCue(128, changeBackground);
  song.addCue(137.5, changeBackground);
  song.addCue(142, changeBackground);
  song.addCue(146, changeBackground);
  song.addCue(148, changeBackground);




  function changeBackground() {
    col = color(random(128), random(0), random(128));
  }
  
  
  playButton = createButton("play");
  playButton.position(40, 40);
  playButton.mousePressed(startStop);
  
  function startStop(){
    
    if(!song.isPlaying()){
      song.play();
      playButton.html("pause");
    } else{
      song.pause();
      playButton.html("play");
    }
  }
  stopButton = createButton("stop");
  stopButton.position(40, 60);
  stopButton.mousePressed(stop);
  
  function stop(){
    if(song.isPlaying()){
      song.stop();
      stopButton.html("stop")
    }
  }
}


function draw() {
  background(col);
  
  song.setVolume(sliderVolume.value());
  
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(50);
  directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  pointLight(0, 0, 200, locX, locY, 0);
  pointLight(200, 200, 0, -locX, -locY, 0);


push();
  translate(-250, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100, vol*100, vol*100);
  pop();

  
  push();
  translate(250, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100, vol*100, vol*100);
  pop();
  
  translate(-15, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(100, 100, 100, vol * 100, vol * 100);
  pop();
  theta += 0.05;

  var vol = amp.getLevel();
  volhistory.push(vol);

  noStroke();
  fill(rCurrent, gCurrent, bCurrent);
  rCurrent += rInc;
  gCurrent += gInc;
  bCurrent += bInc;

  if (rCurrent > rFuschia || rCurrent < rRoyal) {
    rInc = -rInc;
  }
  if (gCurrent > gRoyal || gCurrent < gFuschia) {
    gInc = -gInc;
  }
  if (bCurrent > bRoyal || bCurrent < bFuschia) {
    bInc = -bInc;
  }

  ellipse(-5, 200, vol * 1000, vol * 1000);

  fill(random(255), random(255), random(255))
  ellipse(-115, 200, vol * 800, vol * 800);
  ellipse(105, 200, vol * 800, vol * 800);

  if (keyIsPressed === true) {
    if (keyCode == DOWN_ARROW) {
      fill(0);
      rect(rectangle1.x, rectangle1.y, rectangle1.diam, rectangle1.diam) ;
      ellipse(-35, -200, vol * 1000, vol * 1000);
      rectangle1.x = rectangle1.x +1;
    } else {
      if (keyCode == UP_ARROW) {
        fill(0);
        rect(rectangle2.x, rectangle2.y, rectangle2.diam, rectangle2.diam);
        ellipse(-35, -200, vol * 1000, vol * 1000);
        rectangle2.x = rectangle2.x - 1;
      } else {
        if (keyCode == LEFT_ARROW) {
          fill(255);
          rect(rectangle3.x, rectangle3.y, rectangle3.diam, rectangle3.diam);
          ellipse(-170, -200, vol * 1000, vol * 1000);
          rectangle3.x = rectangle3.x - 1;
        } else {
          if (keyCode == RIGHT_ARROW) {
            fill(255);
            rect(rectangle4.x, rectangle4.y, rectangle4.diam, rectangle4.diam);
            ellipse(100, -200, vol * 1000, vol * 1000);
            rectangle4.x = rectangle4.x + 1;
          }// hold down each of those keys so rectangles move across the screen
        }
      }



      fill(random(255), random(255), random(255))
      rotateY(frameCount * 0.01);

      for (var j = 0; j < 5; j++) {
        push();
        for (var i = 0; i < 80; i++) {
          translate(sin(frameCount * 0.001 + vol) * 100, sin(frameCount * 0.001 + vol) * 100, i * 0.1);
          rotateZ(frameCount * 0.002);
          push();
          sphere(vol * 100, 6, 4);
          pop();
        }

      }
      if (volhistory.length > 360) {
        volhistory.splice(0, 1);
      }
    }
  }
}