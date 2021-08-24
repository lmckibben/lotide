const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("return 'drama' for 'The Wire", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      romance: "The Notebook",
      horror: "Scream",
      action: "Terminator 2"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("return 'undefined' for 'That '70s Show", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      romance: "The Notebook",
      horror: "Scream",
      action: "Terminator 2"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("return 'romance' for 'The Notebook'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      romance: "The Notebook",
      horror: "Scream",
      action: "Terminator 2"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Notebook"), "romance");
  });

  it("return 'undefined' for 'The Shining'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      romance: "The Notebook",
      horror: "Scream",
      action: "Terminator 2"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Shining"), undefined);
  });
});