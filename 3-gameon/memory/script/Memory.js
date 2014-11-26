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
    board =  RandomGenerator.getPictureArray(4,2);
    Memory.displayGame(board);

   
  },
  
  displayGame:function(board)
  {
    var memoryT = document.getElementById("memoryTable");
     
    var imageArray = ["../pics/0.png","../pics/0.png","../pics/1.png","../pics/1.png","../pics/2.png","../pics/2.png","../pics/3.png","../pics/3.png"];
    
    for (var i = 0; i <= board.length; i++)
    {
       board[i] = imageArray[i];
       
       var bla = document.createElement("img");
       bla.src = board[i];
       memoryT.appendChild(bla);
    }
   var bla = document.createElement("img");
   bla.src = imageArray[0];
   memoryT.appendChild(bla);
    
  }
  
  
    
};

window.onload = Memory.init;