// Product-Sum Numbers
// A product-sum number is a natural number N which can be expressed as both the product and the sum of the same set of numbers.

// N = a1 × a2 × ... × ak = a1 + a2 + ... + ak

// For example, 6 = 1 × 2 × 3 = 1 + 2 + 3.

// For a given set of size, k, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, k = 2, 3, 4, 5, and 6 are as follows.

// k=2: 4 = 2 × 2 = 2 + 2
// k=3: 6 = 1 × 2 × 3 = 1 + 2 + 3
// k=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4
// k=5: 8 = 1 × 1 × 2 × 2 × 2 = 1 + 1 + 2 + 2 + 2
// k=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6

// Hence for 2 ≤ k ≤ 6, the sum of all the minimal product-sum numbers is 4+6+8+12 = 30; note that 8 is only counted once in the sum.
// Your task is to write an algorithm to compute the sum of all minimal product-sum numbers where 2 ≤ k ≤ n.
// Courtesy of ProjectEuler.net

const n = 6;

function productSum(n){
    let sum = 0;
    while (n >= 2) {
        sum += productSumMY(n--);
    }
    return sum;
}

function productSumMY(n){
    if (n === 5) {
        return 0;
    }
    const arr1 = [];
    arr1.length = n;
    for (let i=0; i<arr1.length; i++) {
        arr1[i] = 1;
    }
    
    let sumArr = arr1.reduce((red, acc) => red + acc);
    let multArr = arr1.reduce((red, acc) => red * acc);
    let nn = arr1.length-1;
    while (sumArr !== multArr) {            
        arr1[nn-1] = 2;
        arr1[nn] += 1;
        sumArr = arr1.reduce((red, acc) => red + acc);
        multArr = arr1.reduce((red, acc) => red * acc);
    }
    return multArr;
}

console.log(productSum(n));


        // while (sumArr !== multArr) {            
        //     if (nn >= 0) {
        //         if (arr1[0] === 9 ) {
        //             break;
        //         }
        //         arr1[nn] += 1;
        //         nn--;
        //         sumArr = arr1.reduce((red, acc) => red + acc);
        //         multArr = arr1.reduce((red, acc) => red * acc);
        //         console.log('worked');
        //     } else {
        //         nn = arr1.length - 1;
        //     }
        // }