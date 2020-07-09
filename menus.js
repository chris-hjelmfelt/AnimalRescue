let vanMenu, cageMenu, vetMenu, adoptMenu;
let timerBarsBase = [];
let timerBarsRed = [];
let numTimers = 3;
let numPieces = 38;
function addMenus() {
  //Create and add the Van Menu sprite
  let menusprite1 = new PIXI.Texture(loader.resources["menu.png"].texture, new PIXI.Rectangle(0, 0, 600, 400));
  vanMenu = new Sprite(menusprite1)
  vanMenu.scale.set(1,1);
  vanMenu.x = 100;
  vanMenu.y = 150;
  vanMenu.visible = false;     
  app.stage.addChild(vanMenu);

  //Create the Cage Menu sprite
  let menusprite2 = new PIXI.Texture(loader.resources["menu.png"].texture, new PIXI.Rectangle(800, 0, 400, 310));
  cageMenu = new Sprite(menusprite2)
  cageMenu.scale.set(1,1);
  cageMenu.x = 200;
  cageMenu.y = 300;
  cageMenu.visible = false;     
  app.stage.addChild(cageMenu);

  //Create the Vet Menu sprite
  let menusprite3 = new PIXI.Texture(loader.resources["menu.png"].texture, new PIXI.Rectangle(798, 503, 400, 200));
  vetMenu = new Sprite(menusprite3)
  vetMenu.scale.set(0.5,0.5);
  vetMenu.x = 795;
  vetMenu.y = 160;
  vetMenu.visible = false;     
  app.stage.addChild(vetMenu);

  //Create the Adopt Menu sprite
  let menusprite4 = new PIXI.Texture(loader.resources["menu.png"].texture, new PIXI.Rectangle(0, 600, 400, 200));
  adoptMenu = new Sprite(menusprite4)
  adoptMenu.scale.set(0.5,0.5);
  adoptMenu.x = 10;
  adoptMenu.y = 450;
  adoptMenu.visible = false;     
  app.stage.addChild(adoptMenu);

  // Add the white base for the timer bars
  let menusprite5 = new PIXI.Texture(loader.resources["menu.png"].texture, new PIXI.Rectangle(825, 755, 370, 40)); 
  for (let i=0; i < numTimers; i++) { 
    timerBarsBase.push(new Sprite(menusprite5));
    timerBarsBase[i].scale.set(0.4,0.5);
    timerBarsBase[i].visible = false;
    app.stage.addChild(timerBarsBase[i]); 
  }
  // set the locations
  timerBarsBase[0].x = 810; // vet
  timerBarsBase[0].y = 350;
  timerBarsBase[1].x = 60;  // adopt 1
  timerBarsBase[1].y = 445;
  timerBarsBase[2].x = 60;
  timerBarsBase[2].y = 610; // adopt 2
 
  // Add the red progress bar 
  let menusprite6 = new PIXI.Texture(loader.resources["menu.png"].texture, new PIXI.Rectangle(825, 715, 370, 40)); 
  for (let i=0; i < numTimers; i++) { 
    timerBarsRed.push(new Sprite(menusprite6));
    timerBarsRed[i].scale.set(0.4,0.5);
    timerBarsRed[i].visible = false;
    app.stage.addChild(timerBarsRed[i]); 
  }
  // set the locations
  timerBarsRed[0].x = 810; // vet
  timerBarsRed[0].y = 350;
  timerBarsRed[1].x = 60;  // adopt 1
  timerBarsRed[1].y = 445;
  timerBarsRed[2].x = 60;
  timerBarsRed[2].y = 610; // adopt 2

} // end of addMenus()
 

function closeAllMenus() {
  vanMenu.visible = false;
  cageMenu.visible = false;
  vetMenu.visible = false;
  adoptMenu.visible = false;  
}


function closeTimerBars() {
  for(let i=0; i<numTimers; i++) {
    timerBarsBase[i].visible = false;
  }
  for(let i=0; i<numTimers; i++) {
    timerBarsRed[i].visible = false;
  }
}


function timerProgression(whichTimer, piece) {  
  if (piece >= numPieces) {
    completeAction(whichTimer);
    setTimeout( () => {closeTimerBars()}, 1000);    
  } else {
    timerBarsRed[whichTimer].width = 0 + piece * 4;  
  }
}