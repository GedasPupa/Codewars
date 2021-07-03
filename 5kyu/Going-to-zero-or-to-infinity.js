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
    if (n<=160) {
        let sum = 0;
        for (let i=1; i<=n; i++) {
            sum += fact(i); 
        }
        let numb = 1 / fact(n) * sum;
        return Math.floor(numb*1000000)/1000000;
    } else {
        let bigSum = 0;
        for (let i=1; i<=n; i++) {
            if (i<160) {
                bigSum += fact(i)/1e308;
            } else {
                bigSum += fact(i);
            }            
        }
        let bigNumb = 1 / fact(n) * bigSum;
        return Math.floor(bigNumb*1000000)/1000000;
    }
}

function fact(n) {
    let fr = 1;
    let once = true;
    for (let i=1; i<=n; i++) {
        fr *= i;
        if (i>=160 && once) {
        fr = fr/1e308;
        once = false;
        }
    }
    return fr;
}

console.log(going(189));

