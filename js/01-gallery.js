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
  alt="${item.description}"
  width="340"
  />
  </a>
  </li>`
);
 const galleryHTML = renderList.join("");
 listEl.insertAdjacentHTML("beforeend", galleryHTML);
 
const handleListClick = (event) => {
if (event.currentTurget === event.target) {
    return;
};

const currentListItem = event.target.closest(".gallery__item");

const instanceModal = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instanceModal.show()
}

// renderList(galleryItems);
listEl.addEventListener("click", handleListClick);
