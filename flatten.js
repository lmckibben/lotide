
const flatten = function(array) {
  console.log("array:", array);
  const output = [];
  for (let index of array) {
    if (!Array.isArray(index)) {
      output.push(index);
    }
    for (let i = 0; i < index.length; i++) {
      output.push(index[i]);
    }
  }
  console.log("output:", output);
  return output;
};

module.exports = flatten;