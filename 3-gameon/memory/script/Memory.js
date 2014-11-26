"use strict";

var Memory =
{
  init:function()
  {
      Memory.createGame();
  },
  
  createGame:function()
  {   
    var board = [];
    board =  RandomGenerator.getPictureArray(4,4);
    Memory.displayGame(board);

   
  },
  
  displayGame:function(board)
  {
    var memoryT = document.getElementById("memoryTable");
    var tile = document.createElement("div");
    tile.id = "tile";
     
    var imageArray = ["../pics/0.png","../pics/1.png","../pics/2.png","../pics/3.png","../pics/4.png","../pics/5.png","../pics/6.png", "../pics/7.png", "../pics/8.png"];
    //var bla = document.createElement("img");
    
    for (var i = 0; i < board.length; i++)
    {
       var image = document.createElement("img");
       image.src = imageArray[board[i]];
       tile.appendChild(image);
    }
    
    memoryT.appendChild(tile);
  }
  
  
    
};

window.onload = Memory.init;