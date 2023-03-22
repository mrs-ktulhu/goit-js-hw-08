import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line
const galleryImage = document.querySelector(".gallery");

console.log(galleryItems);

function addGallery(galleryItems) {
    const markup = galleryItems.map(img => 
        `<a class="gallery__item" href"${img.original}">
        <img class="gallery__image" src="${img.preview}" alt="${img.description}"/>
        </a>`).join('');
        galleryImage.innerHTML = markup
};
addGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionData: 'alt',
});
console.log(galleryItems);