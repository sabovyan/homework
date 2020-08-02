export async function getData(component) {
  const response = await fetch(
    `http://openlibrary.org/search.json?q=${component}`
  );
  const json = await response.json();
  return json;
}
