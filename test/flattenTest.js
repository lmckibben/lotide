const assert = require('chai').assert;
const flatten = require = require('../flatten');

describe("#flatten", () => {
  it("return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(flatten([[1], [2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});