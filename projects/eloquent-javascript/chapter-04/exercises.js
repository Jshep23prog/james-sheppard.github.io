////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create a function that reutns an array with a range of numbers from num1 -num2
function range(num1, num2, step) {
  
  let store = [];
   
  if (step === undefined) {
    if (num1 < num2) {
      for (var i = num1; i <= num2; i++) {
        store.push(i);
  }
  } else if (num1 > num2) {
      for (var i = num1; i >= num2; i--) {
       store.push(i);
   }
}
  return store;

  } else if (step > 0){
       for (var i = num1; i <= num2; i += step) {
        store.push(i);
  }
  } else if (step < 0) {
    for (var i = num1; i >= num2; i+= step) {
       store.push(i);
   }
  }
      return store;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//write a function that takes an array of numbers and returrns the sum of these numbers
function sum(array) {
  if (array.length === 1){
    return array[0];
  }
  //init storage var
  let sum = 0;
  //forloop
  for (var i = 0; i < array.length; i++){
    //aditional operator so sum is added each loop
    sum += array[i];
  }
  return sum;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order
function reverseArray(array) {
  //init storage var
  let store = [];
  //for loop with unshift so it added to the array backwards
  for (var i = 0; i < array.length; i++) {
    store.unshift(array[i]);
  }
return store;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//wapping the element at position i with the one at position array.length - 1 - i. 
//You can use a local binding to briefly hold on to one of the elements, overwrite that one with its mirror image,
// and then put the value from the local binding in the place where the mirror image used to be.
function reverseArrayInPlace(array) {
//lets try a for loop with a length / 2 to get to the middle of a for loop
 for (var i = 0; i < Math.floor(array.length / 2); i++){
  let hold = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = hold;
 }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
function arrayToList(array) {
  //you have to start inside and move it out
  //let list equal to null so at the end of loop null is the value
  let rest = null;
//to handle large array need for loop
//since we are looping, the original result had it in descending order, so we have to alter our for loop
for (var i = array.length - 1; i >= 0; i--){

 rest = { value : array[i], rest : rest}
}
return rest;
};

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
//base
if(list.rest === null){
 output.push(list.value);
 return output;
}
  //recursion
  //grab the current value at 'value and add to array
  output.push(list.value);

  return listToArray(list.rest, output);
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Then add a helper function prepend, which takes an element and a list
//and creates a new list that adds the element to the front of the input list
function prepend(element, list) {
//return a new list that adds element to the front
return {
  value : element,
  rest: list
}
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//nth, which takes a list and a number and returns the element at the given position 
//in the list (with zero referring to the first element) or undefined when there is no such element.
function nth(list, num) {
  //this one threw me for a bit. didn't realize I had to call anothewr function
  return listToArray(list)[num];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function deepEqual that takes two values and returns true only if they 
//are the same value or are objects with the same properties, where the values 
//of the properties are equal when compared with a recursive call to deepEqual.
function deepEqual(val1, val2) {
  
}
// //run an if statement chain to compare various data types
// if (val1 === val2) return true;
// //next determine ifany values are falsey with an if conditional containg ors
// if(val1 == null || typeof val1 != 'object' || val2 == null || typeof val2 != 'object') return false;
// //determine if object keys length are identical
// let keys1 = Object.keys(val1); //now is an array of keys
// let keys2 = Object.keys(val2); //now is an array of keys
// if (keys1.length != keys2.length) return false;
// //next determine if values are identical for of loop
// for (let key of keys1) {
//   if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
// }
// return true;
// //

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
