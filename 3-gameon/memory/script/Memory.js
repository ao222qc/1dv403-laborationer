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
       Memory.atag.addEventListener("click", Memory.memClick);
       
       Memory.atag.appendChild(Memory.image);
       Memory.memoryT.appendChild(Memory.atag);
    }
  },
  memClick:function(e){
    var image;
//console.log(this);

  if(this == e.target)
  { 
    image = e.target.childNodes[0];
  }
  else
  {
    image = e.target;
  }
  console.log(e.target);
  //image = e.currentTarget.childNodes[0];
  
  //console.log(image);
  Memory.tryCount += 1;
  Memory.clickCount += 1;
  image.src = image.newImage;
  image.bool = true;
  
  if (image.bool === true)
  {
    e.currentTarget.removeEventListener("click", Memory.memClick);
    e.currentTarget.onclick = false;
  }
 
  if (Memory.clickCount == 2)
  {
    var self = image;
    var last = Memory.lastClicked;
    
    last.parentNode.addEventListener("click", Memory.memClick);
    last.parentNode.onclick = true;
    e.currentTarget.addEventListener("click", Memory.memClick);
    e.currentTarget.onclick = true;
    
    if (self.newImage === last.newImage)
    {
      var lastclick = last;
      self.parentNode.removeEventListener("click", Memory.memClick);
      lastclick.parentNode.removeEventListener("click", Memory.memClick);
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
  Memory.lastClicked = image;
},

};

window.onload = Memory.init;

