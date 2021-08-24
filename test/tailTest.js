const assert = require('chai').assert;
const tail = require(('../tail'));

describe("#tail", () => {
  it("return ['House, 'Labs'] for ['Light', 'House', 'Labs']", () => {
    const array = ['Light', 'House', 'Labs'];
    assert.deepEqual(tail(array), ['House', 'Labs']);

  });

  it("return [2, 3, 4, 5,] for [1, 2, 3, 4, 5]", () => {
    const array = [1, 2, 3, 4, 5];
    assert.deepEqual(tail(array), [2, 3, 4, 5]);
  });

  it("return [] for [1]", () => {
    const array = [1];
    assert.deepEqual(tail(array), []);
  });
  
  it("return [] for [1]", () => {
    const array = [1];
    assert.deepEqual(tail(array), []);
  });

  it("return [] for []", () => {
    const array = [];
    assert.deepEqual(tail(array), []);
  });
});

