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
    color = ["DarkGreen","DarkSeaGreen","DarkOliveGreen","ForestGreen","DarkRed"];
    ranColor = color[Math.floor(Math.random()*color.length-1)];
    
    createPlatform(550,650, 100 , 15, color[Math.floor(Math.random()*color.length)]);
    createPlatform(550,515, 100 , 15, color[Math.floor(Math.random()*color.length)]);
    createPlatform(600,200, 100 , 540, color[Math.floor(Math.random()*color.length)]);
    createPlatform(300,400, 100 , 20, color[Math.floor(Math.random()*color.length)]);
    createPlatform(300,265, 100 , 20, color[Math.floor(Math.random()*color.length)]);
    createPlatform(300,100, 90, 320, color[Math.floor(Math.random()*color.length)]);
    createPlatform(800,200, 90, 20, color[Math.floor(Math.random()*color.length)], 800, 1300, 1);

    createPlatform(100, 175, 100, 10, "lightblue");
    createPlatform(100, 100, 100, 10, "lightblue");
    createPlatform(100, 175, 10, -75, "lightblue");
    createPlatform(190, 100, 10, 75, "lightblue");

    // TODO 3 - Create Collectables
    createCollectable("database",625, 150, 0.1 , 1);
    createCollectable("diamond",130, 110, 0.1 , 1.01);
    createCollectable("database", 150, 300, 0.1, 1);


    
    // TODO 4 - Create Cannons
    createCannon("right", 300, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
