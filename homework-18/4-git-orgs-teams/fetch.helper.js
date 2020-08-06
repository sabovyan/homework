import { TOKEN } from './constants.js';

/**
 * @description takes generated token and fetches data from the organization
 * @param {link} url
 * @param {string} login user's login name
 */
export async function doFetch(url, login) {
  const method = {
    method: 'GET',
    headers: {
      authorization: `Token ${TOKEN}`,
    },
  };

  let input;
  if (login) {
    input = `${url}/${login}`;
  } else {
    input = url;
  }
  const response = await fetch(input, method);
  const json = await response.json();

  return json;
}
