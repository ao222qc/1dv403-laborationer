"use strict";

var makePerson = function(persArr){
    
    var minAge;
    var averageAge;
    var maxAge;
    var names;
    var result;
    
    var nameArray = [];
    var ageArray = [];
    
    var ageSum = 0; //Variabel för att räkna ihop totalåldern som plussas i forloopen nedan.
    
    for (var i = 0; i < persArr.length; i++) 
    {
        ageArray[i] = persArr[i].age; //index i min egna array är lika med indexen i objecten som skickas in (age)
        ageSum = ageSum + ageArray[i];
    }
    
    for (var i = 0; i < persArr.length; i++)
    {
        nameArray[i] = persArr[i].name;  
    }  

    nameArray.sort(function(a,b)
    {
        return a.localeCompare(b);
    });
    
    //Hittade lösning hur man sorterar även ÅÄÖ via denna länk. nameArray.sort(); löste inte den biten för mig.        
    //http://stackoverflow.com/questions/14677060/400x-sorting-speedup-by-switching-a-localecompareb-to-ab-1ab10
    
 
    names = nameArray.toString();
    names = names.split(",").join(", "); //Lägger till ett mellanrum efter kommatecknet då det såg hoptryckt ut.
    
    
    minAge = Math.min.apply(Math, ageArray); 
    maxAge = Math.max.apply(Math, ageArray);

    averageAge = ageSum / ageArray.length; //Average är samma som totala åldrarna delat på antal åldrar.
    
    averageAge = Math.round(averageAge); //Avrundning av medelåldern.
    
    result = {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: names};
    
    return result;

	// Din kod här...

};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);