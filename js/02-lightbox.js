import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", markup(galleryItems));

galleryList.addEventListener("click", handleClick);

function markup(arr) {
  return arr
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery__link", {
    captionDelay: 250,
    captionsData: "alt",
  });
}
