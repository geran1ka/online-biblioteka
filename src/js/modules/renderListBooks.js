import { getStars } from "./getStars.js";
import { API_URL, getBooks, getLabels } from "./serviceBook.js";

const libraryList = document.querySelector(".library__list");

export const renderListBooks = async () => {
  const [books, labels] = await Promise.all([getBooks(), getLabels()]);

  libraryList.textContent = "";

  books.forEach(({ author, description, id, image, label, rating, title }) => {
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

    libraryList.append(li);
  });
};
