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

const flatten = function(array) {
  console.log("array:", array);
  output = [];
  for (let index of array) {
    if (!Array.isArray(index)) {
      output.push(index);
    }
    for (let i = 0; i < index.length; i++) {
      output.push(index[i]);
    }
  }
  console.log("output:", output);
  return output;
}

assertArraysEqual(flatten([[1], [2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);