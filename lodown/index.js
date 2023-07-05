'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Takes in a value and returns in unchanged.
 * 
 * @param {*} value : Function takes in an input value.
 * @returns {*} value : Function returns input value unchanged
 */
function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: Takes in a value and determines what type of data it is and outputs the value as a string
 * @param {Any data type} value : Any value can be used including arrays, objects or functions 
 *  
 * @returns {string} value : Returns the type of data as a string of it's type
 */
function typeOf(value){
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'object'){
        return 'object';
    } else if (typeof value === 'string') {
        return 'string'
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'function') {
        return 'function';
    }
}

module.exports.typeOf = typeOf

/**
 *  first: Takes in an array and a number and returns the range of array indexes indicated by the number
 * 
 * @param {Array} collection : Function takes in an input value.
 * @param {Number} value : Function takes in a number
 * @returns {Array} collection : Function returns array based on parameters
 * Will retrun an empty array if array arguement is not an array or the number value is negative
 * Will return the first index of the array if the number arguement is NaN or null
 * Will return the array if the array length is less than the number
 * Will return the number of array indexes denoted by the number arguement
 *  
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (isNaN(number) || number === null) {
        return array[0];
    } else if (array.length < number) {
        return array;
    } else {
        let store = [];
        for (var i = 0; i < number; i++) {
            store.push(array[i])
        }
        return store;
    }
}

module.exports.first = first;

/**
 *  last: Takes in an array and a number and returns the last number of items in an array
 * 
 * @param {Array} collection : Function takes in an input value.
 * @param {Number} value : Function takes in a number
 * @returns {Array} collection : Function returns array based on parameters
 * Will retrun an empty array if array arguement is not an array
 * Will return the last element of the array if the number arguement is NaN or null
 * Will return the last number of array indexes denoted by the number arguement
 *  
 */

function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (isNaN(number) || number === null) {
        return array[array.length - 1];
    } else if (array.length < number) {
        return array;
    } else {
        let store = [];
        for (var i = 1; i <= number; i++) {
            store.push(array[i])
        }
        return store;
    }
}

module.exports.last = last