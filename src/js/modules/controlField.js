import { data, renderList } from "./renderListBooks.js";

export const controlField = (btn, list, offList) => {
  btn.addEventListener("click", () => {
    list.classList.toggle("fields__list_active");
    offList.classList.remove("fields__list_active");
  });

  list.addEventListener("click", ({ target }) => {
    if (target.closest(".fields__button")) {
      list.classList.remove("fields__list_active");

      if (target.dataset.sort) {
        data.sortBook(target.dataset.sort);
        renderList();
      }

      if (target.dataset.filter) {
        const btns = list.querySelectorAll(".fields__button");
        btns.forEach((btn) => btn.classList.remove("fields__button_selected"));
        target.classList.add("fields__button_selected");
        const filteredData = data.filterBook(target.dataset.filter);
        renderList(filteredData);
      }
    }
  });
};
