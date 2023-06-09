// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //loop through an array with for loop and .length property
  for (var i = 0; i < array.length; i++) { // we are incrementing until .length limit
    console.log(array[i]); // console.log array with index bracket
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //similar to our above function except this time instead of i = 0, i will equal array.length - 1
  for (var i = array.length -1; i >= 0; i--) { // this will allow us to decrement to the 0 threshold
    console.log(array[i]); // log array index
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // to loop through the keys, one must use a for loop with a var key in object
  //we need to return an array, so init storage array
  var array = [];
  for (var key in object) {
    array.push(key) // this one got me until I realized they want key not value, so removed bracket notation
  }
  return array; //return array as specified
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //similar to the above problem, except instead of pushing to an array, we simply console.log each iteration
    for (var key in object) {
      console.log(key); // again, we are logging keys, not values
    }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //similar to the getObjectKeys except we are now getting the values
   // to loop through the keys, one must use a for loop with a var key in object
  //we need to return an array, so init storage array
  var array = [];
  for (var key in object) {
    array.push(object[key]) // bracket notation to denote value
  }
  return array; //return array as specified
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //similar to the above problem, except instead of pushing to an array, we simply console.log each iteration
  for (var key in object) {
    console.log(object[key]); //  we are logging values not keys so bracket notation is necessary
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // for this we have to retun number of key/value pairs
  //we use Object.keys().length to determine that data
  return Object.keys(object).length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //this one is interesting. we can use Object.values to convert values to an array and then create a for loop
  //init a storage var
  var store = Object.values(object);
  //create a for loop using store .length -1 and decrement
  for (var i = store.length - 1; i >= 0; i--){ //making sure to >= 0 so it prints the first value
    console.log(store[i]); //log value index
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
