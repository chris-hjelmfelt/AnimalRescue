let numWallsV = 23;
let numWallsH = 17;
let streetLocX = 210;
let streetLocY = 225;
// vertical walls
let wallLocationsV = [{x:0, y:100}, {x:80, y:100}, {x:160, y:100}, {x:240, y:100}, {x:0, y:200}, 
  {x:180, y:200}, {x:360, y:200}, {x:440, y:200}, {x:520, y:200}, {x:600, y:200}, {x:680, y:200}, 
  {x:120, y:300}, {x:200, y:300}, {x:280, y:300}, {x:360, y:300}, {x:540, y:300}, {x:620, y:300}, 
  {x:700, y:300}, {x:780, y:300}, {x:0, y:400}, {x:80, y:400}, {x:160, y:400}, {x:320, y:400}];
// horizontal walls
let wallLocationsH = [{x:0, y:100}, {x:80, y:100}, {x:160, y:100}, {x:240, y:100}, {x:0, y:200}, 
  {x:180, y:200}, {x:360, y:200}, {x:440, y:200}, {x:520, y:200}, {x:120, y:300}, {x:200, y:300}, 
  {x:280, y:300}, {x:360, y:300}, {x:540, y:300}, {x:400, y:300}, {x:400, y:380}, {x:400, y:460}];

function addStreets() {
  streets = new PIXI.Sprite(PIXI.loader.resources["streets.png"].texture);
  app.stage.addChild(streets);   

  // Create vertical Wall sprite
  let wallsprite1 = new PIXI.Texture(loader.resources["wallsprites.png"].texture, new PIXI.Rectangle(176, 231, 80, 25));
  for(let v=0; v < numWallsV; v++) {
    walls.push(new Sprite(wallsprite1));
    walls[v].x = wallLocationsV[v].x;
    walls[v].y = wallLocationsV[v].y;
    app.stage.addChild(walls[v]); 
  }  

  // Create horizontal Wall sprite
  let wallsprite2 = new PIXI.Texture(loader.resources["wallsprites.png"].texture, new PIXI.Rectangle(135, 176, 25, 80));
  for(let h=0; h < numWallsH; h++) {
    newH = numWallsV + h;
    walls.push(new Sprite(wallsprite2));
    walls[newH].x = wallLocationsH[h].x;
    walls[newH].y = wallLocationsH[h].y;
    app.stage.addChild(walls[newH]); 
  }      
}


function showStreets() {
  streets.visible = true;
  player.scale.set(0.1,0.1);
  player.x = streetLocX;
  player.y = streetLocY;  
  dog1.scale.set(0.7,0.7);
  dog1.x = 540;
  dog1.y = 245;
  for(let i=0; i < (numWallsV + numWallsH); i++) {
    walls[i].visible = true;
  }
}

function hideStreets() {
  streets.visible = false;
  player.scale.set(0.2,0.2);  
  dog1.scale.set(1,1);
  for(let i=0; i < (numWallsV + numWallsH); i++) {
    walls[i].visible = false;
  }
}