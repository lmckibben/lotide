const assertArraysEqual = require('../assertArrayEqual');
const middle = require = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, "this", "that", 7, 8, 9, 10]), ["this", "that"]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);