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

  init:function() 
  {
      Memory.createGame();
  },
  createGame:function()
  {   
    for (var i = 0; i < Memory.board.length; i++)
    {
       Memory.atag = document.createElement("a");
       Memory.atag.href ="#href";
       Memory.image = document.createElement("img");
       Memory.image.src = Memory.defaultImage;
       Memory.image.bool = false;
       Memory.image.points = 0;
       Memory.image.newImage = "../pics/"+Memory.board[i]+".png";
       Memory.atag.addEventListener("click", function(e){
         Memory.memClick(e);
       });
       
       Memory.atag.appendChild(Memory.image);
       Memory.memoryT.appendChild(Memory.atag);
    }
  },
  memClick:function(e){
    var image;
  if(this == e.target){
    image = e.target.childNodes[0];
  }
  else{
    image = e.target;
  }
  
  Memory.tryCount += 1;
  Memory.clickCount += 1;
  image.src = image.newImage;
  image.bool = true;
  
  if (image.bool === true)
  {
    image.removeEventListener("click", Memory.memClick);
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
      
      },800);
    }
    Memory.clickCount = 0;
  }
  Memory.lastClicked = this;
},

};

window.onload = Memory.init;

