const { test, expect, describe } = require('@jest/globals');
const filterByRange = require('../lib/filterByRange');
const { positive, negative } = require('../__fixtures__/numbers');

describe('filter by range', () => {
  test('basic test', () => {
    expect(filterByRange(positive, 9, 23)).toEqual([10, 20]);
  });

  test('returns an empty Array', () => {
    expect(filterByRange(positive, 39, 93)).toEqual([]);
  });

  test('test with negative numbers', () => {
    expect(filterByRange(negative, -9, -29)).toEqual([-10, -20]);
  });

  test('test with the same numbers', () => {
    expect(filterByRange(positive, 15, 15)).toEqual([1, 10]);
  });
});

//  [-10, -8, 0, 10]
// console.log(filterRange([-10, -8, 0, 15, 20], 15, 15));
