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
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalSrc = event.target.getAttribute("data-source");

  const EscClose = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `
    <img src="${originalSrc}">
`,
    {
      onShow: (instance) => window.addEventListener("keydown", EscClose),
      onClose: (instance) => window.removeEventListener("keydown", EscClose),
    }
  );

  instance.show();
}
