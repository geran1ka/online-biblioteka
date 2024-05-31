import { getStars } from "./getStars.js";
import { API_URL, getBooks, getLabels } from "./serviceBook.js";

const bookContainer = document.querySelector(".book__container");
const bookLabelFooter = document.querySelector(".footer__btn.book__label");
const btnDelete = document.querySelector(".header__btn_delete");

export const renderBook = async (id) => {
  const [{ author, description, image, label, rating, title }, labels] =
    await Promise.all([getBooks(id), getLabels()]);

  bookContainer.textContent = "";

  const btnLabel = document.createElement("button");
  btnLabel.className = "book__label book__label_img";
  btnLabel.textContent = labels[label];
  btnLabel.dataset.label = label;

  bookContainer.innerHTML = `
    <div class="book__wrapper">
      <img class="book__img" src="${API_URL}${image}" alt="Обложка книги ${title}" />
      ${btnLabel.outerHTML}
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

  btnDelete.dataset.id = id;
  bookLabelFooter.dataset.label = label;
  bookLabelFooter.textContent = labels[label];
};
