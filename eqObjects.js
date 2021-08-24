const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (const keys of objKeys1) {
    if (Array.isArray(object1[keys]) === Array.isArray(object2[keys])) {
      if (!eqArrays((object1[keys]), (object2[keys]))) {
        return false;
      } else {
        continue;
      }
    }
    
    if (object1[keys] !== object2[keys]) {
      return false;
    }


  }
  return true;
};

module.exports = eqObjects;