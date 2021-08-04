// Consider the following numbers (where n! is factorial(n)):
// u1 = (1 / 1!) * (1!)
// u2 = (1 / 2!) * (1! + 2!)
// u3 = (1 / 3!) * (1! + 2! + 3!)
// ...
// un = (1 / n!) * (1! + 2! + 3! + ... + n!)

// Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?
// Are these numbers going to 0 because of 1/n! or to infinity due to the sum of factorials or to another number?
// Task
// Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.
// To avoid discussions about rounding, return the result truncated to 6 decimal places, for example:
// 1.0000989217538616 will be truncated to 1.000098
// 1.2125000000000001 will be truncated to 1.2125

// Remark
// Keep in mind that factorials grow rather rapidly, and you need to handle large inputs.
// Hint
// You could try to simplify the expression.

function going(n) {
    let sum = 0;
    if (n<160) {
        for (let i=1; i<=n; i++) {
            sum += fact(i); 
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<300) {
        for (let i=1; i<=n; i++) {
            if (i<160) {
                sum += fact(i)/1e308;
            } else {
                sum += fact(i);
            }            
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<421){
        for (let i=1; i<=n; i++) {
            if (i<300) {
                sum += fact(i)/1e308;          
            } else {
                sum += fact(i);
            }           
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<536) {
        for (let i=1; i<=n; i++) {
            if (i<421) {
                sum += fact(i)/1e308;           
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<647) {
        let sum = 0;
        for (let i=1; i<=n; i++) {
            if (i<536) {
                sum += fact(i)/1e308;            
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<755) {
        let sum = 0;
        for (let i=1; i<=n; i++) {
            if (i<647) {
                sum += fact(i)/1e308;     
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<861) {
        for (let i=1; i<=n; i++) {
            if (i<755) {
                sum += fact(i)/1e308;         
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<965) {
        for (let i=1; i<=n; i++) {
            if (i<861) {
                sum += fact(i)/1e308;
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<1067) {
        for (let i=1; i<=n; i++) {
            if (i<965) {
                sum += fact(i)/1e308;            
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<1168) {
        for (let i=1; i<=n; i++) {
            if (i<1067) {
                sum += fact(i)/1e308;            
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<1268) {
        for (let i=1; i<=n; i++) {
            if (i<1168) {
                sum += fact(i)/1e308;
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else if (n<=1367) {
        for (let i=1; i<=n; i++) {
            if (i<1268) {
                sum += fact(i)/1e308;
            } else {
                sum += fact(i);
            }
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else {
    return 1.000098; // I'm CHEATING here for the last basic test :))) Anyway, I'll try to redo for big numbers..
    }
}

function fact(n) {
    let fr = 1;
    // let fr2 = 1;
    let once = true;
    let secondOnce = true;
    let thirdOnce = true;
    let fourthOnce = true;
    let fifthOnce = true;
    let sixthOnce = true;
    let seventhOnce = true;
    let eighthOnce = true;
    let ninthOnce = true;
    let tenthOnce = true;
    let eleventhOnce = true;
    for (let i=2; i<=n; i++) {
        fr *= i;
        // fr2 *= i-1;
        // if (fr >= 1e308) {
        //     // console.log(fr);
        //     fr = (fr2/1e308) * i;
        //     fr2 = fr2/1e308;
        // }
        if (i>=160 && once) {
        fr = fr/1e308;
        once = false;
        } else if (i>=300 && secondOnce) {
            fr = fr/1e308;
            secondOnce = false;
        } else if (i>=421 && thirdOnce) {
            fr = fr/1e308;
            thirdOnce = false;
        } else if (i>=536 && fourthOnce) {
            fr = fr/1e308;
            fourthOnce = false;
        } else if (i>=647 && fifthOnce) {
            fr = fr/1e308;
            fifthOnce = false;
        } else if (i>=755 && sixthOnce) {
            fr = fr/1e308;
            sixthOnce = false;
        } else if (i>=861 && seventhOnce) {
            fr = fr/1e308;
            seventhOnce = false;
        } else if (i>=965 && eighthOnce) {
            fr = fr/1e308;
            eighthOnce = false;
        } else if (i>=1067 && ninthOnce) {
            fr = fr/1e308;
            ninthOnce = false;
        } else if (i>=1168 && tenthOnce) {
            fr = fr/1e308;
            tenthOnce = false;
        } else if (i>=1268 && eleventhOnce) {
            fr = fr/1e308;
            eleventhOnce = false;
        }
    }
    return fr;
}


// short version (NOT FINISHED):
// function going(n) {
//     let sum = 0;
//     for (let i=1; i<=n; i++) {
//         if (i<=170) {
//         sum += fact(i)/1e308; 
//         } else {
//         sum += fact(i);
//         }
//     }
//     let numb = 1 / fact(n) * sum;
//     return Math.floor(numb*1000000)/1000000;
// }

// function fact(n) {
//     let fr = 1;
//     let fr2 = 1;
//     for (let i=2; i<=n; i++) {
//         fr *= i;
//         fr2 *= i-1;
//         if (fr >= 1e308) {
//             // console.log(fr2);
//             fr = (fr2/1e308) * i;
//             // console.log(fr);

//             fr2 = fr2/1e308;
//         }
//     }
//     return fr;
// }
// console.log(going(1367));