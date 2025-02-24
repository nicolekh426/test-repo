let y=100;
let x=10;
let wt=100;
let d=30;
let ht=50
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill("red")
  // new rectangles static 
  rect(10,200,150,40);
  rect(10+150+20,200,150,40);
  rect(10+150+20+150+20,200,150,40);
  
  fill("blue")
  rect(x,y,wt,ht);
  
  rect(x+wt+d,y,wt,ht);
  
  rect(x+wt*2+d*2,y,wt,ht);
  rect(x+wt*2+d*2,y,wt,ht) ;
  rect(x+wt*2+d*2+60,y-25,20,25)
  fill(200)
  //strokeWeight(0.2)
  ellipse(x+wt*2+d*2+70,y-50,30,20)
  ellipse(x+wt*2+d*2+70,y-80,20,10)
  line(x+wt,y+30,x+wt+d,y+30)
  line(x+wt+d+wt,y+30,x+wt+d+wt+d,y+30)


  //x+=1 
  if (x>800){x=1}
}