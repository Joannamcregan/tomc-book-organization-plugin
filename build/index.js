/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/CategoryDisplay.js":
/*!****************************************!*\
  !*** ./src/modules/CategoryDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CategoryDisplay {
  constructor() {
    this.arrows = document.querySelectorAll('.arrow');
    this.events();
  }
  events() {
    this.arrows.forEach(arrow => {
      arrow.addEventListener('click', e => {
        e.preventDefault();
        let parentSection = arrow.parentElement.querySelector('.category-children');
        if (parentSection.classList.contains('not-displayed')) {
          parentSection.classList.remove('not-displayed');
          arrow.classList.add('fa-caret-up');
          arrow.classList.remove('fa-caret-down');
        } else {
          parentSection.classList.add('not-displayed');
          arrow.classList.add('fa-caret-down');
          arrow.classList.remove('fa-caret-up');
        }
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryDisplay);

/***/ }),

/***/ "./src/modules/FAQDisplay.js":
/*!***********************************!*\
  !*** ./src/modules/FAQDisplay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FAQDisplay {
  constructor() {
    this.questions = document.querySelectorAll('.tomc-faq-section h2');
    this.events();
  }
  events() {
    this.questions.forEach(question => {
      question.addEventListener('click', e => {
        question.closest('.tomc-faq-section').querySelector('.tomc-faq-a').classList.toggle('hidden');
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQDisplay);

/***/ }),

/***/ "./src/modules/FrontDisplay.js":
/*!*************************************!*\
  !*** ./src/modules/FrontDisplay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FrontDisplay {
  constructor() {
    this.leaves = document.querySelectorAll('.expandable-leaf');
    this.events();
  }
  events() {
    this.leaves.forEach(leaf => {
      leaf.addEventListener('click', e => {
        e.preventDefault();
        let parentSection = leaf.parentElement.parentElement.querySelector('.sub-leaf-section');
        if (parentSection.classList.contains('not-displayed')) {
          parentSection.classList.remove('not-displayed');
        } else {
          parentSection.classList.add('not-displayed');
        }
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontDisplay);

/***/ }),

/***/ "./src/modules/InstructionsDisplay.js":
/*!********************************************!*\
  !*** ./src/modules/InstructionsDisplay.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Instructions {
  constructor() {
    this.sellBooksSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sellBooksSpan');
    this.sellServicesSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sellServicesSpan');
    this.sellBooksSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sellBooksSection');
    this.sellServicesSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sellServicesSection');
    this.ebookProductsSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ebookProductsSpan');
    this.ebookProductsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ebookProductsSection');
    this.audiobookProductsSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#audiobookProductsSpan');
    this.audiobookProductsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#audiobookProductsSection');
    this.physicalBookProductSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#physicalBookProductSpan');
    this.physicalBookProductSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#physicalBookProductSection');
    this.events();
    this.ebookSectionShowing = false;
    this.audiobookSectionShowing = false;
    this.physicalBookSectionShowing = false;
  }
  events() {
    this.sellBooksSpan.on('click', this.toggleSellBooks.bind(this));
    this.sellServicesSpan.on('click', this.toggleSellServices.bind(this));
    this.ebookProductsSpan.on('click', this.toggleEbookProducts.bind(this));
    this.audiobookProductsSpan.on('click', this.toggleAudiobookProducts.bind(this));
    this.physicalBookProductSpan.on('click', this.togglePhysicalBookProducts.bind(this));
  }
  toggleSellBooks() {
    this.sellBooksSection.toggleClass('hidden');
    this.sellBooksSpan.toggleClass('purple-span');
    this.sellBooksSpan.toggleClass('hollow-purple-span');
  }
  toggleSellServices() {
    this.sellServicesSection.toggleClass('hidden');
    this.sellServicesSpan.toggleClass('blue-span');
    this.sellServicesSpan.toggleClass('hollow-blue-span');
  }
  toggleEbookProducts() {
    this.ebookProductsSection.toggleClass('hidden');
    this.ebookProductsSpan.toggleClass('orange-button');
    this.ebookProductsSpan.toggleClass('hollow-orange-button');
  }
  toggleAudiobookProducts() {
    this.audiobookProductsSection.toggleClass('hidden');
    this.audiobookProductsSpan.toggleClass('blue-button');
    this.audiobookProductsSpan.toggleClass('hollow-blue-button');
  }
  togglePhysicalBookProducts() {
    this.physicalBookProductSection.toggleClass('hidden');
    this.physicalBookProductSpan.toggleClass('purple-button');
    this.physicalBookProductSpan.toggleClass('hollow-purple-button');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instructions);

/***/ }),

