let facility, message, pointsValue, vet, adopt, van;
let numCages = 7;

function addFacility() {
  //Create the Facility sprite
  facility = new PIXI.Sprite(PIXI.loader.resources["facility.jpg"].texture);     
  facility.width = 1000;
  facility.height = 650; 
  //Add the sprite to the stage
  app.stage.addChild(facility);    

  // A place to display messages
  message = new PIXI.Text('');
  app.stage.addChild(message);
  message.position.set(500, 10);
  message.style = {fill: "black", font: "16px PetMe64"};

  // Display Current Points
  let pointsTitle = new PIXI.Text('Points: ');
  app.stage.addChild(pointsTitle);
  pointsTitle.position.set(800, 600);
  pointsTitle.style = {fill: "black", font: "16px PetMe64"};

  // Display Current Points
  pointsValue = new PIXI.Text('0');
  app.stage.addChild(pointsValue);
  pointsValue.position.set(920, 600);
  pointsValue.style = {fill: "black", font: "16px PetMe64"};

  // Create the Vet Sprite
  let vetsprite = new PIXI.Texture(loader.resources["facility.jpg"].texture, new PIXI.Rectangle(805, 95, 215, 200));
  vet = new Sprite(vetsprite);
  vet.scale.set(1,1);
  vet.x = 780;
  vet.y = 95;  
  app.stage.addChild(vet);

  // Create the Adoption Sprite
  let adoptsprite = new PIXI.Texture(loader.resources["facility.jpg"].texture, new PIXI.Rectangle(5, 460, 245, 230));
  adopt = new Sprite(adoptsprite);
  adopt.scale.set(1,1);
  adopt.x = 5;
  adopt.y = 410;  
  app.stage.addChild(adopt);

  // Create the Van sprite
  van = new PIXI.Sprite(PIXI.loader.resources["van.png"].texture); 
  app.stage.addChild(van);
  van.scale.set(0.3,0.3);
  van.x = 18;
  van.y = 240;    

  // Create the Cage sprite
  let cagesprite = new PIXI.Texture(loader.resources["wallsprites.png"].texture, new PIXI.Rectangle(0, 0, 25, 25));
  for(let i=0; i < numCages; i++) {
    cages.push(new Sprite(cagesprite));
    cages[i].scale.set(2.9,2.9);
    cages[i].x = 275 + i*71;
    cages[i].y = 80;
    app.stage.addChild(cages[i]); 
  } 
}  // end of addFacility()

function showFacility(){
  facility.visible = true;
  player.visible = true;
  van.visible = true;
  vet.visible = true;
  cat.visible = true;
  turtle.visible = true;
  puppies.visible = true;
  for(let j=0; j< 10; j++) {
    if (animals[j].Name != 'none') {
      animals[j].Sprite.visible = true;
      animals[j].Sprite.scale.set(1,1);
    }
  }
  for(let i=0; i < numCages; i++) {
    cages[i].visible = true;
  }
  topEdge = 80;  
}

function hideFacility() {
  facility.visible = false;
  van.visible = false;
  vet.visible = false;
  cat.visible = false;
  turtle.visible = false;
  puppies.visible = false;
  for(let j=0; j< 10; j++) {
    animals[j].Sprite.visible = false;
  }
  for(let i=0; i < numCages; i++) {
    cages[i].visible = false;
  }
}

function goBack() {
  closeAllMenus();
  hideStreets();
  showFacility();  
  dirt.visible = false;
  city.visible = false;  
  player.x = 600;
  player.y = 300;
}

function atVet() {
  message.text = 'checkup time';
  timerBarsBase[0].visible = true;  
  timerBarsRed[0].width = 0;
  timerBarsRed[0].visible = true;
  for(let i=0; i < (numPieces + 1); i++) {
    let k = i
    setTimeout( () => {timerProgression(0, i)}, 100 * (k+1));  
  }  
}

function atAdopt() {
  currAdopt = 1;
  message.text = 'get a new home';  
  timerBarsBase[2].visible = true;
  timerBarsRed[2].width = 0;
  timerBarsRed[2].visible = true;
  for(let i=0; i < (numPieces + 1); i++) {
    let k = i
    setTimeout( () => {timerProgression(2, i)}, 100 * (k+1));    // timerProgression takes the number for which timer ti is, and the current interation
  }  
}


function completeAction(whichTimer) {
  if (whichTimer == 0) {  // vet
    animals[currAnimal].Vet = true;
  } else if (whichTimer == 2) {  // adopt
    animals[currAdopt].Name = 'none';
    animals[currAdopt].Sprite.visible = false;
    points += 1;
    console.log(points);
  }  
}