function addDirt() {
  dirt = new PIXI.Sprite(PIXI.loader.resources["citydirt.png"].texture);
  app.stage.addChild(dirt); 
  dirt.visible = false;
}