import Navigo from "navigo";

const library = document.querySelector(".library");
const book = document.querySelector(".book");
const add = document.querySelector(".add");
const addBtns = document.querySelectorAll(
  ".header__btn-add, .library__add-btn"
);
const backBtns = document.querySelectorAll(".header__btn_back");
const btnsSearch = document.querySelectorAll(".header__btn_search");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");
const fieldsBtnSort = document.querySelector(".fields__btn_sort");
const fieldsListSort = document.querySelector(".fields__list_sort");
const fieldsfBtnFilter = document.querySelector(".fields__btn_filter");
const fieldsListFilter = document.querySelector(".fields__list_filter");

const router = new Navigo("/", {
  hash: true,
});

const closeAllPage = () => {
  library.classList.add("hidden");
  book.classList.add("hidden");
  add.classList.add("hidden");
};

router
  .on({
    "/": () => {
      closeAllPage();
      library.classList.remove("hidden");
      document.body.classList.remove("body_gradient");
    },
    book: () => {
      closeAllPage();
      book.classList.remove("hidden");
      document.body.classList.add("body_gradient");
    },
    add: () => {
      closeAllPage();
      add.classList.remove("hidden");
      document.body.classList.add("body_gradient");
    },
  })
  .resolve();

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    router.navigate("add");
  });
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    router.navigate("/");
  });
});

const closeSearch = ({ target }) => {
  if (target.closest(".search, .header__btn_search")) {
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

const controlField = (btn, list, offList) => {
  btn.addEventListener("click", () => {
    list.classList.toggle("fields__list_active");
    offList.classList.remove("fields__list_active");
  });

  list.addEventListener("click", ({ target }) => {
    console.log("target: ", target);
    if (target.closest(".fields__button")) {
      list.classList.remove("fields__list_active");
    }
  });
};

controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
controlField(fieldsfBtnFilter, fieldsListFilter, fieldsListSort);

const changeFieldset = () => {
  const fieldsets = document.querySelectorAll(".add__fieldset");
  const addBtn = document.querySelector(".add__btn");
  const form = document.querySelector(".add__form");
  const btnBackStep = document.querySelector(".add__btn_back-step");

  let count = 0;

  addBtn.addEventListener("click", ({ target }) => {
    const fieldset = fieldsets[count];
    let valid = true;

    for (const elem of fieldset.elements) {
      if (!elem.checkValidity()) {
        elem.classList.add("no-validate");
        valid = false;
      } else {
        elem.classList.remove("no-validate");
      }
    }

    if (valid) {
      count += 1;

      if (count === fieldsets.length - 1) {
        addBtn.textContent = "Добавить книгу";
      }

      if (count >= fieldsets.length) {
        const data = true; // данные с сервера
        if (!data.error) {
          form.reset();
          router.navigate("/");
          count = 0;
          addBtn.textContent = "Далее";
        }
      }

      fieldset.classList.add("hidden");
      fieldsets[count].classList.remove("hidden");
    }
  });

  btnBackStep.addEventListener("click", () => {
    if (count > 0) {
      fieldsets[count].classList.add("hidden");
      count -= 1;
      fieldsets[count].classList.remove("hidden");
      console.log(count);
      if (count === fieldsets.length - 2) {
        addBtn.textContent = "Далее";
      }
    } else {
      form.reset();
      router.navigate("/");
    }
  });
};

changeFieldset();
