const countLetters = function(string) {
  const results = {};
  
  for (const letters of string) {
    if (results[letters]) {
      results[letters] += 1;
    } else if (letters !== " ") {
      results[letters] = 1;
    }
  }

  return results;
};

module.exports = countLetters;