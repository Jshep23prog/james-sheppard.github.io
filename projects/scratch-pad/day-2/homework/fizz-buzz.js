// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //looks like a set number, so I will try a while loop
    //init var
    var num = 1;
    while (num <= 100) { //make the arguement <= so we can get to 100
        //to determine if a number is a multiple, we can use the remainder operator and strictly equals 0
        //since we have three constraints, use an if else chain
        //we should do the divisible by 3 and 5 first because if we do just divisible by 5 or three, we will not proceed down the chain
        if (num % 3 === 0 && num % 5 === 0){
          console.log('FizzBuzz');
        } else if (num % 3 === 0){ //next is number multiple of 3
          console.log('Fizz');
        } else if (num % 5 === 0) { //next is number multiple of 5
          console.log('Buzz');
        } else { //otherwise, log number as is
          console.log(num);
        }
        
        
        num++ //increment so the code stops at end of loop
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}