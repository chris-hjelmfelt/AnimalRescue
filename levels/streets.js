let numWalls = 10;

function addStreets() {
  streets = new PIXI.Sprite(PIXI.loader.resources["streets.png"].texture);
  app.stage.addChild(streets);   
  // Create Wall sprite
  let wallsprite1 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(0, 226, 80, 30));
  for(let w=0; w<numWalls; w++) {
    walls.push(new Sprite(wallsprite1));
    walls[w].x = w*80;
    walls[w].y = 100;
    app.stage.addChild(walls[w]); 
  }     
  hideStreets();
}


function showStreets() {
  streets.visible = true;
  for(let i=0; i<numWalls; i++) {
    walls[i].visible = true;
  }
}

function hideStreets() {
  streets.visible = false;
  for(let i=0; i<numWalls; i++) {
    walls[i].visible = false;
  }
}