const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("return [0, 3] for t", () => {
    const result1 = letterPositions("test");
    assert.deepEqual(result1.t, [0, 3]);
  });

  it("return [1] for e", () => {
    const result1 = letterPositions("test");
    assert.deepEqual(result1.e, [1]);
  });

  it("return [2] for s", () => {
    const result1 = letterPositions("test");
    assert.deepEqual(result1.s, [2]);
  });
});