/***/ "./src/modules/LoginPage.js":
/*!**********************************!*\
  !*** ./src/modules/LoginPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class LoginPage {
  constructor() {
    this.showLogin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-show-login');
    this.showRegister = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-show-registration');
    this.loginSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-login-section');
    this.registrationSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-register-section');
    this.events();
  }
  events() {
    this.showLogin.on('click', () => {
      this.loginSection.removeClass('hidden');
      this.registrationSection.addClass('hidden');
    });
    this.showRegister.on('click', () => {
      this.registrationSection.removeClass('hidden');
      this.loginSection.addClass('hidden');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ }),

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class MobileMenu {
  // 1. describe and create/initiate object
  constructor() {
    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".site-header__menu-trigger");
    this.closeButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu-overlay__close");
    this.searchOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu-overlay");
    this.events();
    this.isOverlayOpen = false;
  }
  // 2. events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
  }

  // 3. methods (functions, actions...)
  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
    this.isOverlayOpen = true;
  }
  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
    this.isOverlayOpen = false;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/modules/ProductDisplay.js":
/*!***************************************!*\
  !*** ./src/modules/ProductDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class ProductDisplay {
  constructor() {
    this.warningMessage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-product-view-warnings');
    this.warningList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-product-content-warnings');
    this.events();
  }
  events() {
    this.warningMessage.on('click', this.toggleWarningList.bind(this));
  }
  toggleWarningList() {
    if (this.warningList.hasClass('hidden')) {
      this.warningList.removeClass('hidden');
      this.warningMessage.text('hide trigger warnings');
    } else {
      this.warningList.addClass('hidden');
      this.warningMessage.text('show trigger warnings');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDisplay);

/***/ }),

