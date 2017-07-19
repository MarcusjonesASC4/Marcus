function setup(){
    createCanvas(250,250);
    background(200);
xSpeed = random(-2,2);
ySpeed = random(-2,2);

}
var x = 0 
var y = 0
var xSpeed = 1;
var ySpeed = 1;
function draw(){
    background(200)
    ellipse(x,y,30,30);
    if (x>=500){
        xSpeed = -1;
}
else if (x<=0) {
    xSpeed =  1;
}
if (y>=500){
    ySpeed = -1;
}
else if (y<=0){
    ySpeed = 1;

}

    x= x+xSpeed;
    y= y+ySpeed; 
    
   
 } 