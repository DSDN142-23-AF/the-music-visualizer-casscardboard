
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true;
let heartImg;
let bodyImg;
let Newone;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    heartImg = loadImage('heart.png')
    bodyImg = loadImage('body.png')

 firstRun = false
   
  }
  background(100)
  push()
scale(0.4)

image(bodyImg, 0,0)
pop()

push()
scale(0.2)
image(heartImg, drum,0) // name of image, xpos, Ypos 
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