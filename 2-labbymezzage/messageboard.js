"use strict";

var MessageBoard = 
{
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
    
    
    var input = MessageBoard.messages.length-1;
    
    
    MessageBoard.renderMessage(input);
    },
    
    renderMessage:function(input)
    {
        
        var text = document.createElement("h7");
        text.innerHTML = MessageBoard.messages[input].getHTMLText();
        messagearea.appendChild(text);
    
        var time = document.createElement("p");
        time.innerHTML = MessageBoard.messages[input].getDateText();
        messagearea.appendChild(time);
        
        var clock = document.createElement('img');
        clock.src = 'CLOCK.jpg';
        clock.id = 'clock';
        messagearea.appendChild(clock);
        
        var dustbin = document.createElement('img');
        dustbin.src = 'dustbin.jpg';
        dustbin.id = 'dustbin';
        messagearea.appendChild(dustbin);
        
       dustbin.onclick = function(e)
       {
           if (confirm("Är du säker på att du vill radera meddelandet?"))
           {
           MessageBoard.numberOfMessages = MessageBoard.numberOfMessages -1;
           text.parentNode.removeChild(text);
           clock.parentNode.removeChild(clock);
           dustbin.parentNode.removeChild(dustbin);
           time.parentNode.removeChild(time);
           MessageBoard.amountOfMessages -= 1;
           document.getElementById("numberOfMessages").innerHTML = "Antal meddelanden: " + MessageBoard.amountOfMessages;
           }
       },
       
       clock.onclick = function(e)
       {
           alert(MessageBoard.messages[input].getDate());
       };
       
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


