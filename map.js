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
    console.log(`🟢🟢🟢 Assertion Passed: ${arrayA} === ${arrayB}`);
  } else if (eqArrays(arrayA, arrayB) === false) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arrayA} !== ${arrayB} `);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map([1, 2, 3, 4], num => num * 5), [5, 10, 15, 20]);
assertArraysEqual(map(['Tank', 'house', 'angry', 'nancy', 'kill', 'Yellow', 'other', 'universe' ], word => word[0]), ['T', 'h', 'a', 'n', 'k', 'Y', 'o', 'u']);
assertArraysEqual(map([100, 500, 1000], sale => sale * 1.05), [105, 525, 1050]);

