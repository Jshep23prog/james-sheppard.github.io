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
  //let list equal to null so at the end of loop null is the value
  let list = null;
//to handle large array need for loop
//since we are looping, the original result had it in descending order, so we have to alter our for loop
for (var i = array.length - 1; i >= 0; i--){

 list = { value : array[i], rest : list}
}
return list;
};

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //storage array
  let result = [];
  //init a conditional to weed out if values are null
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result; //if it passes if conditional, execute else 
  } else {
  result.push(list.value);
  //while loop to determine if the value has the property rest and contains data and to stop when it doesnt
  while (list.hasOwnProperty('rest') && list.rest !== null) {
    //make list have the rest key
    list = list.rest;
    //check to see if list has value property and push if so
    if (list.hasOwnProperty('value')) {
      result.push(list.value);
    }
  }
}
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

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
