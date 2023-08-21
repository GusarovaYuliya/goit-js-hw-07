import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = galleryItems
.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img
  class="gallery__image"
  src="${preview}"
  data-sourse="${original}"
  alt="${description}"
  />
  </a>
  </li>`;
})
.join("");

 listEl.insertAdjacentHTML("beforeend", renderList);
 
 listEl.addEventListener("click", handleListClick);

function handleListClick(e) {
  event.preventDefault();

if (e.target.nodeName !== "IMG") {
  return;
}

const instance = basicLightbox.create(
  `<img src="${e.target.dataset.source}" width="800" height="600">`,
{

  onShow() {
    listEl.addEventListener("keydown", onKeyDown);
  },
  onClose() {
    listEl.removeEventListener("keydown", onKeyDown);
  },
}
);
instance.show();

function onKeyDown(e) {
  if (e.code !== "Escape") {
    return;
  }

  instance.close();
}
}



