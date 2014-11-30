"use strict";

var Memory =
{
clickCount:0,
tryCount:0,
lastClicked:null,
defaultImage:"../pics/0.png",
board:RandomGenerator.getPictureArray(4,4),
memoryT:document.getElementById("memoryTable"),
atag:null,
image:null,

  init:function() //Kallar på init windowonload, en onödig function men ser ju snygg ut iaf.
  {
      Memory.createGame();
  },
  
  createGame:function()
  {   
    //Memory.atag.href = "#href";
    
    for (var i = 0; i < Memory.board.length; i++)
    {
       Memory.atag = document.createElement("a");
       Memory.atag.href ="#href";
       Memory.image = document.createElement("img");
       Memory.image.src = Memory.defaultImage;
       Memory.image.bool = false;
       Memory.image.points = 0;
       Memory.image.newImage = "../pics/"+Memory.board[i]+".png";
       Memory.atag.appendChild(Memory.image);
       Memory.image.addEventListener("click",Memory.memClick);
       Memory.memoryT.appendChild(Memory.atag);

    }
       
  },

  memClick:function()
{
  Memory.tryCount += 1;
  Memory.clickCount += 1;
  this.src = this.newImage;
  this.bool = true;
  
  if (this.bool === true)
  {
    this.removeEventListener("click", Memory.memClick);
    this.onclick = null;
  }
 
  if (Memory.clickCount == 2)
  {
    var self = this;
    var last = Memory.lastClicked;
    
    self.addEventListener("click", Memory.memClick);
    self.onclick = true;
    last.addEventListener("click", Memory.memClick);
    last.onclick = true;
    
    if (self.newImage === last.newImage)
    {
      var lastclick = last;
      self.removeEventListener("click", Memory.memClick);
      lastclick.removeEventListener("click", Memory.memClick);
      self.onclick = null;
      lastclick.onclick = null;
      Memory.image.points++;
      
      if(Memory.image.points == 8)
      {
        var resultPost = document.getElementById("resultDiv");
        
        resultPost.innerHTML = ("Grattis! Det tog dig "+Memory.tryCount+" klick att klara av det!");
        
        
      }
    }
      else
    {
       setTimeout(function()
       {
        last.src = Memory.defaultImage;
        self.src = Memory.defaultImage;
      
      },1000);
    }
    Memory.clickCount = 0;
  }
  Memory.lastClicked = this;
},
};

window.onload = Memory.init;

