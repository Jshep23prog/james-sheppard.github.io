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
   let females = _.reduce(array, function(accumulator, current){
    return accumulator = current.gender === 'female';
    // if(current.gender === 'female'){
    //     females += 1;
    //     // console.log('1', current);
    // }
   
   }, 0);
     return females;
    
};

var oldestCustomer = function(array) {
    //determine if the current custome is older than accumulator
        //if true, return current
        let oldest = _.reduce(array, function(accumulator, current){

        });
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

var youngestCustomer;

var averageBalance;

var firstLetterCount = function(array, letter) {
    let names = _.filter(array, function(customer){
        return customer.name;
    });
    //console.log(names);
    //init match array
    let match = [];
    //for loop to loop through returned array of customer names
    for (var i = 0; i < names.length; i++) {
        //check iteration if charAt0 === letter
        if(names[i].name.charAt(0) === letter || names[i].name.charAt(0) === letter.toUpperCase()) {
            match.push(names[i].name);
        }

    }
    return match.length;
}

var friendFirstLetterCount = function(array, customer, letter) {
    let names = _.filter(array, function(customer){
        return customer.friends;
    });
    
console.log(names);
}

var friendsCount;

var topThreeTags;

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
