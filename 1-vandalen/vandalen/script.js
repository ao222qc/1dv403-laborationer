"use strict";

var makePerson = function(persArr){
    
    var minAge;
    var averageAge;
    var maxAge;
    var names;
    var result;
    
    var nameArray = [];
    var ageArray = [];
    
    var ageSum = 0;
    
    for (var i = 0; i < persArr.length; i++) 
    {
        ageArray[i] = persArr[i].age;
        ageSum = ageSum + ageArray[i];
    }
    
    for (var i = 0; i < persArr.length; i++)
    {
        nameArray[i] = persArr[i].name;  
    }  
    
    nameArray.sort();
    names = nameArray.toString();
    names = names.split(",").join(", ");
    
    
    minAge = Math.min.apply(Math, ageArray);
    maxAge = Math.max.apply(Math, ageArray);

    averageAge = ageSum / ageArray.length;
    
    averageAge = Math.round(averageAge);
    
    result = {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: names};
    
    
  return result;
  
    
   
    
    
    
    
    
    
    


	// Din kod här...

};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);