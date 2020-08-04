/**
 *
 * @param {string} str
 * @returns {string} trimmed string
 */

function trimStartAndEnd(str) {
  let res = str.trimEnd();
  res = res.trimStart();
  return res;
}

/**
 *
 * @param {string} value
 * @returns {string} with plus marks instead of empty spaces
 */
export function makeURLComponent(value) {
  let res = trimStartAndEnd(value.toLowerCase());
  const reg = /\s/gi;

  if (reg.test(res)) {
    res = res.replace(reg, '+');
  }
  return res;
}

/**
 * @description adds or remove classes from corresponding HTML element
 * @param {HTMLElement} elem
 * @returns {void}
 */
export function setAnimation(elem) {
  if (elem.classList.contains('start-loading')) {
    elem.classList.remove('start-loading');
  } else {
    elem.classList.add('start-loading');
  }
}
