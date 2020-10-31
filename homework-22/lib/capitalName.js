const getData = require('./getData');
const makeUpperCase = async (country) => {
  try {
    if (!country) throw new Error('Not Armenia');
    const capital = await getData(country);
    return capital.toUpperCase();
  } catch (err) {
    return err;
  }
};

module.exports = makeUpperCase;
