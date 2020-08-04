import { BASE_URL } from './constants.js';

/**
 * @description fetches a data based on arguments and BASE_URL
 * @param {string} component
 * @param {number} page
 * @returns {Promise}
 */
export async function getData(component, page = null) {
  let response = null;
  if (page) {
    response = await fetch(`${BASE_URL}${component}&page=${page}`);
  } else {
    response = await fetch(`${BASE_URL}${component}`);
  }
  const json = await response.json();
  return json;
}
