
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true;
let heartImg;
let bodyImg;
let wingsImg;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    heartImg = loadImage('heart.png')
    bodyImg = loadImage('body.png')
    wingsImg = loadImage('wings.png')

 firstRun = false
   
  }
  background(100)
  push()
scale(0.4)
image(bodyImg, 0,0)
pop()

push()
scale(0.8)
image(heartImg, -740,drum-450) // name of image, xpos, Ypos 
pop()

push()
scale(0.2)
image(wingsImg, vocal+840, drum+6500)
pop()

push()

var ballSize = map(bass, 0,100, 40,150);

var drumHight = map(drum, 0,100, 0+ballSize/2, height );

stroke(0)
fill (128,0,0);

beginShape();
scale(1)
fill (128,0,0)

ellipse(width/3.4,drum+900, ballSize);

//curveVertex(500,250)
//curveVertex(520,160)
//curveVertex(620,170)
//curveVertex(720,180)
//curveVertex(820,190)


//endShape(CLOSE);


//ellipse(width/2, drum, ballSize);

pop()

push()



stroke(0)
fill (128,0,0);

beginShape();
scale(1)
fill (128,0,0)

ellipse(width/3.4,drum+800,20);
}





 

// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   if(firstRun){
//  firstRun = false
// background(100)
// push()
// scale()
// image(body.png), 0,bass)
// pop()



// }   