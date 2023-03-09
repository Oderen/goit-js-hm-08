// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

function addMarkUp(galleryItems) {
  return galleryItems.map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
  )
    .join('');
};

const gallery = document.querySelector('.gallery');
const cardMarkUp = addMarkUp(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardMarkUp);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

