const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return [1] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("return [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("return [3, 4] for [1, 2, 3, 4, 'this', 'that', 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, "this", "that", 7, 8, 9, 10]), ["this", "that"]);
  });

  it("return [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6,7, 8, 9]), [5]);
  });
});
