# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lmckibben/lotide`

**Require it:**

`const _ = require('@lmckibben/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head: Grabs the first element in an array.
  tail: Removes the first element in an array leaving just the tail end.
  middle: Grabs the middle of an array.
  countLetters: Takes in a string and returns a count for each letter of the string.
  countOnly: Takes in a collection of items and returns counts for subset of items provided.
  EqArrays: Checks to see if two arrays are equal.
  eqObjects: Compares if two objects are the same.
  findKey: Takes in an object and callback, returns the first key where the result of the callback returns truthy.
  findKeyByValue: Takes in a object and value and returns the first key found with that value.
  flatten: Takes in an array including nested arrays and returns a flattened version of the array.
  letterPositions: Takes in a string and returns the index of where each letter is found.
  map: Takes in an array and a callback, returns a new array based on the results of the callback.
  takeUntil: Takes in a array and callback, returns a slice of the array with elements from the beginning till the callback.
  without: Returns a subset of an array, removing un wanted elements.