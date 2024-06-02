import { declOfNum } from "./declOfNum.js";
import { getStars } from "./getStars.js";
import { API_URL, getBooks, getLabels } from "./serviceBook.js";

export const data = {
  books: [],
  labels: [],
  sortBook(sort) {
    return this.books.sort((a, b) => {
      if (sort == "up") return a.rating > b.rating ? 1 : -1;

      if (sort == "down") return a.rating < b.rating ? 1 : -1;
    });
  },
  filterBook(value) {
    return this.books.filter((book) => book.label === value);
  },
};

const libraryList = document.querySelector(".library__list");
const fieldsList = document.querySelector(".fields__list_filter");
const libraryCount = document.querySelector(".library__count");

export const renderList = (books = data.books, labels = data.labels) => {
  libraryList.textContent = "";

  libraryCount.textContent = declOfNum(books.length, [
    "книга",
    "книги",
    "книг",
  ]);

  const items = books.map(
    ({ author, description, id, image, label, rating, title }) => {
      const li = document.createElement("li");
      li.classList.add("library__item");
      li.innerHTML = `
      <a href="/#/book?id=${id}" class="library__link">
      <article class="cart">
        <div class="cart__wrapper">
          <img
            class="cart__img"
            src="${API_URL}${image}"
            alt="Обложка книги ${title}"
          />

          <p class="cart__label">${labels[label]}</p>
        </div>

        <div class="cart__content">
          <h3 class="cart__title">${title}</h3>
          <p class="cart__author">${author}</p>

          <p class="cart__description">
            ${description.substring(0, 80)}
          </p>

          <div class="cart__rating">
          ${getStars(rating, "cart__rating-star").join("")}
        </div>
      </article>
    </a>
    `;

      return li;
    }
  );

  libraryList.append(...items);
};

const renderFields = (labels) => {
  fieldsList.textContent = "";

  for (const key in labels) {
    const item = document.createElement("li");
    item.className = "fields__item";

    const button = document.createElement("button");
    button.className = "fields__button";
    button.dataset.filter = key;
    button.textContent = labels[key];

    item.append(button);
    fieldsList.append(item);
  }
};

export const renderListBooks = async () => {
  const [books, labels] = await Promise.all([getBooks(), getLabels()]);
  data.books = books;
  data.labels = labels;
  renderList(books);
  renderFields(labels);
};
