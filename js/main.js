/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

console.log('components');

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");


(function () {
  var _document, _document2, _document3, _document4;
  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');
    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', () => {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const disableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const enableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);





//////////////////////////////////////  HAMBURGER

$('.header_hamburger').on('click', function (e) {
  e.preventDefault();
  $('.menu').toggleClass('open');
  $(this).toggleClass('open');
});

////////////////////////////////////// SLIDER

$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    breakpoint: 900,
    settings: {
      arrows: false
    }
  });
  $('.admission__slaider__main').slick({
    arrows: false,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    centerPadding: '60px',
    asNavFor: ".admission__sub__slaider"
  });
  $('.admission__sub__slaider').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    asNavFor: ".admission__slaider__main",
    draggable: false
  });
});

/////////////////////////////////////// POPUP

$('.open-popup').click(function (e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});
$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});
$('.open-popup-button').click(function (e) {
  e.preventDefault();
  $('.popup-bg').fadeOut(800);
});
////////////////////////////////////// NEW-POPUP

$('.new-open-popup').click(function (e) {
  e.preventDefault();
  $('.new-popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});
$('.new-close-popup').click(function () {
  $('.new-popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});
$('.close-popup-button').click(function (e) {
  e.preventDefault();
  $('.new-popup-bg').fadeOut(800);
});

///////////////////////////////////////////////////// ANIMATION

document.addEventListener('DOMContentLoaded', () => {
  const admission = document.querySelector('.admission');
  const header = document.querySelector('.header');
  const scrollItems = document.querySelectorAll('.scroll-item');
  const scrollAnimation = () => {
    let windowCenter = window.innerHeight + window.scrollY;
    // console.log(windowCenter)
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + el.offsetHeight / 15;
      console.log(scrollOffset);
      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      }
    });
  };
  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let admissionCenter = admission.offsetHeight / 2;
    if (scrollTop >= admissionCenter) {
      header.classList.add('fixed');
      admission.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('fixed');
      admission.style.marginTop = `0px`;
    }
  };
  headerFixed();
  scrollAnimation();
  window.addEventListener('scroll', () => {
    headerFixed();
    scrollAnimation();
  });
});

// пагинация , фильтри. скрипт гугл мапс . радио батон. анимация

////////////////////////////////////////////////////////////////// PAGINATION

// async function getData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return data;
// }

// async function main() {
//   const postsData = await getData();
//   let currentPage = 1;
//   let rows = 10;

//   function displayList(arrData, rowPerPage, page) {
//     const postsEl = document.querySelector('.posts');
//     postsEl.innerHTML = "";
//     page--;

//     const start = rowPerPage * page;
//     const end = start + rowPerPage;
//     const paginatedData = arrData.slice(start, end);

//     paginatedData.forEach((el) => {
//       const postEl = document.createElement("div");
//       postEl.classList.add("post");
//       postEl.innerText = `${el.title}`;
//       postsEl.appendChild(postEl);
//     })
//   }

//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector('.pagination');
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement("ul");
//     ulEl.classList.add('pagination__list');

//     for (let i = 0; i < pagesCount; i++) {
//       const liEl = displayPaginationBtn(i + 1);
//       ulEl.appendChild(liEl)
//     }
//     paginationEl.appendChild(ulEl)
//   }

//   function displayPaginationBtn(page) {
//     const liEl = document.createElement("li");
//     liEl.classList.add('pagination__item')
//     liEl.innerText = page

//     if (currentPage == page) liEl.classList.add('pagination__item--active');

//     liEl.addEventListener('click', () => {
//       currentPage = page
//       displayList(postsData, rows, currentPage)

//       let currentItemLi = document.querySelector('li.pagination__item--active');
//       currentItemLi.classList.remove('pagination__item--active');

//       liEl.classList.add('pagination__item--active');
//     })

//     return liEl;
//   }

//   displayList(postsData, rows, currentPage);
//   displayPagination(postsData, rows);
// }

// main();

/////////////////////////////////////////////////////////////////////////////////////  MAP

google.maps.event.addDomListener(window, 'load', init);
function init() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(40.6700, -73.9400),
    styles: [{
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#686868"
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "lightness": "-22"
      }, {
        "visibility": "on"
      }, {
        "color": "#b4b4b4"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "saturation": "-51"
      }, {
        "lightness": "11"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [{
        "saturation": "3"
      }, {
        "lightness": "-56"
      }, {
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "lightness": "-52"
      }, {
        "color": "#9094a0"
      }, {
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "weight": "6.13"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [{
        "weight": "1.24"
      }, {
        "saturation": "-100"
      }, {
        "lightness": "-10"
      }, {
        "gamma": "0.94"
      }, {
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#b4b4b4"
      }, {
        "weight": "5.40"
      }, {
        "lightness": "7"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#231f1f"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#595151"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "lightness": "-16"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#d7d7d7"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#282626"
      }, {
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": "-41"
      }, {
        "lightness": "-41"
      }, {
        "color": "#2a4592"
      }, {
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "weight": "1.10"
      }, {
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "lightness": "-16"
      }, {
        "weight": "0.72"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "lightness": "-37"
      }, {
        "color": "#2a4592"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "off"
      }, {
        "color": "#eeed6a"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.stroke",
      "stylers": [{
        "visibility": "off"
      }, {
        "color": "#0a0808"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#b7e4f4"
      }, {
        "visibility": "on"
      }]
    }]
  };
  var mapElement = document.querySelector('.map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    title: 'Snazzy!'
  });
}

///////////////////////////////////////////////////////////////////////////////////// TAB

document.querySelectorAll('.tabs-triggers__item').forEach(item => item.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href').replace('#', '');
  document.querySelectorAll('.tabs-triggers__item').forEach(child => child.classList.remove('tabs-triggers__item--active'));
  document.querySelectorAll('.tabs-content__item').forEach(child => child.classList.remove('tabs-content__item--active'));
  item.classList.add('tabs-triggers__item--active');
  document.getElementById(id).classList.add('tabs-content__item--active');
}));
document.querySelector('.tabs-triggers__item').click();

/////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  var body = $("body");
  body.fadeIn(600);
  $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function (e) {
    e.preventDefault();
    $("body").fadeOut(600);
    var self = this;
    setTimeout(function () {
      window.location.href = $(self).attr("href");
    }, 600);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map