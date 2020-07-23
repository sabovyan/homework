const container = document.querySelector('.c-list__container');
const listItems = document.querySelectorAll('.c-list__item');
const toolTip = document.getElementById('toolTip');

function setStatus(particle) {
  if (particle.classList.contains('done')) {
    particle.classList.remove('done');
  } else {
    particle.classList.add('done');
  }
}

listItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hover');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hover');
  });

  item.addEventListener('click', () => {
    toolTip.innerText = '';
    if (item.previousElementSibling === null) {
      if (item.nextElementSibling.classList.contains('done')) {
        toolTip.innerText = 'Ooops!';
      } else {
        setStatus(item);
      }
    } else if (item.nextElementSibling === null) {
      if (!item.previousElementSibling.classList.contains('done')) {
        toolTip.innerText = 'Ooops!';
      } else {
        setStatus(item);
      }
    } else {
      if (item.previousElementSibling.classList.contains('done')) {
        setStatus(item);
      } else if (item.nextElementSibling.classList.contains('done')) {
        toolTip.innerText = 'Ooops!';
      } else {
        toolTip.innerText = 'Ooops!';
      }
    }
  });
});
/*  if (
      !(item.previousElementSibling === null) &&
      !(item.nextElementSibling === null)
    ) {
      if (
        item.previousElementSibling.classList.contains('done') &&
        !item.nextElementSibling.classList.contains('done')
      ) {
        setStatus(item);
      }
    } else if (item.previousElementSibling === null) {
      if (!item.nextElementSibling.classList.contains('done')) {
        setStatus(item);
      }
    } else if (item.nextElementSibling === null) {
      if (item.previousElementSibling.classList.contains('done')) {
        setStatus(item);
      }
    } else {
      toolTip.innerText = 'Ooops!';
    }
 */
