const findKey = function(obj, callback) {
  for (const keys in obj) {
    if (callback(obj[keys])) {
      return keys;
    }
  }
  return;
};

module.exports = findKey;