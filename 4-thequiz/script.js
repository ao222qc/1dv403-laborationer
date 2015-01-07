"use strict";

var quiz =
{
    requesting:new XMLHttpRequest(),
    numberOfTries:0,
    currentQuestion:null,
    results:[],
    triesPerQuestion:null,
    i:0,

    init:function()

    {
        document.getElementById("button").onclick = function()
        {quiz.question("http://vhost3.lnu.se:20080/question/1");};
    },

    question:function(url)
    {
        var getRequest = quiz.request(url, null);

        getRequest.onreadystatechange = function()
        {
            if (getRequest.readyState === 4 && getRequest.status === 200)
            {
                var responseT = JSON.parse(getRequest.responseText);
                quiz.currentQuestion = responseT.question;

                document.getElementById("question").innerHTML = responseT.question;
                quiz.answer(responseT.nextURL);
            }
            if (getRequest.status === 404 && getRequest.readyState === 4)
            {
                var end = confirm("Bra jobbat! Tryck 'OK' för spännande statistik.");

                var presentResult =  document.getElementById("results");

                if(end === true)
                {
                    for (var i = 1; i < quiz.results.length; i++) {
                        var result = document.createElement("p");
                        result.innerHTML = quiz.results[i];
                        presentResult.appendChild(result);
                    }
                }
                else
                {
                    presentResult.innerHTML = "Tråkigt att du skäms så över dina resultat.";
                }
            }
        };
    },

        request:function(url, whatToSend)
        {
            if(whatToSend != null)
            {
                quiz.requesting.open("POST", url, true);
                quiz.requesting.setRequestHeader("Content-Type", "application/json");
            }
            else
            {
                quiz.requesting.open("GET", url, true);
            }
            quiz.requesting.send(whatToSend);
            return quiz.requesting;
        },

    answer:function(url)
    {
        document.getElementById("sendbutton").onclick = function()
        {
            quiz.i += 1;
            quiz.numberOfTries += 1;
            var tryperquestion = "Fråga: '" + quiz.currentQuestion + "' tog dig " + quiz.numberOfTries + " försök.";
            quiz.results[quiz.i] = tryperquestion;

            var answer = document.getElementById("textarea").value;
            var object = {"answer" : answer};
            var response = JSON.stringify(object);

            if(isNaN(parseFloat(answer)))
            {
                alert("Felaktig input, försök igen.");
            }
            else
            {
                quiz.sendanswer(url, response);
            }
        };
    },

    sendanswer:function(url, answer)
    {
        var sendRequest = quiz.request(url, answer);

        sendRequest.onreadystatechange = function()
        {
            if(sendRequest.readyState === 4 && sendRequest.status === 200)
            {
                var responseA = JSON.parse(sendRequest.responseText);
                quiz.numberOfTries = 0;
                quiz.question(responseA.nextURL);
                //alert("funkar");
            }
            if (sendRequest.status === 400 && sendRequest.readyState === 4)
            {       if(quiz.i >= 1)
                    {
                        quiz.i -= 1;
                    }
                alert("Fel! Stäng rutan med 'OK' och försök igen!");
                //quiz.currentQuestion -= 1;
            }
        };
    }
};
window.onload = quiz.init;