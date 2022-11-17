import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const itemMarkup = createGaleryItem(galleryItems);
gallery.insertAdjacentHTML('beforeend', itemMarkup);

function createGaleryItem(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class = "gallery__image"
            src="${preview}"            
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
