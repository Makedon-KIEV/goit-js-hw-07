import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onModalOpen);

function renderGallery(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </div>`,
    )
    .join(' ');
}

const instance = basicLightbox.create(`
    <div class="modal">
        <img src="" alt="" width="800" height="600"/>
    </div>
`);

function onModalOpen(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = e.target.dataset.source;
  instance.element().querySelector('img').alt = e.target.alt;

  instance.show();

  window.addEventListener('keydown', onModalClose);
  instance.element().addEventListener('click', onModalClose);
}

function onModalClose(e) {
  if (e.code === 'Escape' || e.currentTarget.nodeName === 'DIV') {
    instance.close();
    window.removeEventListener('keydown', onModalClose);
  }
}
