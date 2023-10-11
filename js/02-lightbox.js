import { galleryItems } from './gallery-items.js'; 

document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');

  galleryItems.forEach((item) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    galleryItem.innerHTML = `
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    `;
    galleryList.appendChild(galleryItem);
  });

  
  const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
    
});
