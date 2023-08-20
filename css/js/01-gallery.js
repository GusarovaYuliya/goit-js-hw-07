import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = (arr, container) => {
    const markup = arr
    .map(
        (item) => `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"
          />
        </a>
      </li>`
    )
    .join("");

    container.insertAdjacentHTML("beforeend", markup);
};

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

renderList(galleryItems, listEl);
listEl.addEventListener("click", handleListClick);























