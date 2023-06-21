// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) === true) {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // to do this we will need to eliminate the outliers in the typeof (null, Date, Array)
    //we should do it sequentially with the outliers
    //first up, Array.isArray()
    if (Array.isArray(value) === true) {
        return false; // return false if array
        //next is to see if the value is null NOT TYPEOF because it will produce an object
    } else if (value === null) {
         return false; // if null return false
         //then check the last outlier, Date. This can be done with instanceof
    } else if (value instanceof Date) {
        return false; //if date, return false
        //this just leaves us with the ability to test all the data types without the outliers getting in our way
    } else if (typeof value === 'object') {
        return true;
        //everything else, return false
    } else return false;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //similar to the previous function, but return true for Object and array
    //start with the outliers isArray, null, Date
    if (Array.isArray(value) === true) {
        return true;
    } else if (value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //similar to our previous two excercises, albeit a bit more pedantic. It's okay I appreciate the repetition
    //start with ourliers Array, Null, Date
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) { //this one threw an error because I used typeof
        return 'null';
    } else if (value instanceof Date) {
        return 'date';
        //now we can do the other data types
    } else if (typeof value === 'object') {
        return 'object';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'string') {
        return 'string';
    } else {
        return 'function';
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
