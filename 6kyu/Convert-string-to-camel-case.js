// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"use strict"

let str = "the-stealth-warrior";

function toCamelCase(str) {
    let index = null;      
    if (str.includes('_')) {
        do {
            let ind = str.indexOf('_');
            index = ind;
            if (ind == -1) {
                return str;
            }
            let newString = str.replace(str[ind+1], str[ind+1].toUpperCase());
            str = newString.replace('_', '');
        } while (index != -1);
    } else if (str.includes('-')) {
        do {
            let ind = str.indexOf('-');
            index = ind;
            if (ind == -1) {
                return str;
            }
            let newString = str.replace(str[ind+1], str[ind+1].toUpperCase());
            str = newString.replace('-', '');
        } while (index != -1);
    } else {
        return str;
    }
};
// console.log(toCamelCase(str));