/***/ "./src/modules/ReaderSettings.js":
/*!***************************************!*\
  !*** ./src/modules/ReaderSettings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Settings {
  // 1. describe and create/initiate object
  constructor() {
    this.settingsOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-settings-overlay");
    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-settings-trigger");
    this.closeButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".search-overlay__close");
    this.saveLanguageSettingsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-reader-settings--save-language-settings");
    this.saveTriggerSettingsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-reader-settings--save-trigger-settings");
    this.events();
    this.isOverlayOpen = false;
    this.chosenWarnings = [];
    this.chosenLanguages = [];
  }
  // 2. events
  events() {
    this.openButton.on("click", this.openSettingsOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    this.saveLanguageSettingsButton.on("click", this.saveLanguageSettings.bind(this));
    this.saveTriggerSettingsButton.on("click", this.saveTriggerSettings.bind(this));
  }

  // 3. methods (functions, actions...)

  closeOverlay() {
    this.settingsOverlay.removeClass("search-overlay--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#settings-overlay--triggers-container").html('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#settings-overlay--languages-container").html('');
    this.chosenLanguages = [];
    this.chosenWarnings = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
    this.isOverlayOpen = false;
  }
  toggleWarningSelection(e) {
    let labelName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).text();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
      for (let i = 0; i < this.chosenWarnings.length; i++) {
        if (this.chosenWarnings[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id')) {
          this.chosenWarnings.splice(i, 1);
        }
      }
    } else {
      this.chosenWarnings.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
    }
  }
  toggleLanguageSelection(e) {
    let labelName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).text();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
      for (let i = 0; i < this.chosenLanguages.length; i++) {
        if (this.chosenLanguages[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('language-id')) {
          this.chosenLanguages.splice(i, 1);
        }
      }
    } else {
      this.chosenLanguages.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('language-id'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
    }
  }

  //potentially add below to the html when suggestions functionality added-----------------------
  // <div class="settings-overlay--section">
  //     <h2 class="centered-text">My Favorite Genres</h2>
  //     <div id="settings-overlay--genres-2-container"></div>
  //     <h2 class="centered-text">My Favorite Topics</h2>
  //     <div id="settings-overlay--genres-3-container"></div>
  // </div>
  openSettingsOverlay(e) {
    if (!this.isOverlayOpen) {
      this.isOverlayOpen = true;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('spinningIcon');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/getReaderSettings',
        type: 'GET',
        success: response => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('spinningIcon');
          for (let i = 0; i < response.length; i++) {
            if (response[i]['settingtype'] == 'trigger') {
              if (response[i]['triggerid']) {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                this.chosenWarnings.push(Number(response[i]['id']));
              } else {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
              }
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("#settings-overlay--triggers-container").append(this.newSpan);
            } else if (response[i]['settingtype'] == 'language') {
              if (response[i]['languageid']) {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                this.chosenLanguages.push(Number(response[i]['id']));
              } else {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
              }
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("#settings-overlay--languages-container").append(this.newSpan);
            }
          }
          this.settingsOverlay.addClass("search-overlay--active");
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
        },
        error: response => {
          // console.log(response);
        }
      });
    }
  }
  saveLanguageSettings() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/saveLanguageSettings',
      type: 'POST',
      data: {
        'languages': JSON.stringify(this.chosenLanguages)
      },
      success: response => {
        // console.log(response);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-reader-settings-language-settings-saved-message").fadeIn().delay(3000).fadeOut();
      },
      error: response => {
        // console.log(response);
      }
    });
  }
  saveTriggerSettings() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/saveTriggerSettings',
      type: 'POST',
      data: {
        'triggers': JSON.stringify(this.chosenWarnings)
      },
      success: response => {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-reader-settings-trigger-settings-saved-message").fadeIn().delay(3000).fadeOut();
      },
      error: response => {
        // console.log(response);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/modules/Roadmap.js":
/*!********************************!*\
  !*** ./src/modules/Roadmap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Roadmap {
  constructor() {
    this.sellBooksSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sellBooksSpan");
    this.sellProductsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sellProductsSection");
    this.sellServicesSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sellServicesSpan");
    this.sellServicesSection = "#sellServicesSection";
    this.events();
  }
  events() {
    this.sellBooksSpan.on('click', () => {
      this.sellBooksSpan.toggleClass('roadmap--purple-span');
      this.sellBooksSpan.toggleClass('roadmap--hollow-purple-span');
      this.sellProductsSection.toggleClass('hidden');
    });
    this.sellServicesSpan.on('click', () => {
      this.sellServicesSpan.toggleClass('roadmap--blue-span');
      this.sellServicesSpan.toggleClass('roadmap--hollow-blue-span');
      this.sellServicesSection.toggleClass('hidden');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Roadmap);

/***/ }),

