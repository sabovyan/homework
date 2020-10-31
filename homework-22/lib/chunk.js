function chunk(arr, num) {
  // is not an array
  if (!(arr instanceof Array)) throw new Error(`${arr} is not an array`);

  // is not a number
  if (typeof num !== 'number') throw new Error(`${num} is not a number`);
  if (Number.isNaN(num)) throw new Error(`${num} is not a number`);
  if (!Number.isFinite(num)) throw new Error(`${num} is not finite`);

  const res = [];

  // less than or equal
  if (num <= 0) return res;

  // greater than or equal
  if (num >= arr.length) {
    res.push(arr);
    return res;
  }

  res.push(arr.slice(0, num));
  res.push(arr.slice(num));

  return res;
}

module.exports = chunk;
