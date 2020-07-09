let points;

function addPlayer() {
  //Create the player sprite from the texture
  player = new PIXI.Sprite(PIXI.loader.resources["player.png"].texture); 			
  player.scale.set(0.2,0.2);
  //Position the player sprite on the canvas
  player.x = 600;
  player.y = 300;			
  // set its velocity
  player.vx = 0;
  player.vy = 0;
  //Add the player to the stage
  app.stage.addChild(player);
}


function movePlayer() {
  //Use the player's velocity to make them move
  if (streets.visible && !facility.visible) {  // check for obstactles before moving        
    let newPlayerX = player.x + player.vx;
    let newPlayerY = player.y + player.vy;
    let collided = wallColisions(player);              
    
    if (collided == false) {
      player.x = newPlayerX;
      player.y = newPlayerY;
      debounceN = false, debounceE = false, debounceS = false, debounceW = false;
    } else {
      if (debounceN == false){
        debounceN = true;
        player.y -= 5;
      } else if (debounceE == false){
        debounceE = true;
        player.y += 5;
        player.x += 5;
      } else if (debounceS == false){
        debounceS = true;
        player.x -= 5;
        player.y += 5;
      } else if (debounceW == false){
        debounceW = true;
        player.y -= 5;
        player.x -= 5;
      } else {
        player.x = streetLocX;
        player.y = streetLocY;
      }
    }
  } else {
    player.x += player.vx;
    player.y += player.vy;
  }

  // stop player at edges
  if (player.x > 950)			
    player.x = 950;
  if (player.y > 550)  
    player.y = 550;
  if (player.x < 0)			
    player.x = 0;
  if (player.y < topEdge)  
    player.y = topEdge;
}