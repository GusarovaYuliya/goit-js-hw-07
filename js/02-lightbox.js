import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = (arr, container) => {
    const markup = arr.map((item) => `<li class="gallery_item">
    <a class="gallery_link" href="${item.original}">
    <img
    class="gallery_image"
    src="${item.previev}"
    alt="${item.description}"
    width="360"
    />
    </a>
    </li>`).join("");

    container.insertAdjacentHTML("afterbegin", markup);
}

renderList(galleryItems, listEl);
