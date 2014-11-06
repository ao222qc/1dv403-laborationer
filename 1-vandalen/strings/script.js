"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.
		
		if (str === "")
		{
			throw new Error("Ange något!")
		}
		
	  var minarray = [];
	  minarray = str.split("");
	  
	  for (var i = 0; i < str.length; i++) 
	  {
	  	if (minarray[i] === minarray[i].toUpperCase())
	  	{
	  		minarray[i] = minarray[i].toLowerCase();
	  	}
	  	else
	  	{
	  		minarray[i] = minarray[i].toUpperCase();
	  	}
	  }
		

		
		str = minarray.toString();
		str = str.split(/,/).join("");
		str = str.split(/[aA]/).join("#");
		return str;
		
		
		
		
		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
		
		




	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};