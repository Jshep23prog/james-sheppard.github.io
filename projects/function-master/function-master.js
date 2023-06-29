//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//should take in an object and return values in array
function objectValues(object) {
    //should return array so init a storage array
    var store = [];
    //for var in obj
    for (var key in object) {
        //should add values to array in each loop
        store.push(object[key]); 
    }
    return store;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var store = [];
    //for var in loop
    for (var key in object) {
     
        //should add values to array in each loop
        store.push(object[key]); 
    
    }
  var string = []
  for (var i = 0; i < store.length; i++) {
    if (typeof store[i] === 'string'){
      string.push(store[i]);
    }
  }
    return string.join(' ');

} 


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object"
function arrayOrObject(collection) {
    //should use Array.isArray to determine if array. if not return object
    if (Array.isArray(collection)) {
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    //use .charAt(0), .toUpperCase() and .slice(1) -removes first letter of string methods to make a very dry code
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and return a string with all the words capitalized 
//similar to function 6, but instead we will use a for loop to loop through every word
function capitalizeAllWords(string) {
    //we need to split our string into an array
    var words = string.split(" ");
    //for loop
    for (var i = 0; i < words.length; i++) {
        //loop through and make the word[i] = to the first letter capitalized concat with a sliced remainder of word[i]
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!
function welcomeMessage(object) {
    //return welcome and ! string concated with obj.name with capitalizeletter function
    return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>'"
function profileInfo(object) {
    //similar to welcome message just more to concat
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a string separated by a space,
// if there are no noises return 'there are no noises'"
function maybeNoises(object) {
    //if else chain starting with the empty array so it doesn't throw an error
    if (Object.keys(object).length === 0) { //first test for empty obj
        return 'there are no noises';
      }  else if (object.noises.length === 0) { //then test for empty key value
            return 'there are no noises';
        } else if (object.noises.length > 0) { // then return joined array
            return object.noises.join(" ");
        } 
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
function hasWord(string, word) {
//we should split(' ') the string of words into an array so we can loop through them and compare
//init storage variable
var words = string.split(' ')
//for loop to loop through words array
for (var i = 0; i < words.length; i++){
//if statement to see if words[i] strictly equals word
    if (words[i] === word) {
        return true;
    }
}
return false; //return false outside of loop if it does not contail the matching word
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
    //take object's dot notation of friends' index which is object.friends.length and assign it to name
    //it will always work because the .length property will alwyas be one index ahead
    object.friends[object.friends.length] = name;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
    if (Object.keys(object).length === 0){ // I had to add this in later to account for empty arrays
        return false;
    }
    //needs a for in loop to loop through the object friends array
    for (var i = 0; i < object.friends.length; i++){
        if (object.friends[i] === name) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
     //init a storage arry to push enemies to
     var list = [];  
     var enemy = [];
       //for loop to loop through array
       for (var i = 0; i < array.length; i++){
           //if conditional to check the object.friends and see if they match with name
         if (array[i].name !== name && array[i].friends.length !== 0) {
           list.push(array[i]);
         }
       }
       //console.log(list);
         for (var j = 0; j < list.length; j++) {
           enemy.push(list[j].name)
         }
              
         return enemy;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}