const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//get an list of keys
//loop through key list
//determine if key value = input value
//return if match
//if no match found
//return undefined;

const findKeyByValue = function(obj, value) {
  let output = "";
  const objKeys = Object.keys(obj);
  
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === value) {
      output = objKeys[i];
    }
  }

  if (output.length === 0) {
    output = undefined;
  }
  return output;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  romance: "The Notebook",
  horror: "Scream",
  action: "Terminator 2"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Notebook"), "romance");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Shining"), undefined);