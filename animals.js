function addAnimals() {
  //USE A TILESET			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  //let texture1 = new PIXI.Texture(loader.resources["tileset.png"].texture, new PIXI.Rectangle(128, 0, 64, 64));

  // Create an Animal sprite
  let texture1 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(0, 0, 64, 64));
  dog1 = new Sprite(texture1);

  //Position the Animal sprite and add to stage
  dog1.x = 365;
  dog1.y = 100;	
  app.stage.addChild(dog1);

  // Create an Animal sprite
  let texture2 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(64, 0, 64, 64));
  cat = new Sprite(texture2);

  //Position the Animal sprite and add to stage
  cat.x = 860;
  cat.y = 290;	
  app.stage.addChild(cat);

}