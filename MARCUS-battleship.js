function setup(){
    createCanvas(800,800);
    background(200);
    rect(0,0,200,200);
   

}
var s = 200;
function draw(){
    for (var i=0;  i<myBoard.length; i++){
        for    (var j=0; j<4; j++  ){
            rect(j*s,i*s,s,s)
        }
        
    }
}








 
 var row1 = ["F","F","F","F"]
 var row2 = ["T","T","F","F"]
 var row3 = ["F","F","T","T"]
 var row4 = ["F","F","F","F"]

 var myBoard = [row1,row2,row3,row4]
 
 