function addCity() {
  city = new PIXI.Sprite(PIXI.loader.resources["city2.png"].texture);
  app.stage.addChild(city); 
  city.visible = false;
}