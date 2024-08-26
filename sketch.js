function setup() {
  createCanvas(400, 400);
  background("black");
}
function draw() {
  stroke("rgb(0,0,0)");
  fill("rgb(188,58,235)")
  
      if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
   }
}
