
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true;
let heartImg;
let bodyImg;
let wingsImg;
let wings2Img;
let nameImg;
let fairyImg;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    heartImg = loadImage('heart.png')
    bodyImg = loadImage('body.png')
    wingsImg = loadImage('wings.png')
    wings2Img = loadImage('wings 2 .png')
    nameImg = loadImage('name.png')
    fairyImg = loadImage('fairy.png')

 firstRun = false
   
  }
  background(100)
  push()
scale(0.4)// BACKROUND BODY 
image(bodyImg, 0,0)
pop()

push()
scale(0.8)// HEART MOM 
image(heartImg, -740,drum-450) // name of image, xpos, Ypos 
pop()

push()
scale(0.3)// cassidy
image(nameImg, drum-80 , 5000) // name of image, xpos, Ypos 
pop()

push()
scale(0.1)// lesbian fairies 1
image(fairyImg, bass+3600, 13000) // name of image, xpos, Ypos 
pop()

push()
scale(0.1)// lesbian fairies 2
image(fairyImg, other-500, 13000) // name of image, xpos, Ypos 
pop()

push()
scale(0.2)// WINGS 2 
image(wings2Img, words-700 , 6000)
pop()

push() // WINGS 1
scale(0.2)
image(wingsImg, words+1300, 6000)
pop()

push()// FIRST BLOOD DRP 
var ballSize = map(bass, 0,100, 40,150);
stroke(0)
fill (128,0,0);
beginShape();
scale(1)
fill (128,0,0)
ellipse(width/3.4,drum+600, ballSize-60);

pop()
push() //SECOND BLOOD DRIP
var ballSize = map(other, 0,100, 40,150);
stroke(0)
fill (128,0,0);
beginShape();
scale(1)
fill (128,0,0)
ellipse(width/3.4,drum+800,ballSize-60);
pop()


push()// THIRD BLOOD DRIP
var ballSize = map(bass, 0,100, 40,150);
stroke(0)
fill (128,0,0);
beginShape();
scale(1)
fill (128,0,0)
ellipse(width/3.4,vocal+1000,ballSize-70);
pop()



}
