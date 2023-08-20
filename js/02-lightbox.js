import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
const renderList = galleryItems.map(
  (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}"
  alt="${item.description}"
  />
  </a>
  </li>`
);
 const galleryHTML = renderList.join("");
 listEl.insertAdjacentHTML("beforeend", galleryHTML);

 