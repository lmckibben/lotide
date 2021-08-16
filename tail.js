const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  let tailArray = [];
  
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }

  return tailArray;
};

//test 1
let array = ["Light", "House", "Labs"];
tail(array);
assertEqual(array.length, 3);

let result = tail(array);
assertEqual(result.length, 2);
assertEqual(result[0], "House");
assertEqual(result[1], "Labs");

//test 2
array = [1,2,3,4,5];
tail(array);
assertEqual(array.length, 5);

result = tail(array);
assertEqual(result.length, 4);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);
assertEqual(result[3], 5);

//test 3
array = [1];
tail(array);
assertEqual(array.length, 1);

result = tail(array);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);

//test 4
array = [1,2,3,4,5];
tail(array);
assertEqual(array.length, 5);

result = tail(array);
assertEqual(result.length, 3);
assertEqual(result[0], 1);
assertEqual(result[1], 2);
assertEqual(result[2], 3);
assertEqual(result[3], 4);