/***/ "./src/modules/SiteSearch.js":
/*!***********************************!*\
  !*** ./src/modules/SiteSearch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class SiteSearch {
  constructor() {
    this.resultsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-overlay__results");
    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-search-trigger");
    this.closeButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".search-overlay__close");
    this.searchOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".search-overlay");
    this.searchField = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-term");
    this.rollResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-search--roll-results");
    this.triggersSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-overlay__warnings-section");
    this.languagesSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-overlay__languages-section");
    this.triggersContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-overlay--triggers-container");
    this.languagesContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#search-overlay--languages-container");
    this.filtersSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay__filters-section');
    this.triggersFilterOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay__filter-out-warnings');
    this.languagesFilterOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay__filter-languages');
    this.filtersSectionToggle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay__toggle-filters-section');
    this.events();
    this.isOverlayOpen = false;
    this.chosenWarnings = [];
    this.chosenLanguages = [];
    this.filterTriggers = false;
    this.filterLanguages = false;
  }
  events() {
    this.openButton.on("click", this.openSearchOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("keydown", this.keyPressDispatcher.bind(this));
    this.rollResults.on('click', this.getResults.bind(this));
    this.triggersFilterOption.on('click', this.toggleTriggersOption.bind(this));
    this.languagesFilterOption.on('click', this.toggleLanguagesOption.bind(this));
    this.filtersSectionToggle.on('click', this.toggleFiltersSection.bind(this));
  }
  toggleFiltersSection(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('fa-caret-down')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('fa-caret-down');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('fa-caret-up');
      this.filtersSection.removeClass('hidden');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('fa-caret-up');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('fa-caret-down');
      this.filtersSection.addClass('hidden');
    }
  }
  toggleTriggersOption(e) {
    if (this.filterTriggers == false) {
      this.filterTriggers = true;
      this.triggersFilterOption.text("don't filter out triggering books");
      this.filtersSection.removeClass('hidden');
      this.triggersSection.removeClass('hidden');
      this.filtersSectionToggle.removeClass('hidden');
      this.filtersSectionToggle.addClass('inline');
    } else {
      this.filterTriggers = false;
      this.triggersFilterOption.text('filter out triggering books');
      this.triggersSection.addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--option-span--trigger').removeClass('tomc-book-organization--option-selected');
      if (this.filterLanguages == false) {
        this.filtersSectionToggle.addClass('hidden');
        this.filtersSectionToggle.removeClass('inline');
        this.filtersSectionToggle.addClass('fa-caret-up');
        this.filtersSectionToggle.removeClass('fa-caret-down');
        this.filtersSection.addClass('hidden');
      }
    }
  }
  toggleLanguagesOption(e) {
    if (this.filterLanguages == false) {
      this.filterLanguages = true;
      this.languagesFilterOption.text("don't filter books by language");
      this.filtersSection.removeClass('hidden');
      this.languagesSection.removeClass('hidden');
      this.filtersSectionToggle.removeClass('hidden');
      this.filtersSectionToggle.addClass('inline');
    } else {
      this.filterLanguages = false;
      this.languagesFilterOption.text('filter books by language');
      this.languagesSection.addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--option-span--language').removeClass('tomc-book-organization--option-selected');
      if (this.filterTriggers == false) {
        this.filtersSectionToggle.addClass('hidden');
        this.filtersSectionToggle.removeClass('inline');
        this.filtersSectionToggle.addClass('fa-caret-up');
        this.filtersSectionToggle.removeClass('fa-caret-down');
        this.filtersSection.addClass('hidden');
      }
    }
  }
  toggleWarningSelection(e) {
    let labelName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).text();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
      for (let i = 0; i < this.chosenWarnings.length; i++) {
        if (this.chosenWarnings[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id')) {
          this.chosenWarnings.splice(i, 1);
        }
      }
    } else {
      this.chosenWarnings.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
    }
  }
  toggleLanguageSelection(e) {
    let labelName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).text();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
      for (let i = 0; i < this.chosenLanguages.length; i++) {
        if (this.chosenLanguages[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('language-id')) {
          this.chosenLanguages.splice(i, 1);
        }
      }
    } else {
      this.chosenLanguages.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('language-id'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
    }
    if (this.chosenLanguages.length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-search--no-languages-selected").addClass('hidden');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-search--no-languages-selected").removeClass('hidden');
    }
  }
  openSearchOverlay(e) {
    if (!this.isOverlayOpen) {
      this.isOverlayOpen = true;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('spinningIcon');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/getReaderSettings',
        type: 'GET',
        success: response => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('spinningIcon');
          for (let i = 0; i < response.length; i++) {
            if (response[i]['settingtype'] == 'trigger') {
              if (response[i]['triggerid']) {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span--trigger tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                this.chosenWarnings.push(Number(response[i]['id']));
              } else {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span--trigger tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
              }
              this.triggersContainer.append(this.newSpan);
            } else if (response[i]['settingtype'] == 'language') {
              if (response[i]['languageid']) {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span--language tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').attr('id', 'search-overlay-language-option-' + response[i]['language_name']).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                this.chosenLanguages.push(Number(response[i]['id']));
              } else {
                this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span--language tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').attr('id', 'search-overlay-language-option-' + response[i]['language_name']).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
              }
              this.languagesContainer.append(this.newSpan);
            }
          }
          if (this.chosenLanguages < 1) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay-language-option-English').addClass('tomc-book-organization--option-span--language tomc-book-organization--option-span tomc-book-organization--option-selected').attr('aria-label', 'English is selected');
            this.chosenLanguages.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-overlay-language-option-English').data('language-id'));
          }
          this.searchOverlay.addClass("search-overlay--active");
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
          this.searchField.val('');
          setTimeout(() => this.searchField.focus(), 301);
        },
        error: response => {
          // console.log('error getting triggers');
        }
      });
      // return false;
    }
  }
  closeOverlay() {
    this.triggersContainer.html('');
    this.languagesContainer.html('');
    this.resultsDiv.html('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
    this.isOverlayOpen = false;
    this.chosenLanguages = [];
    this.chosenWarnings = [];
    this.searchOverlay.removeClass("search-overlay--active");
  }
  getResults(e) {
    let routeEnding;
    let routeData;
    if (this.chosenLanguages.length > 0 && this.filterLanguages) {
      routeEnding = 'search';
      routeData = {
        'searchterm': this.searchField.val().substring(0, 300),
        'triggers': JSON.stringify(this.chosenWarnings),
        'hasTriggers': this.chosenWarnings > 0 ? 'yes' : 'no',
        'languages': JSON.stringify(this.chosenLanguages)
      };
    } else {
      routeEnding = 'searchWithoutLanguages';
      routeData = {
        'searchterm': this.searchField.val().substring(0, 300),
        'triggers': JSON.stringify(this.chosenWarnings),
        'hasTriggers': this.chosenWarnings > 0 ? 'yes' : 'no'
      };
    }
    console.log(this.filterLanguages);
    console.log(this.chosenLanguages.length);
    console.log(routeEnding);
    if (this.searchField.val().length > 2) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('contracting');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-search--no-search-term').addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/ebookMarketplace/v1/' + routeEnding,
        type: 'GET',
        data: routeData,
        success: response => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('contracting');
          let alreadyAddedBookIds = [];
          let alreadyAddedProductIds = [];
          if (response.length < 1) {
            this.resultsDiv.html("<p class='centered-text'>Sorry! We couldn't find any matching results.</p>");
          } else {
            this.resultsDiv.html("");
            for (let i = 0; i < response.length; i++) {
              if (response[i]['resulttype'] === 'author') {
                let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result--author').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1 />').addClass('centered-text small-heading');
                let newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').html('Author ');
                newTitle.append(newSpan);
                let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').attr('href', response[i]['author_url']).html(response[i]['pen_name']);
                newTitle.append(newLink);
                newDiv.append(newTitle);
                this.resultsDiv.append(newDiv);
                newDiv.fadeIn();
              } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(response[i]['id'], alreadyAddedBookIds) > -1) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(response[i]['productid'], alreadyAddedProductIds) == -1) {
                  let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                  let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name'].slice(0, -1));
                  newLink.append(newFormat);
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-browse-genres--results--book-' + response[i]['id']).children('.tomc-browse--search-result-bottom-section').append(newLink);
                  alreadyAddedProductIds.push(response[i]['productid']);
                  newLink.fadeIn();
                }
              } else if (response[i]['resulttype'] === 'book') {
                let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                newDiv.append(newTitle);
                let newAuthor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                newDiv.append(newAuthor);
                let newBottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section');
                let newCoverDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result-cover-description');
                let newImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                newCoverDescription.append(newImage);
                let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                newCoverDescription.append(newDescription);
                newBottomSection.append(newCoverDescription);
                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name'].slice(0, -1));
                newLink.append(newFormat);
                newBottomSection.append(newLink);
                newDiv.append(newBottomSection);
                this.resultsDiv.append(newDiv);
                newDiv.fadeIn();
                alreadyAddedBookIds.push(response[i]['id']);
                alreadyAddedProductIds.push(response[i]['productid']);
              } else if (response[i]['resulttype'] === 'genrebooks') {
                let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                let newEm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<em />').html('new in ' + this.searchField.val());
                newDiv.append(newEm);
                let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                newDiv.append(newTitle);
                let newAuthor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                newDiv.append(newAuthor);
                let newBottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section');
                let newCoverDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result-cover-description');
                let newImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                newCoverDescription.append(newImage);
                let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                newCoverDescription.append(newDescription);
                newBottomSection.append(newCoverDescription);
                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name'].slice(0, -1));
                newLink.append(newFormat);
                newBottomSection.append(newLink);
                newDiv.append(newBottomSection);
                this.resultsDiv.append(newDiv);
                newDiv.fadeIn();
                alreadyAddedBookIds.push(response[i]['id']);
                alreadyAddedProductIds.push(response[i]['productid']);
              } else if (response[i]['resulttype'] === 'identitybooks') {
                let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                let newEm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<em />').html('new with main characters who are ' + response[i]['identity_name']);
                newDiv.append(newEm);
                let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                newDiv.append(newTitle);
                let newAuthor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                newDiv.append(newAuthor);
                let newBottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section');
                let newCoverDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result-cover-description');
                let newImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                newCoverDescription.append(newImage);
                let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                newCoverDescription.append(newDescription);
                newBottomSection.append(newCoverDescription);
                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name'].slice(0, -1));
                newLink.append(newFormat);
                newBottomSection.append(newLink);
                newDiv.append(newBottomSection);
                this.resultsDiv.append(newDiv);
                newDiv.fadeIn();
                alreadyAddedBookIds.push(response[i]['id']);
                alreadyAddedProductIds.push(response[i]['productid']);
              } else if (response[i]['resulttype'] === 'readalikebooks') {
                let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                let newEm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<em />').html('If you loved ' + response[i]['readalike_title'] + ' by ' + (response[i]['readalike_author'] != null ? response[i]['readalike_author'] : 'unknown or anonymous') + ', you might love this book, too.');
                newDiv.append(newEm);
                let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                newDiv.append(newTitle);
                let newAuthor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                newDiv.append(newAuthor);
                let newBottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section');
                let newCoverDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result-cover-description');
                let newImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                newCoverDescription.append(newImage);
                let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                newCoverDescription.append(newDescription);
                newBottomSection.append(newCoverDescription);
                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name'].slice(0, -1));
                newLink.append(newFormat);
                newBottomSection.append(newLink);
                newDiv.append(newBottomSection);
                this.resultsDiv.append(newDiv);
                newDiv.fadeIn();
                alreadyAddedBookIds.push(response[i]['id']);
                alreadyAddedProductIds.push(response[i]['productid']);
              } else if (response[i]['resulttype'] === 'genreIdentity') {
                let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                let newEm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<em />').html('new in ' + response[i]['genre_name'] + ' about ' + response[i]['identity_name']);
                newDiv.append(newEm);
                let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                newDiv.append(newTitle);
                let newAuthor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                newDiv.append(newAuthor);
                let newBottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section');
                let newCoverDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-search-result-cover-description');
                let newImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                newCoverDescription.append(newImage);
                let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                newCoverDescription.append(newDescription);
                newBottomSection.append(newCoverDescription);
                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name'].slice(0, -1));
                newLink.append(newFormat);
                newBottomSection.append(newLink);
                newDiv.append(newBottomSection);
                this.resultsDiv.append(newDiv);
                newDiv.fadeIn();
                alreadyAddedBookIds.push(response[i]['id']);
                alreadyAddedProductIds.push(response[i]['productid']);
              }
            }
          }
        },
        error: response => {
          // console.log('fail');
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-search--no-search-term').removeClass('hidden');
    }
  }
  keyPressDispatcher(e) {
    if (e.keyCode == 83 && !this.isOverlayOpen && !jquery__WEBPACK_IMPORTED_MODULE_0___default()("input, textarea").is(':focus')) {
      this.openOverlay();
    }
    if (e.keyCode == 27 && this.isOverlayOpen) {
      this.closeOverlay();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteSearch);

/***/ }),

