function addMenus() {
  //Create and add the Menu sprite
  menu = new PIXI.Sprite(PIXI.loader.resources["menu.png"].texture); 
  menu.scale.set(1,1);
  menu.x = 100;
  menu.y = 150;
  menu.visible = false;  
  // Add Menu last so it's on top      
  app.stage.addChild(menu);
}