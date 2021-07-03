// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// 
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(
//     JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
//     JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
//   );
//   });
//   });
// const arr = [1,2,0,1,0,1,0,3,0,1];
const arr = [false,1,0,1,2,0,1,3,"a"];

var moveZeros = function (arr) {
  let count = 0;
  for (let i in arr) {
    arr[i] === 0 ? count++ : undefined;
  }
  let newArr = arr.filter(el => el !== 0);
    for (let j=0; j<count; j++) {
    newArr.push(0);
  }
  return newArr;
}

console.log(moveZeros(arr));