/***/ "./src/modules/VendorInfo.js":
/*!***********************************!*\
  !*** ./src/modules/VendorInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class VendorInfo {
  constructor() {
    this.sellAsVendorButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sell-as-vendor-button');
    this.events();
  }
  events() {
    this.sellAsVendorButton.on('click', this.getVendorRoleAssignment.bind(this));
  }
  getVendorRoleAssignment() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcVendor/v1/assignVendorRole',
      type: 'POST',
      success: response => {
        // console.log(response);
        location.reload(true);
      },
      error: response => {
        // console.log(response);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendorInfo);

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_SiteSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/SiteSearch */ "./src/modules/SiteSearch.js");
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");
/* harmony import */ var _modules_CategoryDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/CategoryDisplay */ "./src/modules/CategoryDisplay.js");
/* harmony import */ var _modules_FrontDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/FrontDisplay */ "./src/modules/FrontDisplay.js");
/* harmony import */ var _modules_ReaderSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ReaderSettings */ "./src/modules/ReaderSettings.js");
/* harmony import */ var _modules_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/LoginPage */ "./src/modules/LoginPage.js");
/* harmony import */ var _modules_InstructionsDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/InstructionsDisplay */ "./src/modules/InstructionsDisplay.js");
/* harmony import */ var _modules_ProductDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/ProductDisplay */ "./src/modules/ProductDisplay.js");
/* harmony import */ var _modules_VendorInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/VendorInfo */ "./src/modules/VendorInfo.js");
/* harmony import */ var _modules_Roadmap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Roadmap */ "./src/modules/Roadmap.js");
/* harmony import */ var _modules_FAQDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/FAQDisplay */ "./src/modules/FAQDisplay.js");











const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
const marketplaceSearch = new _modules_SiteSearch__WEBPACK_IMPORTED_MODULE_0__["default"]();
const categoryDisplay = new _modules_CategoryDisplay__WEBPACK_IMPORTED_MODULE_2__["default"]();
const frontDisplay = new _modules_FrontDisplay__WEBPACK_IMPORTED_MODULE_3__["default"]();
const readerSettings = new _modules_ReaderSettings__WEBPACK_IMPORTED_MODULE_4__["default"]();
const loginPage = new _modules_LoginPage__WEBPACK_IMPORTED_MODULE_5__["default"]();
const instructions = new _modules_InstructionsDisplay__WEBPACK_IMPORTED_MODULE_6__["default"]();
const productDisplay = new _modules_ProductDisplay__WEBPACK_IMPORTED_MODULE_7__["default"]();
const vendorInfo = new _modules_VendorInfo__WEBPACK_IMPORTED_MODULE_8__["default"]();
const roadmap = new _modules_Roadmap__WEBPACK_IMPORTED_MODULE_9__["default"]();
const faqDisplay = new _modules_FAQDisplay__WEBPACK_IMPORTED_MODULE_10__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map