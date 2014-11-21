"use strict";

var MessageBoard = {
    
    messages: [],
    amountOfMessages: 0,
    init:function()
    {
        var button = document.getElementById("button");
      
        button.onclick = MessageBoard.sendMessage;
       
    },
    sendMessage:function()
    {
    var textInput = document.getElementById("textarea").value;
    
    MessageBoard.messages.push(new Message(textInput, new Date()));
    
    //alert(MessageBoard.messages[MessageBoard.amountOfMessages]);
   
    MessageBoard.amountOfMessages++;
    var input = MessageBoard.messages.length-1;
    
    MessageBoard.renderMessage(input);
    },
    
    renderMessage:function(input)
    {
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[input].getHTMLText();
        messagearea.appendChild(text);
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