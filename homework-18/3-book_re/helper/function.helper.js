function trimStartAndEnd(str) {
  let res = str.trimEnd();
  res = res.trimStart();
  return res;
}

export function makeURLComponent(value) {
  let res = trimStartAndEnd(value.toLowerCase());
  const reg = /\s/gi;

  if (reg.test(res)) {
    res = res.replace(reg, '+');
  }
  return res;
}
