  function keyboardStart(){
          // KEYBOARD FOR MOVEMENT
			//Capture the keyboard arrow keys
      let left = keyboardHelper(37),
          up = keyboardHelper(38),
          right = keyboardHelper(39),
          down = keyboardHelper(40),
          close = keyboardHelper(88),
          resA = keyboardHelper(65),
          resB = keyboardHelper(66),
          resC = keyboardHelper(67),
          goback = keyboardHelper(90),
          yes = keyboardHelper(89),
          no = keyboardHelper(78);

      // Close menu
      close.press = () => {
        menu.visible = false;
      };

      // Rescue options
      resA.press = () => {
        if (vanMenu.visible == true){
          vanMenu.visible = false;
          player.visible = false;
          currLocation = 'streets';
          $.ajax({
            data : 'something',
            url  : 'something',
            complete : moveVan() // called when AJAX transaction finishes
          });            
        }
      }
      resB.press = () => {
        if (vanMenu.visible == true){
          vanMenu.visible = false;
          player.visible = false;
          currLocation = 'dirt';
          $.ajax({
            data : 'something',
            url  : 'something',
            complete : moveVan() // called when AJAX transaction finishes
          });            
        }
      }
      resC.press = () => {
        if (vanMenu.visible == true){
          vanMenu.visible = false;
          player.visible = false;
          currLocation = 'city';
          $.ajax({
            data : 'something',
            url  : 'something',
            complete : moveVan() // called when AJAX transaction finishes
          });            
        }
      }
      
      // Go back to main screen
      goback.press = () => {
        goBack();        
      }

      // Player choose yes
      yes.press = () => {        
        if (cageMenu.visible){          
          caught = true;    
        } else if (vetMenu.visible) {
          atVet();
        } else if (adoptMenu.visible) {
          atAdopt();
        }
        closeAllMenus();
      }

      // Player choose no
      no.press = () => {      
        closeAllMenus();
      }

      //Left arrow key `press` method
      left.press = () => {
        //Change the player's velocity when the key is pressed
        player.vx = -5;
        player.vy = 0;
      };      
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the player isn't moving vertically so  stop the player
        if (!right.isDown && player.vy === 0) {
          player.vx = 0;
        }
      };

      //Up
      up.press = () => {
        player.vy = -5;
        player.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && player.vx === 0) {
          player.vy = 0;
        }
      };

      //Right
      right.press = () => {
        player.vx = 5;
        player.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && player.vy === 0) {
          player.vx = 0;
        }
      };

      //Down
      down.press = () => {
        player.vy = 5;
        player.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && player.vx === 0) {
          player.vy = 0;
        }
      };
  }
  
  
  //The `keyboard` helper function
  function keyboardHelper(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };
    //Attach event listeners
    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
  }