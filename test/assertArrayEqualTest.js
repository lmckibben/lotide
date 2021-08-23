const assertArraysEqual = require('../assertArrayEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,"2",3], [1,2,3]);
assertArraysEqual([true,2,3], [true,2,3]);
assertArraysEqual([false,2,3], [true,2,3]);