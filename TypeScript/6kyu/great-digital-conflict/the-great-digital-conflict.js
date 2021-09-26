"use strict";
// The Evil King of Numbers wants to conquer all space in the Digital World. For that reason, His Evilness declared war on Letters, which actually stay in the Alphabet Fragmentation. You were nominated the Great Arbiter and must provide results of battles to the technology God 3 in 1, Llib Setag-Kram Grebrekcuz-Nole Ksum.
exports.__esModule = true;
exports.battleCodes = void 0;
// Description
// armyLetters consists of letters from 'a' to 'z' and armyNumbers consists of digits from '1' to '9'. The power of a letter is its position in the Latin alphabet, so the letter 'a' has power 1, 'b' has 2, .. 'z' has 26. The power of a digit is its value, so '1' has power 1, '2' has 2, .. '9' has 9.
// armyLetters fights from its end; armyNumbers fights from its beginning.
// Per round, one letter from armyLetters attacks one digit and does damage equal to its power, and one digit from armyNumbers attacks two letters and does damage equal to its power to both. Characters with 0 or lower power disappear.
// Rounds of battle continue until at least one army has completely disappeared.
// Output
// If either or both armies are empty at the start of hostilities, return "Peace".
// At the end of the war, return "Draw" if both armies died, or the final state of the winning army (as a String).
// How the attacks happen.
// For example, we have "abc" and "12".
// The rightmost letter of "abc" is 'c', which has power 3, and the leftmost digit of "12" is '1'.
// 'c' attacks '1' and at the same time '1' attacks two last letters of "abc".
// String "abc" becomes "aab" because '1' attacks the last two letters: 'c' (power 3) subtracts 1 and 'b' subtracts 1; '1' was attacked and eliminated by 'c' because its power became less than or equal to zero.
// After this round we have "aab" and "2"; repeat until only one non-empty string is left and return it.
// In this case the winner is "a".
// Notes
// There are no zeros in numbers.
// There are no uppercase letters.
// Examples
// let armyLetters = 'g', armyNumbers = '2222';
// armyLetters = 'e', armyNumbers = '222';
// armyLetters = 'c', armyNumbers = '22';
// armyLetters = 'a', armyNumbers = '2';
// armyLetters = '',  armyNumbers = '1';
// return '1'; // armyNumbers
// let armyLetters = 'g', armyNumbers = '23';
// armyLetters = 'e', armyNumbers = '3';
// armyLetters = 'b', armyNumbers = '';
// return 'b'; //armyLetters
//return the winner's army as string, 'Draw' or 'Peace'
function battleCodes(armyLetters, armyNumbers) {
    var lettersArr = armyLetters.split("");
    var numbersArr = armyNumbers.split("");
    var llPower, lnPower, flPower, fnPower;
    var i = 0;
    //   while (lettersArr.length !== 0 || numbersArr.length !== 0) {
    while (i < 1) {
        llPower = getPower(lettersArr[lettersArr.length - 1]);
        lnPower = getPower(numbersArr[numbersArr.length - 1]);
        flPower = getPower(lettersArr[0]);
        fnPower = getPower(numbersArr[0]);
        i++;
    }
    return llPower.toString();
}
exports.battleCodes = battleCodes;
function getPower(symbol) {
    var power = symbol.charCodeAt(0);
    if (power > 57) {
        return power - 96;
    }
    else {
        return power - 48;
    }
}
console.log(battleCodes("aaddz", "aaa"));
