const chunk = require('../lib/chunk');
const { positive } = require('../__fixtures__/numbers');

describe('chunk function will split the array into two pieces', () => {
  test('when number is greater than 0 and less than arr.length', () => {
    expect(chunk(positive, 2)).toEqual([
      [1, 10],
      [20, 30],
    ]);
    expect(chunk(positive, 3)).toEqual([[1, 10, 20], [30]]);
  });

  test('when number is greater than or equal to the length of the array', () => {
    expect(chunk(positive, 4)).toEqual([positive]);
    expect(chunk(positive, 5)).toEqual([positive]);
  });

  test('when number is less than or equal to 0', () => {
    expect(chunk(positive, 0)).toEqual([]);
    expect(chunk(positive, -8)).toEqual([]);
  });

  describe('error cases', () => {
    test('undefined value', () => {
      expect(() => {
        chunk(positive, undefined);
      }).toThrowError();
    });

    test('null value', () => {
      expect(() => {
        chunk(positive, null);
      }).toThrowError();
    });

    test('not a number', () => {
      expect(() => {
        chunk(positive, NaN);
      }).toThrowError();
    });

    test('infinity value', () => {
      expect(() => {
        chunk(positive, Infinity);
      }).toThrowError();
      expect(() => {
        chunk(positive, -Infinity);
      }).toThrowError();
    });

    test('the first argument is not an array', () => {
      expect(() => {
        chunk(1, -Infinity);
      }).toThrowError();
    });
  });
});
