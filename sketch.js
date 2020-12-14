var bird;
var pipes = [];

var gameState = "Play";


function setup() {
  createCanvas(800,400);

  bird = new Bird();

  pipes.push( new Pipe());
}

function draw() {
  background(0);  

  
  if(gameState === "Play"){



  

  for(var i = pipes.length-1;i>=0;i--){
  
    pipes[i].show();
    pipes[i].move();

    if(pipes[i].hit(bird)){

     console.log("Hit");   
     gameState = "End"; 

    }
  
    if(pipes[i].offscreen()) {
  
      pipes.splice(i,1);
  
    }

    
    
    }

  bird.show();
  bird.fall();

  if(frameCount % 80 === 0){

    pipes.push( new Pipe());


  }
 
  }

  else if(gameState === "End"){

    pipes = [];
    background(255,0,0);



  }



  drawSprites();
 
}


function keyPressed(){

if(keyCode === 32){

  bird.lift();


}
 
}