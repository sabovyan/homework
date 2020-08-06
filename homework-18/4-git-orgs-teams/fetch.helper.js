export async function doFetch(url, login) {
  const method = {
    method: 'GET',
    headers: {
      authorization: 'Token 5598636f00900021798787544972300bc1af6810',
    },
  };
  let response, json, input;
  if (login) {
    input = `${url}/${login}`;
  } else {
    input = url;
  }
  response = await fetch(input, method);
  json = await response.json();

  return json;
}
