const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1,1);
assertEqual("This is a string", "This is a string");
assertEqual("This is a String", "This is A string");
assertEqual(10, 10.1);
assertEqual(10, 10.0);