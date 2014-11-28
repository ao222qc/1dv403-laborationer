"use strict";

var Memory =
{
clickCount:0,
tryCount:0,
lastClicked:null,
defaultImage:"../pics/0.png",

  init:function()
  {
      Memory.createGame();
  },
  
  createGame:function()
  {   
    var board = [];
    board = RandomGenerator.getPictureArray(4,4);
    
    var memoryT = document.getElementById("memoryTable");

    var atag = document.createElement("a");
    atag.href = "#href";
    var image;
    
    for (var i = 0; i < board.length; i++)
    {
       image = document.createElement("img");
       image.src = Memory.defaultImage;
       image.bool = false;
       image.newImage = "../pics/"+board[i]+".png";
       atag.appendChild(image);
       image.addEventListener("click",Memory.memClick);
    }
       memoryT.appendChild(atag);
  },

  memClick:function()
{
  Memory.tryCount += 1;
  Memory.clickCount += 1;
  this.src = this.newImage;
  
  if (Memory.clickCount == 2)
  {
    var self = this;
    var last = Memory.lastClicked;
    
    if (self.newImage === last.newImage)
    {
      var lastclick = last;
      self.removeEventListener("click", Memory.memClick);
      lastclick.removeEventListener("click", Memory.memClick);
      self.onclick = null;
      lastclick.onclick = null;
    }
      else
    {
       setTimeout(function()
       {
        last.src = Memory.defaultImage;
        self.src = Memory.defaultImage;
      
      },1200);
    }
    Memory.clickCount = 0;
  }
  
  Memory.lastClicked = this;
  
},

};

window.onload = Memory.init;

