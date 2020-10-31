const fetch = require('node-fetch');

function getData(country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => data[0].capital);
}

module.exports = getData;
