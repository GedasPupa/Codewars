// Build a function that will take the length of each side of a triangle and return 
// if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.
// It has to return a string with the type of triangle.

// For example:
// typeOfTriangle(2,2,1) --> "Isosceles"

"use strict";
const sideA = -10;
const sideB = -3;
const sideC = -3;

var typeOfTriangle = function (sideA, sideB, sideC) {
    const triangle = [sideA, sideB, sideC];
    if (
        triangle.find(sides => sides < 0) || 
        triangle.find(side => typeof side !== "number") ||
        triangle.includes(0) ) { 
            return "Not a valid triangle";
    } else if (sideA == sideB && sideA == sideC) {
        return "Equilateral";
    } else if (
        sideA == sideB && sideA+sideB>sideC || 
        sideA == sideC && sideA+sideC>sideB || 
        sideB == sideC && sideB+sideC>sideA ) {
            return "Isosceles";
    } else if (triangle.find(side => side >= triangle.filter(s => s != side).reduce((acc, curr)=>acc+curr))) { 
            return "Not a valid triangle";
    } else {
        return "Scalene";
    }
}

console.log(typeOfTriangle(sideA, sideB, sideC));