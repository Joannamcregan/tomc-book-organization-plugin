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
    // required inputs
    this.bookTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--title");
    this.bookDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--description");
    this.bookExcerpt = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--excerpt");
    // optional inputs
    this.bookSubtitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle");
    this.bookEdition = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--edition");
    //radio buttons
    this.subtitleYesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle-yes");
    this.subtitleNoButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle-no");
    this.editionYesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-edition-yes");
    this.editionNoButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-edition-no");
    this.fictionButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--fiction");
    this.nonfictionButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--nonfiction");
    this.poetryButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--poetry");
    // errors
    this.addBookErrorsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors");
    this.addBookTitleError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-title");
    this.addBookDescriptionError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-description");
    this.addBookExcerptError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-excerpt");
    this.addBookGenresErrorsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-genre-errors");
    // book genres form
    this.bookGenresForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-genre-form");
    this.addGenreButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-genre");
    this.selectGenreButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option");
    // book pen name form
    this.bookPenNameForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-pen-name");
    //overlays
    this.overlayCloseButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization__overlay__close");
    this.genreOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__genre-overlay");
    this.genreInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-genre");
    this.saveGenresButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-genres");
    this.addGenreButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--new-genre');
    this.events();
    this.createdBookId;
    this.currentUserId;
    this.addedGenreLevel = '';
    this.chosenGenres1 = 0;
    this.chosenGenres2 = [];
    this.chosenGenres3 = [];
  }
  events() {
    this.subtitleYesButton.on("click", function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle-div").removeClass("hidden");
    });
    this.subtitleNoButton.on("click", function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--subtitle-div").addClass("hidden");
    });
    this.editionYesButton.on("click", function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--edition-div").removeClass("hidden");
    });
    this.editionNoButton.on("click", function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--edition-div").addClass("hidden");
    });
    this.addBookSaveButton.on("click", this.addNewBook.bind(this));
    this.addGenreButtons.on("click", this.openGenreOverlay.bind(this));
    this.overlayCloseButtons.on("click", this.closeGenreOverlay.bind(this));
    this.addGenreButton.on("click", this.addGenre.bind(this));
    this.selectGenreButtons.on("click", this.toggleGenreSelection.bind(this));
    this.saveGenresButton.on("click", this.addBookGenres.bind(this));
  }
  closeGenreOverlay() {
    this.genreOverlay.removeClass("tomc-book-organization__box--active");
    this.genreInput.val('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
  }
  openGenreOverlay(e) {
    this.addedGenreLevel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level');
    this.currentUserId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user-id');
    this.genreOverlay.addClass("tomc-book-organization__box--active");
    // console.log(this.searchOverlay.data('id'));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
  }
  toggleGenreSelection(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 1) {
        this.chosenGenres1 = 0;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres1-error-section').addClass('hidden');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 2) {
        for (let i = 0; i < this.chosenGenres2.length; i++) {
          if (this.chosenGenres2[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.chosenGenres2.splice(i, 1);
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres2-error-section').addClass('hidden');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 3) {
        for (let i = 0; i < this.chosenGenres3.length; i++) {
          if (this.chosenGenres3[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.chosenGenres3.splice(i, 1);
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres3-error-section').addClass('hidden');
      }
    } else {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 1) {
        if (this.chosenGenres1 == 0) {
          this.chosenGenres1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres1-error-section').removeClass('hidden');
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 2) {
        if (this.chosenGenres2.length < 2) {
          this.chosenGenres2.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres2-error-section').removeClass('hidden');
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 3) {
        if (this.chosenGenres3.length < 10) {
          this.chosenGenres3.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres3-error-section').removeClass('hidden');
        }
      }
    }
  }
  addGenre() {
    this.genreName = this.genreInput.val().substring(0, 200);
    if (this.genreInput != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addGenre',
        type: 'POST',
        data: {
          'genre_name': this.genreName,
          'genre_level': this.addedGenreLevel,
          'user': this.currentUserId
        },
        success: response => {
          this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option').attr('data-genre-id', response).attr('aria-checked', true).html(this.genreName).on('click', this.toggleGenreSelection.bind(this));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres-' + this.addedGenreLevel).prepend(this.newSpan);
          if (this.addedGenreLevel == 2) {
            if (this.chosenGenres2.length < 2) {
              this.chosenGenres2.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres2-error-section').removeClass('hidden');
            }
          } else if (this.addedGenreLevel == 3) {
            if (this.chosenGenres3.length < 10) {
              this.chosenGenres3.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres3-error-section').removeClass('hidden');
            }
          }
          this.closeGenreOverlay();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genre-overlay-error').removeClass("hidden");
    }
  }
  addBookGenres(e) {
    if (this.chosenGenres1 == 0 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0) {
      this.addBookGenresErrorsDiv.removeClass("hidden");
    } else {
      this.addBookGenresErrorsDiv.addClass("hidden");
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookGenres',
        type: 'POST',
        data: {
          'book': this.createdBookId,
          'genres1': this.chosenGenres1,
          'genres2': JSON.stringify(this.chosenGenres2),
          'genres3': JSON.stringify(this.chosenGenres3)
        },
        success: response => {
          this.bookGenresForm.addClass("hidden");
          this.bookPenNameForm.removeClass("hidden");
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
          console.log(response);
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
  addNewBook(e) {
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
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
          console.log(response);
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