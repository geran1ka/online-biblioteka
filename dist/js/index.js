/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 623:
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return N}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function h(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function f(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function l(t,n){var e,a=h(s(t.currentLocationPath)),l=a[0],p=a[1],d=""===p?null:f(p),v=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return v.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(l))return{url:l,queryString:p,hashString:u(t.to),route:n,data:null,params:d}}else e=n.path;var g=new RegExp(e,""),m=l.match(g);if(m){var y=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(m,v):m.groups?m.groups:m.slice(1);return{url:s(l.replace(new RegExp("^"+t.instance.root),"")),queryString:p,hashString:u(t.to),route:n,data:y,params:d}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function v(){return"undefined"!=typeof window}function g(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function m(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function y(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function _(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=l(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function O(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var w=v(),L=p();function b(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;L?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var n=location.hash;location.hash="",location.hash=n}t.instance.__freezeListening=!1}),1))):w&&(window.location.href=t.to)}n()}function A(t,n){var e=t.instance;e.lastResolved()?m(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r=!1,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?m(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function P(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var R=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],S=[A,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=h(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?f(i):null};t.matches=[c],t.match=c}n()},m.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function E(){return(E=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function x(t,n){var e=0;A(t,(function o(){e!==t.matches.length?m(R,E({},t,{match:t.matches[e]}),(function(){e+=1,o()})):P(t,n)}))}function H(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function N(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",d=null,w=[],L=!1,A=p(),P=v();function R(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return s(i+"/"+s(t))}function N(t,n,e,o){return t=c(t)?E(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:g(e)}}function U(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,n)};return m([y,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S)],e,H),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function q(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:R(t)};m([k,O,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S),b,H],e,H)}}function F(){if(P)return(P?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));L||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=w.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function M(t){var n=h(s(t)),o=n[0],r=n[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:N(o,(function(){}),[e],o),data:null,params:i}}function T(t,n,e){return"string"==typeof n&&(n=z(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function z(t){return"string"==typeof t?w.find((function(n){return n.name===E(t)})):w.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=L,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),w.push(N(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;w.push(N(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=w=w.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=U,this.navigate=q,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(q(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=w=[],A&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=L=!0},this.notFound=function(t,n){return r._notFoundRoute=N("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=F,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return h(R(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=E(n));var o={instance:r,to:n,currentLocationPath:n};return y(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?E(t):t),l(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return M(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=T.bind(this,"before"),this.addAfterHook=T.bind(this,"after"),this.addAlreadyHook=T.bind(this,"already"),this.addLeaveHook=T.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=M,this._clean=s,this._checkForAHash=R,this._setCurrent=function(t){return d=r.current=t},function(){A&&(this.__popstateListener=function(){r.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}.call(this),F.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default}));
//# sourceMappingURL=navigo.min.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/navigo/lib/navigo.min.js
var navigo_min = __webpack_require__(623);
;// CONCATENATED MODULE: ./src/js/modules/getStars.js
const getStars = (rating, className) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push(`
        <img
        class="${className}"
        src="img/star.svg"
        alt="Рейтинг ${rating} из 5"
      />
    `);
    } else if (i < rating) {
      stars.push(`<img class="${className}" src="img/star.svg" />`);
    } else {
      stars.push(`<img class="${className}" src="img/star-o.svg" />`);
    }
  }
  return stars;
};
;// CONCATENATED MODULE: ./src/js/modules/serviceBook.js
const API_URL = "http://localhost:3024/";
const getBooks = async id => {
  try {
    const response = await fetch(`${API_URL}api/books/${id ? id : ""}`);
    if (!response.ok) {
      throw new Error(`Ошибка при запросе книги с сервера: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
const getLabels = async () => {
  try {
    const response = await fetch(`${API_URL}api/label`);
    if (!response.ok) {
      throw new Error(`Ошибка при запросе label сервера: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// Сервер CRM запущен. Вы можете использовать его по адресу http://localhost:3024
// Нажмите CTRL+C, чтобы остановить сервер
// Доступные методы:
// GET /api/books - получить список книг, в query параметр search можно передать поисковый запрос
// POST /api/books - создать объект книги, в теле запроса нужно передать объект {title: string, description: string, images?: base64, label: string }
// GET /api/books/{id} - получить книгу по ID
// DELETE /api/books/{id} - удалить книгу по ID
// GET /api/label - получить список лейблов
;// CONCATENATED MODULE: ./src/js/modules/renderListBooks.js


const libraryList = document.querySelector(".library__list");
const renderListBooks = async () => {
  const [books, labels] = await Promise.all([getBooks(), getLabels()]);
  libraryList.textContent = "";
  books.forEach(({
    author,
    description,
    id,
    image,
    label,
    rating,
    title
  }) => {
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
;// CONCATENATED MODULE: ./src/js/modules/renderBook.js


const bookContainer = document.querySelector(".book__container");
const bookLabelFooter = document.querySelector(".footer__btn.book__label");
const renderBook = async idBooks => {
  const [{
    author,
    description,
    id,
    image,
    label,
    rating,
    title
  }, labels] = await Promise.all([getBooks(idBooks), getLabels()]);
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
;// CONCATENATED MODULE: ./src/js/modules/router.js



const library = document.querySelector(".library");
const book = document.querySelector(".book");
const add = document.querySelector(".add");
const addBtns = document.querySelectorAll(".header__btn-add, .library__add-btn");
const backBtn = document.querySelector(".book__btn_back");
const router = new navigo_min("/", {
  hash: true
});
const closeAllPage = () => {
  library.classList.add("hidden");
  book.classList.add("hidden");
  add.classList.add("hidden");
};
const initRouter = () => {
  router.on({
    "/": () => {
      closeAllPage();
      library.classList.remove("hidden");
      document.body.classList.remove("body_gradient");
      renderListBooks();
    },
    book: ({
      params: {
        id
      }
    }) => {
      closeAllPage();
      book.classList.remove("hidden");
      document.body.classList.add("body_gradient");
      renderBook(id);
    },
    add: () => {
      closeAllPage();
      add.classList.remove("hidden");
      document.body.classList.add("body_gradient");
    }
  }).resolve();
  addBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      router.navigate("add");
    });
  });
  backBtn.addEventListener("click", () => {
    router.navigate("/");
  });
};
;// CONCATENATED MODULE: ./src/js/modules/search.js
const btnsSearch = document.querySelectorAll(".header__btn_search");
const search = document.querySelector(".search");
const searchClose = document.querySelector(".search__close");
const closeSearch = ({
  target
}) => {
  if (target.closest(".search, .header__btn_search")) {
    return;
  }
  search.classList.remove("search_active");
  document.body.removeEventListener("click", closeSearch);
};
btnsSearch.forEach(btn => {
  btn.addEventListener("click", () => {
    search.classList.add("search_active");
    document.body.addEventListener("click", closeSearch, true);
  });
});
searchClose.addEventListener("click", () => {
  search.classList.remove("search_active");
});
;// CONCATENATED MODULE: ./src/js/modules/toBase64.js
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.addEventListener("loadend", () => {
    resolve(reader.result);
  });
  reader.addEventListener("error", err => {
    reject(err);
  });
  reader.readAsDataURL(file);
});
;// CONCATENATED MODULE: ./src/js/modules/upload.js

const label = document.querySelector(".upload__label");
const preview = document.querySelector(".upload__preview");
const file = document.querySelector(".upload__file");
const previewSrc = preview.src;
const upload = () => {
  file.addEventListener("change", async () => {
    if (file.files.length > 0) {
      const base64 = await toBase64(file.files[0]);
      preview.style.display = "block";
      label.classList.add("upload__label_active");
      preview.src = base64;
    }
  });
};
const clearPreview = () => {
  preview.style.display = "";
  label.classList.remove("upload__label_active");
  preview.src = previewSrc;
};
;// CONCATENATED MODULE: ./src/js/modules/changeFieldset.js


const fieldsets = document.querySelectorAll(".add__fieldset");
const addBtn = document.querySelector(".add__btn");
const changeFieldset_form = document.querySelector(".add__form");
const btnBack = document.querySelector(".add__btn_back");
let count = 0;
const sendBook = () => {
  const data = true; // данные с сервера
  if (!data.error) {
    changeFieldset_form.reset();
    clearPreview();
    router.navigate("/");
    count = 0;
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
const initFieldset = () => {
  addBtn.addEventListener("click", ({
    target
  }) => {
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
      changeFieldset_form.reset();
      clearPreview();
      router.navigate("/");
      return;
    }
    fieldsets[count].classList.add("hidden");
    count -= 1;
    changeFieldset();
  });
};
;// CONCATENATED MODULE: ./src/js/modules/controlField.js
const controlField = (btn, list, offList) => {
  btn.addEventListener("click", () => {
    list.classList.toggle("fields__list_active");
    offList.classList.remove("fields__list_active");
  });
  list.addEventListener("click", ({
    target
  }) => {
    if (target.closest(".fields__button")) {
      list.classList.remove("fields__list_active");
    }
  });
};
;// CONCATENATED MODULE: ./src/js/index.js






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
}();
/******/ })()
;