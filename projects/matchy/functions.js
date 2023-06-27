/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, str){
    //loop through array and see if str matches
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === str) {
            return arr[i];
        } 
        
    }
    return null;
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
        }
        
    }
   
};



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
        animals.splice(animals[i], 1);
    }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    if (animal.name.length > 0 && animal.species.length > 0) {
        for (var i = 0; i < animals.length; i++){
            if (animals[i].name === animal.name) {
                
            } else {
                return animals.push(animal);
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
