import { getStars } from "./getStars.js";
import { API_URL, getBooks, getLabels } from "./serviceBook.js";

const bookContainer = document.querySelector(".book__container");
const bookLabelFooter = document.querySelector(".footer__btn.book__label");

export const renderBook = async (idBooks) => {
  const [{ author, description, id, image, label, rating, title }, labels] =
    await Promise.all([getBooks(idBooks), getLabels()]);

  bookContainer.textContent = "";

  bookContainer.innerHTML = `
    <div class="book__wrapper">
      <img class="book__img" src="${API_URL}${image}" alt="Обложка книги ${title}" />
      <button class="book__label book__label_img">${labels[label]}</button>
    </div>

    <div class="book__content">
      <h2 class="book__title">${title}</h2>
      <p class="book__author">${author}</p>

      <div class="book__rating">
        ${getStars(rating, "book__rating-star").join("")}
      </div>

      <h3 class="book__subtitle">Описание</h3>

      <p class="book__description">
        ${description}
      </p>
    </div>
  `;

  bookLabelFooter.textContent = labels[label];
};
