
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {//requires a param
//since we want a set number of triangle prints, use a for loop
//we need abstract thinking on this one instead of i = 0, it should be str = '#'
for (var str = '#'; str.length <= num; str += '#'){
  console.log(str);
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, 
//and for numbers divisible by 5 (and not 3), print "Buzz" instead.
function fizzBuzz(num, end) {
  //start with a for loop
  for (var i = num; i <= end; i++) {
    //if else chain statement starting with an and conditional so FIZZBUZZ is triggered instead of just fizz or buzz
    if (i % 3 === 0 && i % 5 === 0) { //if divisible by 3 AND 5 return fizzbuzz
      console.log('fizzbuzz');
    } else if (i % 3 === 0) { // if divisible by three log fizz
      console.log('fizz');
    } else if (i % 5 === 0) { //if divisible by five log buzz
      console.log('buzz'); //the capitalization I originally had threw errors
    } else {
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {//requires a param
  //we should init a storage string
  var board = '';
  //need two for loops so we can work in a 2D space
  for (var i = 0; i < num; i++) { // in the outer loop we add a new line to every row
    for (var j = 0; j < num; j++) { // in the inner loop we can add spaces or hashtags based on an if clause
      if ((i + j) % 2 === 0) { //  this tripped me up for a bit. I was just doing j instead of i +j 
        //j returned uniform columns and I needed alternating
        board += ' ';
      } else {
        board += '#';
      }

    }
    //outside of the inner loop we should add a new line with the forwardslash n
    board += '\n';

  }
  //finally, important to console log board at the end of the loop
  console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
