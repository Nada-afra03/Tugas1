let x=240;
let y=110;
let goLeft=false;
function setup() {
  // put setup code here
  createCanvas(400,200);
}

function draw() {
  // put drawing code here
  background(200);

  //pembatas
  strokeWeight(1)
  line(200,0,200,200)

  //mobil 1
  strokeWeight(3)
  fill(255,0,0)
  rect(40,110,120,40)

  beginShape()
vertex(60,110);
vertex(90,80);
vertex(140,80);
vertex(150,110);
vertex(60,110);
endShape(CLOSE)

fill(255,255,255)
beginShape()
vertex(80,105);
vertex(95,88);
vertex(108,88);
vertex(108,105);
vertex(80,105);
endShape(CLOSE)

beginShape()
vertex(115,105);
vertex(115,88);
vertex(130,88);
vertex(140,105);
vertex(115,105);
endShape()

strokeWeight(8)
  fill(255,255,255)
  ellipse(60,150,20,20)
  ellipse(140,150,20,20)


// mobil 2
  strokeWeight(3)
  fill(255,0,0)
  rect(x,y,120,40)
  strokeWeight(3)
  
beginShape()
vertex(x+20,y); 
vertex(x+50,y-30); 
vertex(x+100,y-30);
vertex(x+110,y);
vertex(x+20,y);
endShape(CLOSE)

fill(255,255,255)
beginShape()
vertex(x+38,y-5);
vertex(x+55,y-22);
vertex(x+68,y-22);
vertex(x+68,y-5);
vertex(x+38,y-5);
endShape(CLOSE)

fill(255,255,255)
beginShape()
vertex(x+75,y-5);
vertex(x+75,y-22);
vertex(x+90,y-22);
vertex(x+100,y-5);
vertex(x+75,y-5)
endShape(CLOSE)

  strokeWeight(8)
  fill(255,255,255)
  ellipse(x+20,y+40,20,20)
  ellipse(x+100,y+40,20,20)
  beginShape()
  vertex()
  endShape(

  )
  if(goLeft==false){
    x=x+2;
  }
  if(goLeft==true){
    x=x-2;
  }
  if(x>280){
    goLeft=true;
  }
  if(x<210){
    goLeft=false;
  }
  }