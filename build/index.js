/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/new-book.js":
/*!*********************************!*\
  !*** ./src/modules/new-book.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class NewBookForm {
  constructor() {
    // main elements in the main form to create a new book
    this.addBookForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book");
    this.addBookSaveButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book");
    this.subtitleYesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle-yes");
    this.subtitleDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle-div");
    this.editionYesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-edition-yes");
    this.editionDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--edition-div");
    // required inputs
    this.bookTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--title");
    this.bookDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--description");
    this.bookExcerpt = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--excerpt");
    // optional inputs
    this.bookSubtitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle");
    this.bookEdition = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--edition");
    // errors
    this.addBookErrorsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors");
    this.addBookTitleError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-title");
    this.addBookDescriptionError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-description");
    this.addBookExcerptError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-excerpt");
    // book genres form
    this.bookGenresForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-genre-form");
    this.additionalGenreButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--additional-genre");
    this.additionalSubgenreButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--additional-subgenre");
    this.noAdditonalGenreButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--no-additional-genres");
    this.additionalGenreDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--genre-1");
    this.additionalSubgenresDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--genre-0-additional-subgenres");
    // book pen name form
    this.bookPenNameForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-pen-name");
    this.events();
    this.createdBookId;
  }
  events() {
    this.addBookSaveButton.on("click", this.addNewBook.bind(this));
  }
  addNewBook(e) {
    console.log(parseInt(this.bookEdition.val().substring(0, 10)));
    if (this.bookTitle.val() != '' && this.bookDescription.val() != '' && this.bookExcerpt.val() != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBook',
        type: 'POST',
        data: {
          'title': this.bookTitle.val().substring(0, 200),
          'subtitle': this.bookSubtitle.val().substring(0, 200),
          'edition': parseInt(this.bookEdition.val().substring(0, 10)),
          'description': this.bookDescription.val().substring(0, 1000),
          'excerpt': this.bookExcerpt.val().substring(0, 500),
          'user': jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user')
        },
        success: response => {
          this.createdBookId = response;
          this.addBookForm.addClass("hidden");
          this.bookGenresForm.removeClass("hidden");
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      this.addBookErrorsDiv.removeClass("hidden");
      if (this.bookTitle.val() == '') {
        this.addBookTitleError.removeClass("hidden");
      } else {
        this.addBookTitleError.addClass("hidden");
      }
      if (this.bookDescription.val() == '') {
        this.addBookDescriptionError.removeClass("hidden");
      } else {
        this.addBookDescriptionError.addClass("hidden");
      }
      if (this.bookExcerpt.val() == '') {
        this.addBookExcerptError.removeClass("hidden");
      } else {
        this.addBookExcerptError.addClass("hidden");
      }
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewBookForm);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_new_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/new-book */ "./src/modules/new-book.js");

const tomcNewBookForm = new _modules_new_book__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map