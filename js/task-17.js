const refs = {
  body: document.querySelector('body'),
  galleryRef: document.querySelector('.gallery__container'),

  backdropRef: document.querySelector('.backdrop, .movie-modal-wrap'),
};

function handleMovieCardClick(e) {
  e.preventDefault();

  if (e.target.dataset.action !== 'open-modal') {
    return;
  }

  openModal();
}

export function openModal() {
  refs.backdropRef.classList.toggle('is-hidden');
  refs.body.classList.add('modal-is-open');
}

refs.galleryRef.addEventListener('click', handleMovieCardClick);
