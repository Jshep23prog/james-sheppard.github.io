//NOT COMPLETE

/** ~~~~~~~~~~~~~~~~~~~~~DATA TYPES~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Programming languages all have built-in data structures, but these often differ from one language to another. 
 * Here we will list the built in data structures available in JavaScript
 * 
 * ~~~~~~~~~~~~~~~~~~~~1. NUMBERS~~~~~~~~~~~~~~~~~~~~~~~~
 * The Number type is a double-precision 64-bit binary format IEEE 754 value. 
 * It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) 
 * and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, 
 * but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER). 
 * Outside this range, JavaScript can no longer safely represent integers; 
 * they will instead be represented by a double-precision floating point approximation. 
 * 
 * You can check if a number is within the range of safe integers using Number.isSafeInteger().
 * 
 * ~~~~~~~~~~~~~~~~~~~~2. STRINGS~~~~~~~~~~~~~~~~~~~~~~~~~
 * The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units. 
 * Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on. 
 * The length of a string is the number of UTF-16 code units in it, which may not correspond to the actual number of Unicode characters; 
 * see the String reference page for more details.
 * 
 * JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. 
 * String methods create new strings based on the content of the current string — for example:
 *          A substring of the original using substring().
 *          A concatenation of two strings using the concatenation operator (+) or concat().
 * 
 * ~~~~~~~~~~~~~~~~~~~~3. BOOLEANS~~~~~~~~~~~~~~~~~~~~~~~~~
 *  The Boolean type represents a logical entity and is inhabited by two values: true and false.
 * 
 * Boolean values are usually used wiht conditional operators.
 * 
 * ~~~~~~~~~~~~~~~~~~~~4. ARRAYS~~~~~~~~~~~~~~~~~~~~~~~~~~
 * //Arrays
//Arrays need to be declared and assigned if we are to use them
// we can then fill the brackets with any number of data types
var array  = ['string', 100, true, ['another', 'array'], {evenAn : 'object'}];
console.log(array);

//arrays are zero indexed ordered lists
var numArray = ['zero', 'one', 'two', 'three', 'four'];
// index values:  0       1      2      3        4

//Use bracket notation to access data
console.log(numArray[3]);

//differentiate between simple and complex
//Arrays
//Arrays need to be declared and assigned if we are to use them
// we can then fill the brackets with any number of data types
var array  = ['string', 100, true, ['another', 'array'], {evenAn : 'object'}];
console.log(array);

//arrays are zero indexed ordered lists
var numArray = ['zero', 'one', 'two', 'three', 'four'];
// index values:  0       1      2      3        4

//Use bracket notation to access data
console.log(numArray[3]);


//Objects
//Objects need to be declared and assigned if we are to use them
//Think of objects as a desctiption of an item
var carObj = {
  make: 'Toyota',
  model: 'Rav4',
  isRed: false,
  mileage: 65000,
  safetyFeatures: ['airbags', 'seatbelts', 'anti-lock brakes'],
  year: '2016'
};

//Objects are non-ordered and can use dot notation OR bracket notation to access data

//console.log(carObj.model);
//console.log(carObj['mileage']);
*/