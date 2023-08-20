import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = (arr) => {
    const markup = arr.map((item) => `<li class="gallery_item">
    <a class="gallery_link" href="${item.original}">
    <img
    class="gallery_image"
    src="${item.preview}"
    alt="${item.description}"
    width="340"
    />
    </a>
    </li>`).join("");

    // container.insertAdjacentHTML("afterbegin", markup);
}

renderList(galleryItems);
