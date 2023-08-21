import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = galleryItems
.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img
<<<<<<< HEAD
  class="gallery__image"
  src="${preview}"
  data-sourse="${original}"
  alt="${description}"
=======
  class="gallery_image"
  src="${item.preview}"
  data-sourse="${item.original}"
  alt="${item.description}"
  width="360"
>>>>>>> f33b01c9a338b152c598f2aecd976c2954a4e5ff
  />
  </a>
  </li>`;
})
.join("");

 listEl.insertAdjacentHTML("beforeend", renderList);
 
 listEl.addEventListener("click", imageClick);

function handleListClick(e) {
  event.preventDefault();

<<<<<<< HEAD
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
=======
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
  
>>>>>>> f33b01c9a338b152c598f2aecd976c2954a4e5ff
