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

module.exports = findKeyByValue;