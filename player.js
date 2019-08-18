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