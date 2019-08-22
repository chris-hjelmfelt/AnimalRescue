let numWallsV = 50;
let numWallsH = 35;
let streetLocX = 210;
let streetLocY = 225;
// vertical walls
let wallLocationsV = [{x:0, y:0}, {x:80, y:0}, {x:160, y:0}, {x:240, y:0}, {x:320, y:0}, 
  {x:400, y:0}, {x:480, y:0}, {x:560, y:0}, {x:640, y:0}, {x:720, y:0}, 
  {x:800, y:0}, {x:880, y:0}, {x:960, y:0}, {x:0, y:625}, {x:80, y:625}, 
  {x:160, y:625}, {x:240, y:625}, {x:320, y:625}, {x:400, y:625}, {x:480, y:625}, 
  {x:560, y:625}, {x:640, y:625}, {x:720, y:625}, {x:800, y:625}, {x:880, y:625}, 
  {x:960, y:625}, 
  {x:100, y:100}, {x:180, y:100}, {x:240, y:100}, {x:520, y:100}, {x:600, y:100},
  {x:520, y:200}, {x:20, y:260}, {x:280, y:260}, {x:360, y:260}, {x:800, y:260},
  {x:100, y:360}, {x:180, y:360}, {x:260, y:360}, {x:460, y:420}, {x:540, y:420},
  {x:620, y:420}, {x:20, y:460}, {x:100, y:460}, {x:180, y:460}, {x:500, y:520},
  {x:580, y:520}, {x:660, y:520}, {x:740, y:520}, {x:820, y:520}];
// horizontal walls
let wallLocationsH = [{x:0, y:0}, {x:0, y:80}, {x:0, y:160}, {x:0, y:240}, {x:0, y:320}, 
  {x:0, y:400}, {x:0, y:480}, {x:0, y:560}, {x:0, y:640}, {x:975, y:0}, 
  {x:975, y:80}, {x:975, y:160}, {x:975, y:240}, {x:975, y:320}, {x:975, y:400}, 
  {x:975, y:480}, {x:975, y:560}, {x:975, y:640},
  {x:180, y:120}, {x:180, y:200}, {x:420, y:100}, {x:420, y:180}, {x:680, y:220}, 
  {x:680, y:100}, {x:680, y:180}, {x:680, y:240}, {x:780, y:100}, {x:880, y:100}, 
  {x:880, y:180}, {x:880, y:240}, {x:880, y:320}, {x:340, y:460}, {x:340, y:540}, 
  {x:780, y:360}, {x:780, y:440}];

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
  topEdge = 0;
}

function hideStreets() {
  streets.visible = false;
  player.scale.set(0.2,0.2);  
  dog1.scale.set(1,1);
  for(let i=0; i < (numWallsV + numWallsH); i++) {
    walls[i].visible = false;
  }
}