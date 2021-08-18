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

//create empty object
//loop through string
//check if letter is in object and if not added it along with an array of the index
//if it is add the index to the array
//skip spaces

const letterPositions = function(string) {
  const results ={};

  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    }else if (string[i] !== " " ) {
      results[string[i]] = [i];
    }
  }
  return results
}

const result1 = letterPositions("test")
//assertArraysEqual(result1.t, [0, 3]);
//assertArraysEqual(result1.e, [1]);
//assertArraysEqual(result1.s, [2]);