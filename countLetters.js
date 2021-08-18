const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  
  for (const letters of string) {
    if (results[letters]) {
      results[letters] += 1
    }else if (letters !== " ") {
      results[letters] = 1
    }
  }

  return results;
}



const result1 = countLetters("this is a test");
console.log("results1:", result1);

assertEqual(result1["t"], 3);
assertEqual(result1["h"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["s"], 3);
assertEqual(result1["a"], 1);
assertEqual(result1["e"], 1);
assertEqual(result1[" "], undefined);