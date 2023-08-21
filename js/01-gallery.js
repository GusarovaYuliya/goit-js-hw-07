import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector(".gallery");
const renderList = galleryItems.map(
  (item) => `<li class="gallery_item">
  <a class="gallery_link" href="${item.original}">
  <img
  class="gallery_image"
  src="${item.preview}"
  data-sourse="${item.original}"
  alt="${item.description}"
  />
  </a>
  </li>`
);
 const galleryHTML = renderList.join("");
 listEl.insertAdjacentHTML("beforeend", galleryHTML);
 
const handleListClick = (event) => {
  event.preventDefault();
if (event.currentTurget === event.target) {
    return;
};

const currentListItem = event.target;
const imageItem = currentListItem.dataset.source;

const instance = basicLightbox.create(`
<div class="modal">
<img 
class="gallery_image"
src="${imageItem}" 
alt="${currentListItem.alt}" width="800" height="600">
</div>`)
instance.show();

};

// renderList(galleryItems);
listEl.addEventListener("click", handleListClick);
  
