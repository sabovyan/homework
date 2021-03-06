import { Member } from './class.helper.js';
import { doFetch } from './fetch.helper.js';
import { createHTML } from './dom.helper.js';
import { BASE_URL, MEMBER_URL } from './constants.js';

const container = document.querySelector('.container');

/**
 * @type {Function}
 * @returns {Promise} a promice with all the members
 * @example
 * getData();
 */
async function getData() {
  const members = await doFetch(BASE_URL);
  members.forEach(async (member) => {
    const memberData = await doFetch(MEMBER_URL, member.login);
    const {
      avatar_url,
      html_url,
      location,
      login,
      name,
      public_repos,
    } = memberData;

    const newMember = new Member(
      avatar_url,
      html_url,
      location,
      login,
      name,
      public_repos
    );
    const elem = createHTML(newMember);
    container.append(elem);
  });

  return members;
}
getData();
