/**
 * @description a function that is going to create  html elements
 * @param {object} member
 * @returns {HTMLElement}
 */
export function createHTML(member) {
  const container = document.createElement('div');
  container.classList.add('member__container');
  container.style.cssText = `
  background: url(${member.personal.avatar_url});
  background-size: 100%;
  background-position: 50%;`;
  const details = document.createElement('div');
  details.classList.add('member__details');

  const list = document.createElement('ul');
  list.classList.add('details__list');

  for (const [key, val] of Object.entries(member)) {
    const item = document.createElement('li');
    item.classList.add('details__item');

    if (key === 'personal') {
      const a = document.createElement('a');
      a.setAttribute('href', member.personal.html_url);
      a.innerText = member.personal.name || member.personal.login;
      item.append(a);
    } else if (key === 'repos') {
      item.innerHTML = `<span>${key}: ${val}</span>`;
    } else {
      const span = document.createElement('span');
      span.textContent = val;
      item.append(span);
    }

    list.append(item);
  }
  details.append(list);

  container.append(details);

  return container;
}
