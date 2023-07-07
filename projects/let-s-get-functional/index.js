// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./james-sheppard.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });// [ {male}, {male}, {male} ]
    //console.log(males);
    return males.length;
};

var femaleCount = function(array){
        //  reduce takes in accumulator(number that iterates and accumulates, current array index, and a seed at the end)
   let females = _.reduce(array, function(accumulator, current){
   //conditional for function that is passed each time
     if(current.gender === 'female'){
        //if true, accumulator is += 1
         accumulator += 1;
     
     }
     //return accumulator so females has value
     return accumulator;
   }, 0);
   //return females
     return females;
    
};
//console.log(females);

var oldestCustomer = function(array) {
    //determine if the current custome is older than accumulator
        //if true, return current
        let oldest = _.reduce(array, function(accumulator, current){
            if (current.age > accumulator.age) {
                accumulator = current;
            }
            return accumulator;
        },{age : 0})
    //else
       return oldest.name;
}
/**
 * invoke _.reduce(array)
 * if seed is undefinrd //TRUE
 * result = {name: 'Adele Mullin' ...}
 * //iterating
 * //1
 * //result = {name: 'Adele Mullin', 2}
 */

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator,current){
        //similar to oldest
        if(current.age < accumulator.age) {
            accumulator = current;
        }
        return accumulator;
    })
    //return string
    return youngest.name;
};

var averageBalance; //difficult number $3,1092.00, find a way to eliminate the exttra symbols
//invoke reduce to get a total
//divide by number of customer

var firstLetterCount = function(array, letter) {
    let names = _.filter(array, function(customer){
        if(customer.name.charAt(0) === letter || customer.name.charAt(0) === letter.toUpperCase()) {
            return true;
        }
    });
    
return names.length;
  
}

var friendFirstLetterCount = function(array, customer, letter) {
    //find the customer in the array
    var store;
    for (var i = 0; i < array.length; i++){
        if (array[i].name === customer){
            store = array[i].friends
        }
    }
    
    let names = _.filter(store, function(store){
        if(store.name.charAt(0) === letter || store.name.charAt(0) === letter.toUpperCase()) {
            return true;
        }     
    });

    //console.log(names);
return names.length
}

var friendsCount;

var topThreeTags; //use map

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
