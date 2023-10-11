import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items
        .map(
            (item) => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img 
        class="gallery__image"
         src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
/>
        </a> 
        </li>`
        )
        .join("");
}

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const options = {
    captionsData: 'alt',
    captionDelay: 250,
};

const lightboxRef = new SimpleLightbox('.gallery a', options);