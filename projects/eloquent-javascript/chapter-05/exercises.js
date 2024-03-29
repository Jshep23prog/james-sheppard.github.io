// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Use the reduce method in combination with the concat method to “flatten” an
// array of arrays into a single array that has all the elements of the original arrays.
//let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
  return array.reduce(function(accumulator, current){
  return accumulator.concat(current);
  }, []);
 

  
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Write a higher-order function loop that provides something like a for loop statement. 
//It takes a value, a test function, an update function, and a body function. 
//Each iteration, it first runs the test function on the current loop value and stops 
//if that returns false. Then it calls the body function, giving it the current value. 
//Finally, it calls the update function to create a new value and starts from the beginning.
//When defining the function, you can use a regular loop to do the actual looping./
function loop(value, test, update, body) {
  for (var i = value; test(i); i = update(i)){
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.
function every(arr, func) {
//  for (var i = 0; i < arr.length; i++){
//   if (func(arr[i])){
//     return true;
//   } else{
//   return false;
//   }
//  }
for (let element of arr){
  if (!func(element)) return false;
}
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection() {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
