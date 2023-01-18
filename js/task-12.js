import { fetchPixabay } from './gallery-items.js';

const list = document.querySelector('.filter');
const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.filter li');
const button = document.querySelector('button');

let filterName = 'car';
let page = 1;
let limit = 3;
let disabled = false;
let length = 0;

//navigation menu
list.addEventListener('click', e => {
  e.preventDefault();

  // не больше одного клика в 500 м/с
  if (disabled) return;
  disabled = true;
  setTimeout(() => (disabled = false), 1000);

  if (e.target.tagName !== 'LI') return;

  filterName = e.target.dataset.source;

  page = 1;
  length = 0;

  doStuff();
  galleryActive(e.target);
});

function galleryActive(li) {
  items.forEach(item => {
    if (item.classList.contains('filter__items--active')) {
      item.classList.remove('filter__items--active');
      return;
    }
  });

  li.classList.add('filter__items--active');
}

button.addEventListener('click', () => {
  // не больше одного клика в 500 м/с
  if (disabled) return;

  disabled = true;

  setTimeout(() => (disabled = false), 1000);

  page += 1;

  doStuff();
});

const renderPosts = hits => {
  return hits
    .map(({ largeImageURL, webformatURL, tags }) => {
      return `
        <a class="gallery__item" href="${largeImageURL}">
            <img class="gallery__image" src="${webformatURL}" alt="${tags}" title="Beautiful Image"/>
        </a>
      `;
    })
    .join('');
};

doStuff();

async function doStuff() {
  try {
    const picture = await fetchPixabay(filterName, page, limit);
    const { totalHits, hits } = picture;
    console.log(totalHits);

    if (!hits.length) {
      gallery.innerHTML = '';
      button.setAttribute('disabled', 'disabled');
      return;
    }

    length += hits.length;

    if (totalHits === length) {
      button.setAttribute('disabled', 'disabled');
    } else if (button.hasAttribute('disabled')) {
      button.removeAttribute('disabled');
    }

    if (page === 1) {
      gallery.innerHTML = renderPosts(hits);
    } else {
      gallery.insertAdjacentHTML('beforeend', renderPosts(hits));
    }
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
});
