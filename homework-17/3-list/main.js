const listItems = document.querySelectorAll('.c-list__item');
const toolTip = document.getElementById('toolTip');

function setStatus(particle, className) {
  if (particle.classList.contains(className)) {
    particle.classList.remove(className);
  } else {
    particle.classList.add(className);
  }
}

listItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    setStatus(item, 'hover');
  });

  item.addEventListener('mouseout', () => {
    setStatus(item, 'hover');
  });

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
