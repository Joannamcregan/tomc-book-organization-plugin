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
    this.addReadalikesError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-readalike-errors");
    //book genres form
    this.bookGenresForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-genre-form");
    this.addGenreButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-genre");
    this.selectGenreButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option");
    this.saveGenresButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-genres");
    //book identities form
    this.bookIdentitiesForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-identities-form");
    this.addIdentityOverlayButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-identity");
    this.selectIdentityButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option-alt-0");
    this.saveIdentitiesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-identities");
    //book readalikes form
    this.bookReadalikesForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--readalikes");
    this.readalikeBook0 = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__readalike-book-0");
    this.readalikeAuthor0 = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__readalike-author-0");
    this.readalikeBook1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__readalike-book-1");
    this.readalikeAuthor1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__readalike-author-1");
    this.saveReadalikesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-readalikes");
    //book content warnings form
    this.bookWarningsForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-warnings-form");
    this.addWarningButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-warning");
    this.selectWarningButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option-alt");
    this.saveWarningsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-warnings");
    //book pen name form
    this.bookPenNameForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-pen-name");
    //overlays
    this.genreOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__genre-overlay-close");
    this.genreOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__genre-overlay");
    this.genreInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-genre");
    this.addGenreButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--new-genre');
    this.identityOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__identity-overlay-close");
    this.identityOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__identity-overlay");
    this.identityInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-identity");
    this.addIdentityButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-identity");
    this.warningOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__warning-overlay-close");
    this.warningOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__warning-overlay");
    this.warningInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-warning");
    this.addNewWarningButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-warning");
    this.events();
    this.createdBookId;
    this.currentUserId;
    this.addedGenreLevel = '';
    this.chosenGenres1 = 0;
    this.chosenGenres2 = [];
    this.chosenGenres3 = [];
    this.chosenWarnings = [];
    this.chosenIdentities = [];
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
    this.genreOverlayCloseButton.on("click", this.closeGenreOverlay.bind(this));
    this.addGenreButton.on("click", this.addGenre.bind(this));
    this.selectGenreButtons.on("click", this.toggleGenreSelection.bind(this));
    this.saveGenresButton.on("click", this.addBookGenres.bind(this));
    this.saveReadalikesButton.on("click", this.addBookReadalikes.bind(this));
    this.addWarningButton.on("click", this.openWarningOverlay.bind(this));
    this.warningOverlayCloseButton.on("click", this.closeWarningOverlay.bind(this));
    this.addNewWarningButton.on("click", this.addWarning.bind(this));
    this.selectWarningButtons.on("click", this.toggleWarningSelection.bind(this));
    this.saveWarningsButton.on("click", this.addBookWarnings.bind(this));
    this.addIdentityOverlayButton.on("click", this.openIdentityOverlay.bind(this));
    this.identityOverlayCloseButton.on("click", this.closeIdentityOverlay.bind(this));
    this.addIdentityButton.on("click", this.addIdentity.bind(this));
    this.selectIdentityButtons.on("click", this.toggleIdentitySelection.bind(this));
    this.saveIdentitiesButton.on("click", this.addBookIdentities.bind(this));
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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
  }
  closeIdentityOverlay() {
    this.identityOverlay.removeClass("tomc-book-organization__box--active");
    this.identityInput.val('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
  }
  openIdentityOverlay(e) {
    this.currentUserId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user-id');
    this.identityOverlay.addClass("tomc-book-organization__box--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
  }
  closeWarningOverlay() {
    this.warningOverlay.removeClass("tomc-book-organization__box--active");
    this.warningInput.val('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
  }
  openWarningOverlay(e) {
    this.currentUserId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user-id');
    this.warningOverlay.addClass("tomc-book-organization__box--active");
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
  toggleIdentitySelection(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      for (let i = 0; i < this.chosenIdentities.length; i++) {
        if (this.chosenIdentities[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('identity-id')) {
          this.chosenIdentities.splice(i, 1);
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identities-error-section').addClass('hidden');
    } else {
      if (this.chosenIdentities.length < 5) {
        this.chosenIdentities.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('identity-id'));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identities-error-section').removeClass('hidden');
      }
    }
  }
  toggleWarningSelection(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      for (let i = 0; i < this.chosenWarnings.length; i++) {
        if (this.chosenWarnings[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id')) {
          this.chosenWarnings.splice(i, 1);
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres1-error-section').addClass('hidden');
    } else {
      if (this.chosenWarnings.length < 10) {
        this.chosenWarnings.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id'));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--warnings-error-section').removeClass('hidden');
      }
    }
    if (this.chosenWarnings.length > 0) {
      this.saveWarningsButton.innerText = 'save and continue';
    } else {
      this.saveWarningsButton.innerText = 'save';
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
          if (response != 0 && response != 'fail') {
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
  addIdentity() {
    this.identityName = this.identityInput.val().substring(0, 200);
    if (this.identityName != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addIdentity',
        type: 'POST',
        data: {
          'identity_name': this.identityName,
          'user': this.currentUserId
        },
        success: response => {
          if (response != 0 && response != 'fail') {
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-alt-0').attr('data-identity-id', response).attr('aria-checked', true).html(this.identityName).on('click', this.toggleIdentitySelection.bind(this));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identities').prepend(this.newSpan);
            if (this.chosenIdentities.length < 5) {
              this.chosenIdentities.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identities-error-section').removeClass('hidden');
            }
          }
          this.closeIdentityOverlay();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identity-overlay-error').removeClass("hidden");
    }
  }
  addWarning() {
    this.warningName = this.warningInput.val().substring(0, 200);
    if (this.warningName != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addWarning',
        type: 'POST',
        data: {
          'warning_name': this.warningName,
          'user': this.currentUserId
        },
        success: response => {
          if (response != 0 && response != 'fail') {
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-alt').attr('data-warning-id', response).attr('aria-checked', true).html(this.warningName).on('click', this.toggleWarningSelection.bind(this));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--warnings').prepend(this.newSpan);
            if (this.chosenWarnings.length < 10) {
              this.chosenWarnings.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--warnings-error-section').removeClass('hidden');
            }
          }
          this.closeWarningOverlay();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--warning-overlay-error').removeClass("hidden");
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
          this.bookIdentitiesForm.removeClass("hidden");
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
  chosenIdentities;
  addBookIdentities(e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookIdentities',
      type: 'POST',
      data: {
        'book': this.createdBookId,
        'identities': JSON.stringify(this.chosenIdentities)
      },
      success: response => {
        this.bookIdentitiesForm.addClass("hidden");
        this.bookWarningsForm.removeClass("hidden");
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
  addBookWarnings(e) {
    if (this.chosenWarnings.length > 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookWarnings',
        type: 'POST',
        data: {
          'book': this.createdBookId,
          'warnings': JSON.stringify(this.chosenWarnings)
        },
        success: response => {
          this.bookWarningsForm.addClass("hidden");
          this.bookReadalikesForm.removeClass("hidden");
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      this.bookWarningsForm.addClass("hidden");
      this.bookPenNameForm.removeClass("hidden");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
        scrollTop: 0
      }, 'fast');
    }
  }
  addBookReadalikes(e) {
    if (this.readalikeBook0.val() == '' && this.readalikeBook1.val() == '') {
      this.addReadalikesError.removeClass("hidden");
    } else {
      this.addReadalikesError.addClass("hidden");
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookReadalikes',
        type: 'POST',
        data: {
          'book': this.createdBookId,
          'book0': this.readalikeBook0.val(),
          'author0': this.readalikeAuthor0.val(),
          'book1': this.readalikeBook1.val(),
          'author1': this.readalikeAuthor1.val()
        },
        success: response => {
          this.bookReadalikesForm.addClass("hidden");
          this.bookWarningsForm.removeClass("hidden");
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
            scrollTop: 0
          }, 'fast');
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