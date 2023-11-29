/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function calculator() {
  const calcWrapper = document.querySelector('.calculating__field'),
    kkal = document.querySelector('#kkal'),
    params = {
      'height': 0,
      'weight': 0,
      'age': 0
    },
    genders = ['female', 'male'],
    activs = [1.2, 1.375, 1.55, 1.725];
  let gender = 'female',
    activ = 1.375,
    siblings,
    index,
    num;
  function calc(gender, weight, height, age, activ) {
    if (gender === 'male') {
      return Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * activ);
    } else {
      return Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * activ);
    }
  }
  function draw(num) {
    if (num === 3) {
      kkal.textContent = calc(gender, params.weight, params.height, params.age, activ);
    } else {
      kkal.textContent = 0;
    }
  }
  calcWrapper.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('calculating__choose-item')) {
      if (event.target.tagName == 'DIV') {
        event.target.classList.add('calculating__choose-item_active');
        siblings = event.target.parentNode.children;
        index = 0;
        for (let i = 0; i < siblings.length; i++) {
          if (siblings[i] != event.target) {
            siblings[i].classList.remove('calculating__choose-item_active');
          } else {
            index = i;
          }
          if (siblings.length == 2) {
            gender = genders[index];
            localStorage.setItem('gender', genders[index]);
          } else {
            activ = activs[index];
            localStorage.setItem('activ', activs[index]);
          }
        }
      } else {
        event.target.addEventListener('input', event => {
          num = 0;
          event.target.classList.add('calculating__choose-item_active');
          params[event.target.id] = +event.target.value;
          localStorage.setItem(event.target.id, +event.target.value);
          if (event.target.value === '') {
            event.target.classList.remove('calculating__choose-item_active');
            params[event.target.id] = 0;
          }
          for (let i = 0; i < Object.keys(params).length; i++) {
            if (params[Object.keys(params)[i]] !== 0) {
              num += 1;
            }
          }
          draw(num);
        });
      }
      draw(num);
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards() {
  class MenuItem {
    constructor(parentSelector, img, menuName, text, price) {
      this.img = img;
      this.menuName = menuName;
      this.text = text;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
    }
    createItem() {
      let menuItem = document.createElement('div');
      menuItem.innerHTML = `<img src=${this.img} alt="elite">
            <h3 class="menu__item-subtitle">${this.menuName}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
      menuItem.classList.add('menu__item');
      this.parent.append(menuItem);
    }
  }

  /* fetch('http://localhost:3000/menu')
      .then(res => res.json())
      .then(menu => {
          menu.forEach(({ img, title, descr, price }) => {
              new MenuItem('.menu__field .container', img, title, descr, price).createItem()
          })
      }) */

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/menu').then(res => res.json()).then(menu => {
    menu.forEach(_ref => {
      let {
        img,
        title,
        descr,
        price
      } = _ref;
      new MenuItem('.menu__field .container', img, title, descr, price).createItem();
    });
  });

  /* Хардкодный способ создания cards
      const img1 = "img/tabs/vegy.jpg",
      menuName1 = `"Фитнес"`,
      text1 = `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
      овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
      ценой и высоким качеством!`,
      price1 = 229,
      img2 = "img/tabs/elite.jpg",
      menuName2 = `“Премиум”`,
      text2 = `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
      и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
      в ресторан!`,
      price2 = 550,
      img3 = "img/tabs/post.jpg",
      menuName3 = `"Постное"`,
      text3 = `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
      продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
      количество белков за счет тофу и импортных вегетарианских стейков.`,
      price3 = 430
    const item1 = new MenuItem('.menu__field .container', img1, menuName1, text1, price1),
      item2 = new MenuItem('.menu__field .container', img2, menuName2, text2, price2),
      item3 = new MenuItem('.menu__field .container', img3, menuName3, text3, price3)
  item1.createItem()
  item2.createItem()
  item3.createItem() */
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function forms(formSelector) {
  const forms = document.querySelectorAll(formSelector),
    thanks = document.querySelector('.overlay'),
    thanksClose = document.querySelector('.thanks__close'),
    modal = document.querySelector('.modal');
  forms.forEach(item => {
    bindPostData(item);
  });
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      function closeThanks() {
        thanks.classList.remove('show');
        thanks.classList.add('hide');
        document.body.style.overflow = '';
      }
      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json).then(() => {
        if (modal.classList.contains('show')) {
          modal.classList.remove('show');
          modal.classList.add('hide');
          document.body.style.overflow = '';
        }
        thanks.classList.toggle('show');
        thanks.classList.toggle('hide');
        document.body.style.overflow = 'hidden';
        thanksClose.addEventListener('click', closeThanks);
        thanks.addEventListener('click', e => {
          if (e.target === thanks) {
            closeThanks();
          }
        });
      }).finally(() => {
        form.reset();
      });

      //С помощью XMLHttpRequest()
      /* const request = new XMLHttpRequest()
      request.open('POST', 'server.php')
        const formData = new FormData(form)
        request.send(formData)
        function closeThanks() {
          thanks.classList.remove('show')
          thanks.classList.add('hide')
          document.body.style.overflow = ''
      }
        request.addEventListener('load', () => {
          if (request.status === 200) {
              form.reset()
              if (modal.classList.contains('show')) {
                  modal.classList.remove('show')
                  modal.classList.add('hide')
                  document.body.style.overflow = ''
              }
              thanks.classList.toggle('show')
              thanks.classList.toggle('hide')
              document.body.style.overflow = 'hidden'
              thanksClose.addEventListener('click', closeThanks)
                thanks.addEventListener('click', e => {
                  if (e.target === thanks) {
                      closeThanks()
                  }
              })
          }
      }) */
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modals.js":
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.toggle('show');
  modal.classList.toggle('hide');
  document.body.style.overflow = 'hidden';
  /* clearInterval(modalTaimerID) */
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
}
function modals(modalTriggerSelector, modalSelector) {
  const modalTrigger = document.querySelectorAll(modalTriggerSelector),
    modal = document.querySelector(modalSelector),
    modalCloseBtn = document.querySelector('[data-close]');
  modalTrigger.forEach(item => {
    item.addEventListener('click', () => openModal(modalSelector));
  });
  modalCloseBtn.addEventListener('click', () => closeModal(modalSelector));
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  /* const modalTaimerID = setTimeout(openModal, 5000) */

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider(sliderWrapper) {
  const curSlide = document.querySelector('#current'),
    totalSlides = document.querySelector('#total');
  $(sliderWrapper).slick({
    speed: 200,
    adaptiveHeight: true,
    prevArrow: '<div class="offer__slider-prev"><img src="icons/left.svg" alt="prev"></div>',
    //стилизуем стрелки
    nextArrow: '<div class="offer__slider-next"><img src="icons/right.svg" alt="next"></div>',
    //стилизуем стрелки
    responsive: [
    //адаптив
    {
      breakpoint: 767,
      settings: {
        dots: true,
        dotsClass: 'carousel__dots',
        arrows: false
      }
    }]
  });
  $('.offer__slider-prev').on('click', enent => {
    let prevContent = curSlide.textContent;
    if (prevContent === '01') {
      curSlide.textContent = totalSlides.textContent;
    } else {
      curSlide.textContent = '0' + (+prevContent - 1);
    }
  });
  $('.offer__slider-next').on('click', enent => {
    let nextContent = curSlide.textContent;
    if (nextContent === totalSlides.textContent) {
      curSlide.textContent = '01';
    } else {
      curSlide.textContent = '0' + (+nextContent + 1);
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activClass) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsWrapper = document.querySelector(tabsParentSelector);
  function hideTabContent() {
    tabsContent.forEach(tab => {
      tab.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove(activClass);
    });
  }
  function showTabContent() {
    let tabNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[tabNum].style.display = 'block';
    tabs[tabNum].classList.add(activClass);
  }
  hideTabContent();
  showTabContent();
  tabsWrapper.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function timer(timerSelector, deadline) {
  function getTimeRemaining(endtime) {
    const start = new Date();
    const end = Date.parse(endtime);
    const t = end - start,
      days = Math.floor(t / 86400000),
      hours = Math.floor((t - days * 86400000) / 3600000),
      minutes = Math.floor((t - days * 86400000 - hours * 3600000) / 60000),
      seconds = Math.floor((t - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    let t = getTimeRemaining(endtime);
    updateClock();
    function updateClock() {
      t = getTimeRemaining(endtime);
      if (t.total <= 0) {
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      } else {
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
      }
    }
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  setClock(timerSelector, deadline);
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: function() { return /* binding */ getData; },
/* harmony export */   postData: function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
};
const getData = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Ошибкаааа, could not fetch ${url}`);
  } else {
    return res;
  }
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modals */ "./js/modules/modals.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");







document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2023-10-20');
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])('.offer__slider-wrapper');
  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map