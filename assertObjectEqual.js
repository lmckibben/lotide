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

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false
  }

  for (const keys of objKeys1) {
    if (Array.isArray(object1[keys]) === Array.isArray(object2[keys])) {
      if (!eqArrays((object1[keys]), (object2[keys]))) {
        return false
      } else {
        continue
      }
    } 
    
    if (object1[keys] !== object2[keys]) {
      return false
    }


  }
  return true
};

const assertObjectsEqual = function(objectA, objectB,) {
  const inspect = require('util').inspect;

  if (eqObjects(objectA, objectB) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(objectA)} === ${inspect(objectB)}`);
  }else if (eqObjects(objectA, objectB) === false) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(objectA)} !== ${inspect(objectB)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("eqObjects:", eqObjects(cd, dc));
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("eqObjects:", eqObjects(dc, cd2));
assertObjectsEqual(cd, cd2);