//NOT COMPLETE

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

console.log(carObj.model);
console.log(carObj['mileage']);