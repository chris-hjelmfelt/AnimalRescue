function addFacility() {
  //Create the Facility sprite
  facility = new PIXI.Sprite(PIXI.loader.resources["facility.jpg"].texture);     
  facility.width = 1000;
  facility.height = 650; 
  //Add the sprite to the stage
  app.stage.addChild(facility);    

  // A place to display messages
  message = new PIXI.Text("Hello Pixi!");
  app.stage.addChild(message);
  message.position.set(500, 10);
  message.style = {fill: "black", font: "16px PetMe64"};

  //Create and add the Van sprite
  van = new PIXI.Sprite(PIXI.loader.resources["van.png"].texture); 
  app.stage.addChild(van);
  van.scale.set(0.3,0.3);
  van.x = 18;
  van.y = 240;    
}

function showFacility(){
  facility.visible = true;
  player.visible = true;
  van.visible = true;
  dog1.visible = true;
  cat.visible = true;
  turtle.visible = true;
  topEdge = 90;
}

function hideFacility() {
  facility.visible = false;
  van.visible = false;
  dog1.visible = false;
  cat.visible = false;
  turtle.visible = false;
}