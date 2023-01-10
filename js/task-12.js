import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.list');
const listImg = document.querySelector('.listImg');
const items = document.querySelectorAll('.list li');
const button = document.querySelector('button');

let filterName = 'HTML';
let limit = 3;
let disabled = false;

//navigation menu
list.addEventListener('click', e => {
  e.preventDefault();

  // не больше одного клика в 500 м/с
  if (disabled) return;

  disabled = true;

  setTimeout(() => disabled = false, 500);

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

  // не больше одного клика в 500 м/с
  if (disabled) return;

  disabled = true;

  setTimeout(() => disabled = false, 500);

  limit += 3;

  const markup = elementsByFilter({ filterName, limit });
  listImg.innerHTML = markup;
});

const elementsByFilter = ({ filterName, limit }) => {
  const itemsFilter = galleryItems.filter(({ description }) => description === filterName);
  const itemsFilterSlice = itemsFilter.slice(0, limit).map(({ title }) => `<li>${title}</li>`).join('');
  itemsFilter.length <= limit ? button.setAttribute("disabled", "disabled") : button.removeAttribute("disabled");
  return itemsFilterSlice;
};

const markup = elementsByFilter({ filterName, limit });
listImg.innerHTML = markup;
