
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
image(wingsImg, vocal+840, 6500)
pop()
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