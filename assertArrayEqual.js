const eqArrays = function(arrayA, arrayB) {
  let output = true;

  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (i === j && arrayA[i] !== arrayB[j]){
        output = false;
      }
    }
  }
  return output
}

const assertArraysEqual = function(arrayA, arrayB,) {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arrayA} === ${arrayB}`);
  }else if (eqArrays(arrayA, arrayB) === false) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arrayA} !== ${arrayB} `);
  }
};

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,"2",3], [1,2,3]);
assertArraysEqual([true,2,3], [true,2,3]);
assertArraysEqual([false,2,3], [true,2,3]);