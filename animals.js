let lastDir = 2; // last direction the animal was traveling (don't change directions constantly)
let caught = false;
let currCage = 0;
let currAdopt = 1;
let currAnimal = -1;
let animals = [];
let dogs = [];
let newDog;
let nullSprite;


function addAnimals() {
  //USE A TILESET			
  //Create the `tileset` sprite from the texture and
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  //let texture1 = new PIXI.Texture(loader.resources["tileset.png"].texture, new PIXI.Rectangle(128, 0, 64, 64));

  // Create Dog sprite
  let animalsprite = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(0, 0, 64, 64));
  for(let i=0; i < 10; i++) {
    dogs.push(new Sprite(animalsprite));
    //Position the Dog sprite and add to stage
    dogs[i].x = 350;
    dogs[i].y = 86;	
    app.stage.addChild(dogs[i]);
    dogs[i].visible = false;
  }

  let cagesprite = new PIXI.Texture(loader.resources["wallsprites.png"].texture, new PIXI.Rectangle(0, 0, 25, 25));
  for(let i=0; i < numCages; i++) {
    cages.push(new Sprite(cagesprite));
    cages[i].scale.set(2.9,2.9);
    cages[i].x = 275 + i*71;
    cages[i].y = 80;
    app.stage.addChild(cages[i]); 
  } 


  // Create Cat sprite
  let animal2 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(64, 0, 64, 64));
  cat = new Sprite(animal2);
  cat.x = 115;
  cat.y = 545;	
  app.stage.addChild(cat);

  // Create Turtle sprite
  let animal3 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(128, 0, 64, 64));
  turtle = new Sprite(animal3);
  turtle.x = 705;
  turtle.y = 85;	
  app.stage.addChild(turtle);

  // Create Box of Puppies sprite
  let animal4 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(0, 84, 64, 44)); 
  puppies = new Sprite(animal4);
  puppies.x = 850;
  puppies.y = 150;	
  app.stage.addChild(puppies);

  // Create a Null sprite for initializing things
  let animal5 = new PIXI.Texture(loader.resources["animalsprites.png"].texture, new PIXI.Rectangle(0, 120, 6, 6)); 
  nullSprite = new Sprite(animal5);
  nullSprite.x = 850;
  nullSprite.y = 150;	
  app.stage.addChild(nullSprite);
  nullSprite.visible = false;

  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));
  animals.push(new animalStats('none',false,1,nullSprite));  
  animals.push(new animalStats('none',false,1,nullSprite));
}


function animalStats(name, vet, adopt, sprite) {
  this.Name=name;
  this.Vet=vet;
  this.AdoptDiff=adopt;
  this.Sprite=sprite;
}


function moveAnimal(animal) {
  let moveDir = Math.floor(Math.random()*100 + 1);
  let newX = 0, newY = 0;
  if (!caught) {
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
    if (animal.x > 950)			
      animal.x = 950;
    if (animal.y > 600)  
      animal.y = 600;
    if (animal.x < 0)			
      animal.x = 0;
    if (animal.y < topEdge)  
      animal.y = topEdge;
  }
} // End of moveAnimal()


function findNewDog() {  
  newDog = -1;
  for(let i=0; i< 10; i++) {
    freeDog = true;
    for(let j=0; j< 11; j++) {
      if (j<10 && (dogs[i] == animals[j].Sprite)) {
        freeDog = false;
      } else if (j >=10 && freeDog == true) {
        newDog = i;
        return;
      }        
    }  
  }    
}


function addToAnimals(){
  for (let i = 0; i < 10; i++){
    if (animals[i].Name == 'none'){
      animals[i].Name = pickName();
      animals[i].Vet = false;
      animals[i].AdoptDiff = 2;
      animals[i].Sprite = dogs[newDog];
      animals[i].Sprite.scale.set(0.7,0.7);
      animals[i].Sprite.visible = true;      
      dogs[newDog].visible = false;
      $.ajax({ data : 'x', url  : 'x',  
      complete : findNewDog()// get another one ready for next time 
      }); 
      return i;
    }
  }  
}


function putInCage() {
  animals[currAnimal].x = cages[currCage].x + 5;
  animals[currAnimal].y = cages[currCage].y + 8;   
}


function pickName() {
  return 'Buster'
}


function findAnimal() {
  for( let i = 0; i < 10; i++){
    if (cages[currCage].x + 5 == animals[i].Sprite.x){
      return i
    } else { return -1 }
  }
}

function numOfAnimals() {
  let aCount = 0;
  for (let i = 0; i < 10; i++){
    if (animals[i].Name != 'none'){
      aCount += 1;
    }
  }
  return aCount;
}