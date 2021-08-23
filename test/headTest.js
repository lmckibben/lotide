const assertEqual = require(('../assertEqual'));
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,2,3]), 3);
assertEqual(head(["This", "is", "a", "test"]), "a");
assertEqual(head(["This", "is", "a", "test"]), "This");