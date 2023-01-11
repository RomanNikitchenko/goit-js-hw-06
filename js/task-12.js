import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery__list');
const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.gallery__list li');
const button = document.querySelector('button');

let filterName = 'all';
let page = 0;
let limit = 3;
let disabled = false;

//navigation menu
list.addEventListener('click', e => {
  e.preventDefault();

  // не больше одного клика в 500 м/с
  if (disabled) return;

  disabled = true;

  setTimeout(() => (disabled = false), 500);

  if (e.target.tagName !== 'LI') return;

  filterName = e.target.dataset.source;

  page = 0;
  limit = 3;

  doStuff({ filterName, page, limit });

  galleryActive(e.target);
});

function galleryActive(li) {
  items.forEach(item => {
    if (item.classList.contains('gallery__active')) {
      item.classList.remove('gallery__active');
      return;
    }
  });

  li.classList.add('gallery__active');
}

button.addEventListener('click', () => {
  // не больше одного клика в 500 м/с
  if (disabled) return;

  disabled = true;

  setTimeout(() => (disabled = false), 500);

  page += 3;
  limit += 3;

  doStuff({ filterName, page, limit });
});

const elementsByFilter = async ({ filterName, page, limit }) => {
  const itemsFilter = await galleryItems.filter(({ f }) => f.includes(filterName));
  const itemsFilterSlice = itemsFilter
    .slice(page, limit)
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}" title="Beautiful Image"/>
        </a>
      `
    })
    .join('');
  itemsFilter.length <= limit
    ? button.setAttribute('disabled', 'disabled')
    : button.removeAttribute('disabled');
  return itemsFilterSlice;
};

doStuff({ filterName, page, limit });

async function doStuff({ filterName, page, limit }) {
  try {
    const markup = await elementsByFilter({ filterName, page, limit });
    if (markup)
      page === 0 ? (gallery.innerHTML = markup) : gallery.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    button.setAttribute('disabled', 'disabled');
    gallery.innerHTML = `<div>${error.message}</div>`;
  }
}

gallery.addEventListener('click', evt => {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  displaysModal(evt.target.dataset.source);
});

function displaysModal(image) {
    basicLightbox.create(`
		<img width="1400" height="900" src="${image}">
	`).show();
}
