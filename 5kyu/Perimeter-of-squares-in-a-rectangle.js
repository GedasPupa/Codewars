// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that 
// the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares 
// disposed in the same manner as in the drawing: (squares.png)
// Hint:
// See fib sequence
// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares 
// (they are numbered from 0 to n) and returns the total perimeter of all the squares.
// perimeter(5)  should return 80
// perimeter(7)  should return 216

// fib numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
"use strict";

function perimeter(n) {
    return 4 * (fib(n + 3) - 1);
}

function fib(n) {
    let tmp = 0;
    let sk2 = 1;
    let sk3 = 1;
    for(let i = 2; i < n; i++){
        tmp = sk3;
        sk3 = sk3 + sk2;
        sk2 = tmp;
    }
    return sk3;
};

console.log(perimeter(7));

// FIBONACHI WITH RECURSION: 
// function fib(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
// };

// optimization for execution time:
// perimeter(5): 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 
// perimeter(6): 4 * (1 + 1 + 2 + 3 + 5 + 8 + 13) = 4 * 33 = 132 
// perimeter(7): 4 * (1 + 1 + 2 + 3 + 5 + 8 + 13 + 21) = 4 * 54 = 216 ... 


// function sum(n) {
//     let sum = 0;
//     while (n !== 0) {
//         sum += fib(n--);
//     }    
//     return 4*(fib(n) - 1);
// }

// first version:
// function perimeter(n) {
//     return  sum(n + 1);
// }

// function sum(n) {
//     let sum = 0;
//     while (n !== 0) {
//         sum += fib(n--);
//     }
//     return 4*sum;
// }

// function fib(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
// };