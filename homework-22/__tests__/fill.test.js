const { test, describe, expect } = require('@jest/globals');
const myFill = require('../lib/fill');
const fruits = require('../__fixtures__/fruits');

describe('fill', () => {
  test('to replace all the items', () => {
    expect(myFill(fruits, 'kiwi')).toEqual(['kiwi', 'kiwi', 'kiwi', 'kiwi']);
  });

  test('to replace items with one argument', () => {
    expect(myFill(fruits, 'kiwi', 2)).toEqual([
      'Banana',
      'Orange',
      'kiwi',
      'kiwi',
    ]);
  });

  test('to replace all the items with two arguments', () => {
    expect(myFill(fruits, 'kiwi', 1, 4)).toEqual([
      'Banana',
      'kiwi',
      'kiwi',
      'kiwi',
    ]);
  });

  test('to replace only first two arguments', () => {
    expect(myFill(fruits, 'kiwi', 0, 2)).toEqual([
      'kiwi',
      'kiwi',
      'Apple',
      'Mango',
    ]);
  });

  test('to replace all the items with negative argument', () => {
    expect(myFill(fruits, 'kiwi', 0, -1)).toEqual([
      'kiwi',
      'kiwi',
      'kiwi',
      'Mango',
    ]);
  });

  test('to replace all the items with 2 negative argument', () => {
    expect(myFill(fruits, 'kiwi', -3, -2)).toEqual([
      'Banana',
      'kiwi',
      'Apple',
      'Mango',
    ]);
  });
});
