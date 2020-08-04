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

export const getPagesNumber = (num) => {
  const numOfPages = Math.ceil(num / 100);
  return numOfPages;
};

export function styleForm(layout) {
  if (window.innerWidth <= 500) {
    layout.style.cssText = `height: 100px;
        `;
  } else {
    layout.style.cssText = `height: 100px;
      flex-direction: row;`;
  }
}
