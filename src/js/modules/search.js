import { renderList } from "./renderListBooks.js";
import { searchBooks } from "./serviceBook.js";

const btnsSearch = document.querySelectorAll(".header__btn_search");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");
const searchForm = document.querySelector(".search__form");

const closeSearch = ({ target }, flag) => {
  if (target.closest(".search, .header__btn_search") && !flag) {
    return;
  }
  search.classList.remove("search_active");
  document.body.removeEventListener("click", closeSearch);
};

btnsSearch.forEach((btn) => {
  btn.addEventListener("click", () => {
    search.classList.add("search_active");
    document.body.addEventListener("click", closeSearch, true);
  });
});

searchClose.addEventListener("click", () => {
  search.classList.remove("search_active");
});

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const books = await searchBooks(searchForm.searchValue.value);
  renderList(books);
  searchForm.reset();
  closeSearch(e, search);
});
