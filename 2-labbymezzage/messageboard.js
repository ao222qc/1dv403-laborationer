"use strict";

var MessageBoard = {
    
    messages: [],
    amountOfMessages: 0,
    init:function()
    {
        
        var button = document.getElementById("button");
      
        button.onclick = MessageBoard.sendMessage;
        
        
        
              var entersend = document.getElementById("textarea");
        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey)
                {
                e.preventDefault();
                MessageBoard.sendMessage();
                }
        };
       
    },
    sendMessage:function()
    {
    var textInput = document.getElementById("textarea").value;
    
    MessageBoard.messages.push(new Message(textInput, new Date()));
    
    
    
    MessageBoard.amountOfMessages++;
    
    document.getElementById("numberOfMessages").innerHTML = "Antal Meddelanden: " + MessageBoard.amountOfMessages;
    
    //document.getElementById("timearea").innerHTML = MessageBoard.messages[input].getDateText();
    
    var input = MessageBoard.messages.length-1;
    
     //document.getElementById("area").innerHTML = MessageBoard.messages[input].getDateText();
    
    MessageBoard.renderMessage(input);
    },
    
    renderMessage:function(input)
    {
        
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[input].getHTMLText();
        messagearea.appendChild(text);
    
        var time = document.createElement("p");
        time.innerHTML = MessageBoard.messages[input].getDateText();
        timearea.appendChild(time);
       
       
    },
    
    renderMessages:function()
    {
        for (var i = 0; i > MessageBoard.messages.length; i++) 
        {
         MessageBoard.renderMessage(i);
        }
        
    }
    
    
    
    
};




window.onload = MessageBoard.init;


//var value = document.getElementById("textarea").value;
//document.getElementById("button").onclick = function(){ 
  //  alert("HEJ");
    
//};
/*   var text2 = document.createElement("p");
        text.innerHTML = MessageBoard.messages[input].getDateText();
        timearea.appendChild(text2);*/