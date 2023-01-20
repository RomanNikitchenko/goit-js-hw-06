const list = document.querySelector('.gallery__list');
const items = document.querySelectorAll('.gallery__list li');
const gallery = document.querySelector('.gallery');
const galleryItem = document.querySelectorAll('.gallery div');
const button = document.querySelector('button');

let filterName = 'all';
let limit = 2;
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

  limit = 2;

  galleryActive(e.target);
  doStuff();
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

  limit += 2;

  doStuff();
});

doStuff();

function doStuff() {
  const items = [];

  galleryItem.forEach(item => {
    if (item.dataset.source !== filterName && filterName !== 'all') {
      if (item.classList.contains('is-open')) {
        item.classList.remove('is-open');
      }
    }

    if (item.dataset.source === filterName) {
      if (limit === 2 && item.classList.contains('is-open')) {
        item.classList.remove('is-open');
      }
      items.push(item);
    }

    if (filterName === 'all') {
      if (limit === 2 && item.classList.contains('is-open')) {
        item.classList.remove('is-open');
      }
      items.push(item);
    }
  });

  for (let i = 0; i < limit; i += 1) {
    let item = items[i];

    if (!item) {
      button.setAttribute('disabled', 'disabled');
      return;
    }

    if (item.classList.contains('is-open')) {
      continue;
    }

    item.classList.add('is-open');
  }

  items.length <= limit
    ? button.setAttribute('disabled', 'disabled')
    : button.removeAttribute('disabled');
}
