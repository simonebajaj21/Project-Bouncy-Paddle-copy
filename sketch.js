var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
    ballimage = loadImage("ball.png");
    paddleimage = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  
  
  ball = createSprite(200,200,30,30);
  ball.addImage("ball",  ballimage);
  
  paddle = createSprite(358,200,20,100);
  paddle.addImage("paddle",  paddleimage);

  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  
  ball.velocityX =9;
  

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
  
  
  //ball.bounceOff(edges);
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */

  ball.bounceOff(paddle, randomVelocity);
  
  paddle.collide(edges);
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  

  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=4;
  }
  
  
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY=random(-4,4);
  
 
}

