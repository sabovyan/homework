const listItems = document.querySelectorAll('.c-list__item');
const toolTip = document.getElementById('toolTip');

/**
 * it will add of remove the class from the particular list item
 * @param {HTMLElement} particle one of the list items
 * @param {string} className the name of the class
 * @returns {void}
 */
function setStatus(particle, className) {
  if (particle.classList.contains(className)) {
    particle.classList.remove(className);
  } else {
    particle.classList.add(className);
  }
}

listItems.forEach((item) => {
  /**
   * toggles the class for particular item
   * @event mouseover
   * @listens item one of the list items
   *
   */
  item.addEventListener('mouseover', () => {
    setStatus(item, 'hover');
  });
  /**
   * toggles the class for particular item
   * @event mouseout
   * @listens item one of the list items
   *
   */
  item.addEventListener('mouseout', () => {
    setStatus(item, 'hover');
  });

  /**
   * toggles the class for particular item
   * if there is a mistake tooltip will be displayed
   * @event click
   * @listens item one of the list items
   *
   */
  item.addEventListener('click', () => {
    toolTip.innerText = '';
    if (item.previousElementSibling === null) {
      if (item.nextElementSibling.classList.contains('done')) {
        toolTip.innerText = '🤦‍♂️';
      } else {
        setStatus(item, 'done');
      }
    } else if (item.previousElementSibling.classList.contains('done')) {
      if (item.nextElementSibling === null) {
        setStatus(item, 'done');
      } else if (
        item.nextElementSibling.classList.contains('done') &&
        !(item.nextElementSibling === null)
      ) {
        toolTip.innerText = '🤦‍♂️';
      } else {
        setStatus(item, 'done');
      }
    } else {
      toolTip.innerText = '🤦‍♂️';
    }
  });
});
