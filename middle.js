const middle = function(array) {
  //create empty array
  const output = [];
  //get length of the array
  let arrayLength = array.length;

  //check if array length is < 2
  if (arrayLength <= 2) {
    //return empty array
    return output;
  }
  //check if array length is odd
  if (arrayLength % 2 !== 0) {
    //return array with 1 element 5/2 = 2.5 round up = 3
    output.push(Math.ceil(arrayLength / 2));
  }
  //check if array length is even
  if (arrayLength % 2 === 0) {
    //6/2 = 3 added index 3 - 1, and 3
    output.push(array[arrayLength / 2 - 1], array[arrayLength / 2]);
  }
  return output;
};

module.exports = middle;