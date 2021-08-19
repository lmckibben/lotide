const eqArrays = function(arrayA, arrayB) {
  let output = true;

  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (i === j && arrayA[i] !== arrayB[j]) {
        output = false;
      }
    }
  }
  return output;
};

const assertArraysEqual = function(arrayA, arrayB,) {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: [${arrayA}] === [${arrayB}]`);
  }else if (eqArrays(arrayA, arrayB) === false) {
    console.log(`🔴🔴🔴 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
  }
};

const middle = function(array) {
  //create empty array
  const output = [];
  //get length of the array
  let arrayLength = array.length;

  //check if array length is < 2
  if (arrayLength <= 2) {
    //return empty array
    return output;
  }
  //check if array length is odd
  if (arrayLength % 2 !== 0) {
    //return array with 1 element 5/2 = 2.5 round up = 3
    output.push(Math.ceil(arrayLength / 2));
  }
  //check if array length is even
  if (arrayLength % 2 === 0){
    //6/2 = 3 added index 3 - 1, and 3  
    output.push(array[arrayLength / 2 - 1], array[arrayLength / 2]);
  }
  return output
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, "this", "that", 7, 8, 9, 10]), ["this", "that"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);