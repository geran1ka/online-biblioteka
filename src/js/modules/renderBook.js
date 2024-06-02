import { debounce } from "./debounce.js";
import { getStars } from "./getStars.js";
import { router } from "./router.js";
import {
  API_URL,
  deleteBooks,
  editBooks,
  getBooks,
  getLabels,
} from "./serviceBook.js";

const bookContainer = document.querySelector(".book__container");
const bookLabelFooter = document.querySelector(".footer__btn.book__label");
const btnDelete = document.querySelector(".header__btn_delete");
let timerId;

const changeLabel = async ({ target }) => {
  const labels = await getLabels();
  const labelKeys = Object.keys(labels);
  const labelNow = target.dataset.label;

  const index = labelKeys.indexOf(labelNow);

  const indexNext = (index + 1) % labelKeys.length;

  let labelNext = labelKeys[indexNext];

  document.querySelectorAll(".book__label").forEach((btn) => {
    btn.dataset.label = labelNext;
    btn.textContent = labels[labelNext];
  });

  clearTimeout(timerId);

  timerId = setTimeout(() => {
    editBooks(target.dataset.id, {
      label: labelNext,
    });
  }, 1000);
};

bookLabelFooter.addEventListener("click", changeLabel);

btnDelete.addEventListener("click", async () => {
  await deleteBooks(btnDelete.dataset.id);
  router.navigate("/");
});

export const renderBook = async (id) => {
  const [{ author, description, image, label, rating, title }, labels] =
    await Promise.all([getBooks(id), getLabels()]);

  bookContainer.textContent = "";

  const btnLabel = document.createElement("button");
  btnLabel.className = "book__label book__label_img";
  btnLabel.textContent = labels[label];
  btnLabel.dataset.label = label;
  btnLabel.dataset.id = id;
  btnLabel.addEventListener("click", changeLabel);

  bookContainer.innerHTML = `
    <div class="book__wrapper">
      <img class="book__img" src="${API_URL}${image}" alt="Обложка книги ${title}" />
      
      <button class="book__label book__label_img" data-label="${label}" data-id="${id}">${
    labels[label]
  }</button>
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
  bookLabelFooter.dataset.id = id;
  bookLabelFooter.textContent = labels[label];
};
