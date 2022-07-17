import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


function createGalleryImgMarkup(images) {
  return images.map(img => `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`).join('');
}


galleryEl.innerHTML = createGalleryImgMarkup(galleryItems);

galleryEl.addEventListener('click', onGalleryClick);


function onGalleryClick(event) {
  event.preventDefault();
  
  if (event.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)
    instance.show();

    window.addEventListener('keydown', onEscKeydown);
    function onEscKeydown(event) {
      if (event.code === 'Escape') {
        console.log(event.code);
        instance.close();
      }
    }
  }
}
