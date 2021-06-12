// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


let array = ['a','b','c','d','f'];

function findMissingLetter(array) {
    console.log(array);
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const firstLetter = array[0].toString().toUpperCase();
    let missingLetter = '';
    const indexOfFirst = abc.indexOf(firstLetter);    
    for (let i=0; i<array.length; i++) {
        if (array[i].toUpperCase() != abc[indexOfFirst+i] && array[0] != abc[indexOfFirst]) {
            missingLetter = abc[indexOfFirst+i].toLowerCase();
            return missingLetter;
        } else if (array[i].toUpperCase() != abc[indexOfFirst+i]) {
            missingLetter = abc[indexOfFirst+i];
            return missingLetter;
        }
    }
};

// console.log(findMissingLetter(array));