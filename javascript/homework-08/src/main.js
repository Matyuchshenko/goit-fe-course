"use strict";

import images from "./gallery-items.js";

const createGalleryMarkup = (image) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("gallery__item");

  const linkRef = document.createElement("a");
  linkRef.classList.add("gallery__link");
  linkRef.setAttribute("href", image.original);

  const imageRef = document.createElement("img");
  imageRef.classList.add("gallery__image");
  imageRef.setAttribute("src", image.preview);
  imageRef.setAttribute("data-source", image.original);
  imageRef.setAttribute("alt", image.description);

  linkRef.appendChild(imageRef);
  itemRef.appendChild(linkRef);

  return itemRef;
};

const galleryMarkup = images.map((image) => createGalleryMarkup(image));

const imagesListRef = document.querySelector(".js-gallery");
imagesListRef.append(...galleryMarkup);
// ==================================================================
const refs = {
  photo: document.querySelector(".js-gallery"),
};
refs.photo.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const nextActiveDiv = document.querySelector(".js-lightbox");
  const nextActivePhoto = document.querySelector(".lightbox__image");
  const closeModalButton = document.querySelector(
    'button[data-action="close-lightbox"]'
  );
  const closeModalOverlay = document.querySelector(".lightbox__content");

  nextActiveDiv.classList.add("is-open");
  nextActivePhoto.setAttribute("src", event.target.dataset.source);
  nextActivePhoto.setAttribute("alt", event.target.alt);

  closeModalButton.addEventListener("click", () => {
    nextActiveDiv.classList.remove("is-open");
    nextActivePhoto.setAttribute("src", "");
    nextActivePhoto.setAttribute("alt", "");
  });

  closeModalOverlay.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      nextActiveDiv.classList.remove("is-open");
    }
  });
}
