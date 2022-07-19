import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryImgMarkup(images) {
    return images.reduce((acc, img) => acc + `<a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" /></a>`, "")
}

galleryEl.insertAdjacentHTML('afterbegin', createGalleryImgMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
