"use strict";
var initiate = {
    
    init:function(){
        
        document.getElementById("button").addEventListener("click", function(){
            
            var xhr = new XMLHttpRequest();
            
            xhr.onreadystatechange = function(){
                
                if(xhr.readyState === 4 && xhr.status === 200){
                    var question = JSON.parse(xhr.responseText);
                    document.getElementById("question").innerHTML = question.question;
                    
                }
                
                document.getElementById("sendbutton").addEventListener("click", function(){
                    
                
                    
                if(xhr.readyState === 4 && xhr.status === 200){    
                var answer = document.getElementById("textarea").value;
                console.log(answer);
                
                xhr.open('post', "http://vhost3.lnu.se:20080/answer/1", true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                
                
                
                var product = {
                "answer": answer,
                
                };
                
                xhr.send(JSON.stringify(product)); 
                }
                    
                });
                
            };
            
            xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
            xhr.send(null);
            
        });
        
    }
    
};
window.onload = initiate.init;