function find(obj, item) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(obj)) {
    if (key === item) {
      return item;
    }
  }
  return 'Oops! Your bad!';
}
