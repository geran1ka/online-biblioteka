import { router } from "./router.js";
import { addBooks } from "./serviceBook.js";
import { toBase64 } from "./toBase64.js";
import { clearPreview } from "./upload.js";

const fieldsets = document.querySelectorAll(".add__fieldset");
const addBtn = document.querySelector(".add__btn");
const form = document.querySelector(".add__form");
const btnBack = document.querySelector(".add__btn_back");
let count = 0;

const sendBook = async () => {
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);
  data.image = await toBase64(data.image);
  const book = await addBooks(data);
  if (book) {
    form.reset();
    clearPreview();
    router.navigate("/");
    addBtn.textContent = "Далее";
  }
};

const changeFieldset = () => {
  if (count === fieldsets.length - 1) {
    addBtn.textContent = "Добавить книгу";
  } else {
    addBtn.textContent = "Далее";
  }

  fieldsets[count].classList.remove("hidden");
};

export const initFieldset = () => {
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

    if (!valid) return;
    fieldset.classList.add("hidden");

    count += 1;

    if (count >= fieldsets.length) {
      count = 0;
      sendBook();
    }

    changeFieldset();
  });

  btnBack.addEventListener("click", () => {
    if (count === 0) {
      form.reset();
      clearPreview();
      router.navigate("/");
      return;
    }

    fieldsets[count].classList.add("hidden");
    count -= 1;

    changeFieldset();
  });
};
