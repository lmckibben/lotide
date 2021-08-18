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

const letterPositions = function(string) {
  
}

assertArraysEqual(letterPositions("test").t, [2]);
assertArraysEqual(letterPositions("e").e, [1]);
assertArraysEqual(letterPositions("s").s, [1]);