$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(50,300,100,90);
    createPlatform(1000,200,90,30,"yellow");
    createPlatform(300,300,100,40,"yellow");
    createPlatform(600,500,100,40);
    createPlatform(450,400,20,2000);
    createPlatform(800,500,100,40);
    createPlatform(1200,450,100,40);
    createPlatform(1000,400,100,40);
    createPlatform(800,300,100,40);
    createPlatform(1250,300,100,40,"yellow");




    // TODO 3 - Create Collectables
    createCollectable("kennedi", 300, 300, 0.6, 0.8);
    createCollectable("max", 300, 200, 0.6, 0,8);
    createCollectable("diamond", 1000, 100, 0.8, 0.9);
    createCollectable("steve", 1250, 100, 0.8, 0.9);



    
    // TODO 4 - Create Cannons
    createCannon("top",200,1000);
    createCannon("bottom", 550, 1000);
    createCannon("right", 100, 1000);
    createCannon("bottom",1150,1000);
    createCannon("top", 500, 1000);
    createCannon("right", 300, 1000);
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
