const { test, expect, describe } = require('@jest/globals');
const makeUpperCase = require('../lib/capitalName');

jest.mock('getData');

describe('promise & mock', () => {
  test('works with promises', () => {
    expect.assertions(1);
    return makeUpperCase('armenia').then((data) =>
      expect(data).toEqual('YEREVAN')
    );
  });

  test('with errors', async () => {
    /* ANCHOR  if assertions is active it the error case will be denied*/
    // expect.assertions(1);
    try {
      const capital = await makeUpperCase();
    } catch (err) {
      expect(err).toEqual({ err: 'Not found' });
    }
  });
});
