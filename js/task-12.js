import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.list');
const listImg = document.querySelector('.listImg');
const items = document.querySelectorAll('.list li');
const button = document.querySelector('button');

let filterName = 'HTML';
let limit = 3;

//navigation menu
list.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName !== 'LI') return;

  filterName = e.target.dataset.source;
  limit = 3;

  const markup = elementsByFilter({ filterName, limit });
  listImg.innerHTML = markup;

  highlight(e.target);
});

function highlight(li) {
  items.forEach(item => {
    if (item.classList.contains('highlight')) {
      item.classList.remove('highlight');
      return;
    }
  });

  li.classList.add('highlight');
}

button.addEventListener('click', () => {
  limit += 3;
  const markup = elementsByFilter({ filterName, limit });
  listImg.innerHTML = markup;
});

const elementsByFilter = ({ filterName, limit }) => {
  return galleryItems
    .filter(({ description }) => description === filterName)
    .slice(0, limit)
    .map(({ title }) => {
      return `
        <li>
          ${title}
        </li>
        `;
    })
    .join('');
};

const markup = elementsByFilter({ filterName, limit });
listImg.innerHTML = markup;
