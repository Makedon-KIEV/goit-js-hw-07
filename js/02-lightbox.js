import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function renderGallery(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<li>
          <a class="gallery__item" href="${original}">
              <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
              />
          </a>
        </li>`,
    )
    .join(' ');
}

const modalLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
