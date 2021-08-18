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

const without = function(arrayA, arrayB) {
  let output = [];
  for (let i = 0; i < arrayA.length; i++) {
    output.push(arrayA[i]);
  }
  
  for (let a = 0; a < output.length; a++) {
    for (let b = 0; b < arrayB.length; b++) {
      if (output[a] === arrayB[b]) {
        output.splice(a, arrayB[b]);
      }
    }
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1,2,3,4,5], [2, 3]));
console.log(without(["this", true, 1, 2], [true, 2]));