let lastDir = 2; // last direction the animal was traveling (don't change directions constantly)

function addAnimals() {
  //USE A TILESET			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  //let texture1 = new PIXI.Texture(loader.resources["tileset.png"].texture, new PIXI.Rectangle(128, 0, 64, 64));

  // Create Dog sprite
  let animal1 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(0, 0, 64, 64));
  dog1 = new Sprite(animal1);

  //Position the Dog sprite and add to stage
  dog1.x = 365;
  dog1.y = 100;	
  app.stage.addChild(dog1);

  // Create Cat sprite
  let animal2 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(64, 0, 64, 64));
  cat = new Sprite(animal2);
  cat.x = 860;
  cat.y = 290;	
  app.stage.addChild(cat);

  // Create Turtle sprite
  let animal3 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(128, 0, 64, 64));
  turtle = new Sprite(animal3);
  turtle.x = 730;
  turtle.y = 100;	
  app.stage.addChild(turtle);

}

function moveAnimal(animal) {
  let moveDir = Math.floor(Math.random()*100 + 1);
  let newX = 0, newY = 0;

  // give preference to the direction traveled last
  if (moveDir > 4){
    moveDir = lastDir;
  }

  // place to move to next
  if (moveDir == 1) {
    newY = -5;
    lastDir = 1;
  } else if (moveDir == 2) {
    newX = 5;
    lastDir = 2;
  } else if (moveDir == 3) {
    newY = 5;
    lastDir = 3;
  } else if (moveDir == 4){
    newX = -5;
    lastDir = 4;
  }

  // check for wall obstactles before moving
  let collided = wallColisions(animal);
        
  // move if clear or back up slightly if collided with a wall
  if (collided == false) {
    animal.x += newX;
    animal.y += newY;
  } else {   
    // change course
    let changeCourse = Math.floor(Math.random()*3 + 1);
    if (moveDir == 1) { // north
      animal.y += 5; // reverse      
      lastDir = changeCourse + 1; 
    } else if (moveDir == 2) { // east
      animal.x -= 5; // reverse
      lastDir = changeCourse + 2; 
      if (lastDir > 4) lastDir = 1;
    } else if (moveDir == 3) { // south
      animal.y -= 5; // reverse
      lastDir = changeCourse - 2; // maybe move south
      if (lastDir < 1) lastDir = 4;
    } else if (moveDir == 4) { // west
      animal.x += 5; // reverse
      lastDir = changeCourse;  
    }
  }

  // stop animal at edges of game
  if (animal.x > 970)			
    animal.x = 970;
  if (animal.y > 640)  
    animal.y = 640;
  if (animal.x < 0)			
    animal.x = 0;
  if (animal.y < 90)  
    animal.y = 90;
  }