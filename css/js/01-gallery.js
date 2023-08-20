import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
const renderList = galleryItems.map(
  (item) => `<li class="gallery_item">
  <a class="gallery_link" href="large-image.jpg">
  <img
  class="gallery_image"
  src="small-image.jpg"
  data-sourse="large-image.jpg"
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



// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });


const currentListItem = event.target.closest(".gallery__item");


const form = document.querySelector(".register-form");


};

// renderList(galleryItems);
listEl.addEventListener("click", handleListClick);


















