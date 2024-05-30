import { initRouter } from "./modules/router.js";
import "./modules/search.js";
import { initFieldset } from "./modules/changeFieldset.js";
import { controlField } from "./modules/controlField.js";
import { upload } from "./modules/upload.js";
import { renderListBooks } from "./modules/renderListBooks.js";

const fieldsBtnSort = document.querySelector(".fields__btn_sort");
const fieldsListSort = document.querySelector(".fields__list_sort");
const fieldsfBtnFilter = document.querySelector(".fields__btn_filter");
const fieldsListFilter = document.querySelector(".fields__list_filter");

const init = () => {
  initRouter();
  controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
  controlField(fieldsfBtnFilter, fieldsListFilter, fieldsListSort);
  upload();
  initFieldset();
};

init();
