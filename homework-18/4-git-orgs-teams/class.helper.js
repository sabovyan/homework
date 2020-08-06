/* eslint-disable camelcase */
/**
 * @class Member
 * @returns an abject of information about each organization member
 */

export class Member {
  /**
   * @param {Link} avatar_url
   * @param {Link} html_url
   * @param {string} location
   * @param {string} login
   * @param {string} name
   * @param {number} public_repos
   */
  constructor(avatar_url, html_url, location, login, name, public_repos) {
    this.personal = {
      login,
      name,
      html_url,
      avatar_url,
    };
    this.location = location;
    this.repos = public_repos;
  }
}
