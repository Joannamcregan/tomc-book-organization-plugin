/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/book-form.js":
/*!**********************************!*\
  !*** ./src/modules/book-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class BookInfo {
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
    // errors
    this.addBookErrorsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors");
    this.addBookTitleError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-title");
    this.addBookDescriptionError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-description");
    this.addBookExcerptError = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-book-errors-excerpt");
    this.addBookGenresNoneAddedError = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--no-genres-added-error");
    this.editBookGenresNoneAddedError = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--no-genres-added-edit-error');
    //book languages form
    this.bookLanguagesForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-languages-form");
    this.addLanguageButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-language");
    this.saveLanguagesButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-languages");
    //book genres form
    this.bookGenresForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-genre-form");
    this.addGenreButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-genre");
    this.saveGenresButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-genres");
    //book identities form
    this.bookIdentitiesForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-identities-form");
    this.addIdentityOverlayButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-identity");
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
    this.saveWarningsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-warnings");
    //book pen name form
    this.bookPenNameForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-pen-name");
    this.addPenNameOverlayButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-pen-name");
    this.selectPenName = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-pen-name-select");
    this.savePenNameButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-pen-name");
    //book products form
    this.bookProductsForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--book-products");
    this.bookProductsSaveButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-products");
    this.bookProductsSavePublishButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--save-book-products-publish");
    this.bookProductsAddProductButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-product");
    this.bookProductsAddInstructions = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--products-instruction-section");
    //add book overlays
    this.languageOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__language-overlay-close");
    this.languageOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__language-overlay");
    this.languageInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-language");
    this.addNewLanguageButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-language");
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
    this.penNameOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__pen-name-overlay");
    this.penNameInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-pen-name");
    this.penNameBioInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__new-name-bio");
    this.addNewPenNameButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--new-pen-name");
    this.penNameOverlayCloseButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization__pen-name-overlay-close");
    // toggle select buttons
    this.selectLanguageButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option-languages");
    this.selectGenreButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option");
    this.selectIdentityButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option-alt-0");
    this.selectWarningButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--option-alt");
    // edit book titles
    this.bookOptionTitles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--book-to-edit-title');
    // edit book overlays
    this.closeOverlayButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--close-overlay');
    this.basicInfoOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-basic-info-overlay');
    this.editPenNameOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-pen-name-overlay');
    this.languagesOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-languages-overlay');
    this.genresOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-genres-overlay');
    this.identitiesOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-identities-overlay');
    this.readalikesOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-readalikes-overlay');
    this.contentWarningsOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-content-warnings-overlay');
    this.productsOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization__edit-products-overlay');
    // edit options
    this.editBasicInfoOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-basic-info');
    this.editLanguagesOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-languages');
    this.editGenresOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-genres');
    this.editIdentitiesOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-character-identities');
    this.editReadalikesOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-readalikes');
    this.editWarningsOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-content-warnings');
    this.editPenNameOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-author-name');
    this.editProductsOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-linked-products');
    // save edits
    this.saveBasicInfoEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-basic-info-edits');
    this.saveLanguageEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-languages-edits');
    this.saveGenreEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-genres-edits');
    this.saveIdentityEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-identities-edits');
    this.saveWarningEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-content-warnings-edits');
    this.saveReadalikesEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-readalikes-edits');
    this.saveProductsEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-products-edits');
    this.savePenNameEditsButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-pen-name-edits');
    // update publication status
    this.unpublishButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--unpublish');
    this.publishButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--publish');
    this.events();
    this.createdBookId;
    this.currentUserId;
    this.chosenLanguages = [];
    this.addedGenreLevel = '';
    this.chosenGenres1 = [];
    this.chosenGenres2 = [];
    this.chosenGenres3 = [];
    this.chosenWarnings = [];
    this.chosenIdentities = [];
    this.bookId = 0;
    //track if overlays are open
    this.basicInfoOverlayIsOpen = false;
    this.languageOverlayIsOpen = false;
    this.genresOverlayIsOpen = false;
    this.identitiesOverlayIsOpen = false;
    this.warningsOverlayIsOpen = false;
    this.readalikesOverlayIsOpen = false;
    this.productsOverlayIsOpen = false;
    this.penNameOverlayIsOpen = false;
    //hold values
    this.title = '';
    this.subTitle = '';
    this.edition = '';
    this.description = '';
    this.excerpt = '';
    this.oldLanguages = [];
    this.oldGenres1 = [];
    this.oldGenres2 = [];
    this.oldGenres3 = [];
    this.oldIdentities = [];
    this.oldWarnings = [];
    this.existingReadalikeBook0 = '';
    this.existingReadalikeAuthor0 = '';
    this.existingReadalikeBook1 = '';
    this.existingReadalikeAuthor1 = '';
  }
  events() {
    //add book events
    this.bookProductsAddProductButton.on("click", this.showAddProductsInstructions.bind(this));
    this.addBookSaveButton.on("click", this.addNewBook.bind(this));
    this.addLanguageButton.on("click", this.openLanguageOverlay.bind(this));
    this.languageOverlayCloseButton.on("click", this.closeLanguageOverlay.bind(this));
    this.addNewLanguageButton.on("click", this.addLanguage.bind(this));
    this.saveLanguagesButton.on("click", this.addBookLanguages.bind(this));
    this.addGenreButtons.on("click", this.openGenreOverlay.bind(this));
    this.genreOverlayCloseButton.on("click", this.closeGenreOverlay.bind(this));
    this.addGenreButton.on("click", this.addGenre.bind(this));
    this.saveGenresButton.on("click", this.addBookGenres.bind(this));
    this.saveReadalikesButton.on("click", this.addBookReadalikes.bind(this));
    this.addWarningButton.on("click", this.openWarningOverlay.bind(this));
    this.warningOverlayCloseButton.on("click", this.closeWarningOverlay.bind(this));
    this.addNewWarningButton.on("click", this.addWarning.bind(this));
    this.saveWarningsButton.on("click", this.addBookWarnings.bind(this));
    this.addIdentityOverlayButton.on("click", this.openIdentityOverlay.bind(this));
    this.identityOverlayCloseButton.on("click", this.closeIdentityOverlay.bind(this));
    this.addIdentityButton.on("click", this.addIdentity.bind(this));
    this.saveIdentitiesButton.on("click", this.addBookIdentities.bind(this));
    this.addPenNameOverlayButton.on("click", this.openPenNameOverlay.bind(this));
    this.penNameOverlayCloseButton.on("click", this.closePenNameOverlay.bind(this));
    this.addNewPenNameButton.on("click", this.addPenName.bind(this));
    this.savePenNameButton.on("click", this.addBookPenName.bind(this));
    this.bookProductsSaveButton.on("click", this.saveBookProducts.bind(this, 'addBookProducts'));
    this.bookProductsSavePublishButton.on("click", this.saveBookProducts.bind(this, 'addBookPublish'));
    //toggle events
    this.selectLanguageButtons.on("click", this.toggleLanguageSelection.bind(this));
    this.selectGenreButtons.on("click", this.toggleGenreSelection.bind(this));
    this.selectWarningButtons.on("click", this.toggleWarningSelection.bind(this));
    this.selectIdentityButtons.on("click", this.toggleIdentitySelection.bind(this));
    //readalikes
    this.readalikeBook0.on('click', this.updateReadalikeContinueButton.bind(this));
    //edit book events
    this.bookOptionTitles.on('click', this.expandTitleEditingOptions.bind(this));
    // overlays
    this.closeOverlayButtons.on('click', this.closeEditOverlay.bind(this));
    this.editBasicInfoOption.on('click', this.openBasicInfoOverlay.bind(this));
    this.editLanguagesOption.on('click', this.openLanguagesOverlay.bind(this));
    this.editGenresOption.on('click', this.openGenresOverlay.bind(this));
    this.editIdentitiesOption.on('click', this.openIdentitiesOverlay.bind(this));
    this.editReadalikesOption.on('click', this.openReadalikesOverlay.bind(this));
    this.editWarningsOption.on('click', this.openContentWarningsOverlay.bind(this));
    this.editPenNameOption.on('click', this.openEditPenNameOverlay.bind(this));
    this.editProductsOption.on('click', this.openProductsOverlay.bind(this));
    // save edits
    this.saveBasicInfoEditsButton.on('click', this.saveBasicInfoEdits.bind(this));
    this.saveLanguageEditsButton.on('click', this.saveLanguageEdits.bind(this));
    this.saveGenreEditsButton.on('click', this.saveGenreEdits.bind(this));
    this.saveIdentityEditsButton.on('click', this.saveIdentityEdits.bind(this));
    this.saveWarningEditsButton.on('click', this.saveWarningEdits.bind(this));
    this.saveReadalikesEditsButton.on('click', this.saveReadalikesEdits.bind(this));
    this.saveProductsEditsButton.on('click', this.saveBookProducts.bind(this, 'updateBookProducts'));
    this.savePenNameEditsButton.on('click', this.savePenNameEdits.bind(this));
    this.publishButtons.on('click', this.togglePublish.bind(this));
    this.unpublishButtons.on('click', this.togglePublish.bind(this));
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--languages-error-section').addClass('hidden');
    } else {
      if (this.chosenLanguages.length < 3) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-no-languages-selected").addClass("hidden");
        this.chosenLanguages.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('language-id'));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--languages-error-section').removeClass('hidden');
      }
    }
  }
  updateReadalikeContinueButton(e) {
    setTimeout(() => {
      if (this.readalikeBook0.val() != '') {
        this.saveReadalikesButton.text('save and continue');
      } else {
        this.saveReadalikesButton.text('continue');
      }
    }, 3000);
  }
  toggleGenreSelection(e) {
    let labelName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).text();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-genres-no-changes').addClass('hidden');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 1) {
        for (let i = 0; i < this.chosenGenres1.length; i++) {
          if (this.chosenGenres1[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.chosenGenres1.splice(i, 1);
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 2) {
        for (let i = 0; i < this.chosenGenres2.length; i++) {
          if (this.chosenGenres2[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.chosenGenres2.splice(i, 1);
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres2-error-section').addClass('hidden');
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 3) {
        for (let i = 0; i < this.chosenGenres3.length; i++) {
          if (this.chosenGenres3[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.chosenGenres3.splice(i, 1);
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres3-error-section').addClass('hidden');
      }
    } else {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 1) {
        if (this.chosenGenres1.length < 3) {
          this.chosenGenres1.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 2) {
        if (this.chosenGenres2.length < 2) {
          this.chosenGenres2.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres2-error-section').removeClass('hidden');
        }
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-level') == 3) {
        if (this.chosenGenres3.length < 10) {
          this.chosenGenres3.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres3-error-section').removeClass('hidden');
        }
      }
    }
  }
  toggleIdentitySelection(e) {
    let labelName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).text();
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--option-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--option-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is not selected');
      for (let i = 0; i < this.chosenIdentities.length; i++) {
        if (this.chosenIdentities[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('identity-id')) {
          this.chosenIdentities.splice(i, 1);
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--identities-error-section').addClass('hidden');
    } else {
      if (this.chosenIdentities.length < 5) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
        this.chosenIdentities.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('identity-id'));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--identities-error-section').removeClass('hidden');
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--warnings-error-section').addClass('hidden');
    } else {
      if (this.chosenWarnings.length < 10) {
        this.chosenWarnings.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('warning-id'));
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--option-selected');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', labelName + ' is selected');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--warnings-error-section').removeClass('hidden');
      }
    }
    if (this.chosenWarnings.length > 0) {
      this.saveWarningsButton.text('save and continue');
    } else {
      this.saveWarningsButton.text('continue');
    }
  }
  showAddProductsInstructions() {
    this.bookProductsAddInstructions.hasClass("hidden") ? this.bookProductsAddInstructions.removeClass("hidden") : this.bookProductsAddInstructions.addClass("hidden");
  }
  closeLanguageOverlay() {
    this.languageOverlay.removeClass("tomc-book-organization__box--active");
    this.languageInput.val('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
  }
  openLanguageOverlay(e) {
    this.currentUserId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user-id');
    this.languageOverlay.addClass("tomc-book-organization__box--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
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
  closePenNameOverlay() {
    this.penNameOverlay.removeClass("tomc-book-organization__box--active");
    this.penNameInput.val('');
    this.penNameBioInput.val('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("body-no-scroll");
  }
  openPenNameOverlay(e) {
    this.currentUserId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user-id');
    this.penNameOverlay.addClass("tomc-book-organization__box--active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("body-no-scroll");
  }
  addGenre(e) {
    this.genreName = this.genreInput.val().substring(0, 200);
    if (this.genreName == 'any genre') {
      this.genreName = 'the any-genre genre';
    } else if (this.genreName == 'anything') {
      this.genreName = 'books about ' + this.genreName;
    }
    if (this.genreInput != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('contracting');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('saving...');
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('contracting');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('save');
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-genre-id', response).attr('aria-label', this.genreName + ' is selected').html(this.genreName).on('click', this.toggleGenreSelection.bind(this));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genres-' + this.addedGenreLevel).prepend(this.newSpan);
            if (this.addedGenreLevel == 2) {
              if (this.chosenGenres2.length < 2) {
                this.chosenGenres2.push(response);
                this.newSpan.addClass('tomc-book-organization--option-selected');
                this.newSpan.attr('aria-label', this.genreName + ' is selected');
              } else {
                this.newSpan.attr('aria-label', this.genreName + ' is not selected');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres2-error-section').removeClass('hidden');
              }
            } else if (this.addedGenreLevel == 3) {
              if (this.chosenGenres3.length < 10) {
                this.chosenGenres3.push(response);
                this.newSpan.addClass('tomc-book-organization--option-selected');
                this.newSpan.attr('aria-label', this.genreName + ' is selected');
              } else {
                this.newSpan.attr('aria-label', this.genreName + ' is not selected');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres3-error-section').removeClass('hidden');
              }
            }
          }
          this.closeGenreOverlay();
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--genre-overlay-error').removeClass("hidden");
    }
  }
  addIdentity(e) {
    this.identityName = this.identityInput.val().substring(0, 200);
    if (this.identityName != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('contracting');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('saving...');
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('contracting');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('save');
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-identity-id', response).attr('aria-label', this.identityName + ' is selected').html(this.identityName).on('click', this.toggleIdentitySelection.bind(this));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identities').prepend(this.newSpan);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
            if (this.chosenIdentities.length < 5) {
              this.chosenIdentities.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
              this.newSpan.attr('aria-label', this.identityName + ' is selected');
            } else {
              this.newSpan.attr('aria-label', this.identityName + ' is not selected');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--identities-error-section').removeClass('hidden');
            }
          }
          this.closeIdentityOverlay();
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--identity-overlay-error').removeClass("hidden");
    }
  }
  addLanguage() {
    this.languageName = this.languageInput.val().substring(0, 200);
    if (this.languageName != '') {
      this.addNewLanguageButton.addClass('contracting');
      this.addNewLanguageButton.html('saving...');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addLanguage',
        type: 'POST',
        data: {
          'language_name': this.languageName,
          'user': this.currentUserId
        },
        success: response => {
          if (response != 0 && response != 'fail') {
            // this.addNewLanguageButton.removeClass('tomc-book-organization--save-button');
            this.addNewLanguageButton.removeClass('contracting');
            this.addNewLanguageButton.html("save");
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response).attr('aria-label', this.languageName + ' is selected').html(this.languageName).on('click', this.toggleLanguageSelection.bind(this));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--languages').prepend(this.newSpan);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
            if (this.chosenLanguages.length < 3) {
              this.chosenLanguages.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
              this.newSpan.attr('aria-label', this.languageName + ' is selected');
            } else {
              this.newSpan.attr('aria-label', this.languageName + ' is not selected');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--languages-error-section').removeClass('hidden');
            }
          }
          this.closeLanguageOverlay();
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--language-overlay-error').removeClass("hidden");
    }
  }
  addWarning(e) {
    this.warningName = this.warningInput.val().substring(0, 200);
    if (this.warningName != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('contracting');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('saving...');
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('contracting');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('save');
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response).attr('aria-label', this.warningName + ' is selected').html(this.warningName).on('click', this.toggleWarningSelection.bind(this));
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--warnings').prepend(this.newSpan);
            if (this.chosenWarnings.length < 10) {
              this.chosenWarnings.push(response);
              this.newSpan.addClass('tomc-book-organization--option-selected');
              this.newSpan.attr('aria-label', this.warningName + ' is selected');
              this.saveWarningsButton.text('save and continue');
            } else {
              this.newSpan.attr('aria-label', this.warningName + ' is not selected');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--warnings-error-section').removeClass('hidden');
            }
          }
          this.closeWarningOverlay();
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--warning-overlay-error').removeClass("hidden");
    }
  }
  addPenName(e) {
    this.newPenNameData = {
      'title': this.penNameInput.val().substring(0, 200),
      'content': this.penNameBioInput.val().substring(0, 1000),
      'status': 'publish'
    };
    if (this.penName != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('contracting');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('saving...');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/wp/v2/author-profile',
        type: 'POST',
        data: this.newPenNameData,
        success: response => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('contracting');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html('save');
          var newOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option />');
          newOption.attr('value', response.id);
          newOption.attr('aria-selected', true);
          newOption.html(response.title.rendered);
          this.selectPenName.prepend(newOption);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-pen-name-errors").addClass("hidden");
          this.closePenNameOverlay();
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--pen-name-overlay-error').removeClass("hidden");
    }
  }
  addBookGenres(e) {
    if (this.chosenGenres1.length == 0 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0) {
      this.addBookGenresNoneAddedError.removeClass("hidden");
    } else {
      this.addBookGenresNoneAddedError.addClass("hidden");
      this.saveGenresButton.addClass('contracting');
      this.saveGenresButton.html('saving...');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookGenres',
        type: 'POST',
        data: {
          'book': this.createdBookId,
          'genres1': JSON.stringify(this.chosenGenres1),
          'genres2': JSON.stringify(this.chosenGenres2),
          'genres3': JSON.stringify(this.chosenGenres3)
        },
        success: response => {
          this.bookGenresForm.addClass("opacity-30");
          this.bookGenresForm.attr('aria-disabled', 'true');
          this.saveGenresButton.removeClass('tomc-book-organization--save-button');
          this.saveGenresButton.removeClass('contracting');
          this.saveGenresButton.addClass('hidden');
          this.addGenreButtons.addClass('hidden');
          this.addIdentityOverlayButton.removeClass('hidden');
          this.bookIdentitiesForm.removeClass("opacity-30");
          this.bookIdentitiesForm.attr('aria-disabled', 'false');
          this.saveIdentitiesButton.removeClass('hidden');
          this.saveIdentitiesButton.addClass('tomc-book-organization--save-button');
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
  addBookLanguages(e) {
    if (this.chosenLanguages.length > 0) {
      this.saveLanguagesButton.addClass('contracting');
      this.saveLanguagesButton.html('saving...');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookLanguages',
        type: 'POST',
        data: {
          'book': this.createdBookId,
          'languages': JSON.stringify(this.chosenLanguages)
        },
        success: response => {
          this.bookLanguagesForm.addClass("opacity-30");
          this.bookLanguagesForm.attr('aria-disabled', 'true');
          this.saveLanguagesButton.removeClass('tomc-book-organization--save-button');
          this.saveLanguagesButton.removeClass('contracting');
          this.saveLanguagesButton.addClass('hidden');
          this.addLanguageButton.addClass('hidden');
          this.addGenreButtons.removeClass('hidden');
          this.bookGenresForm.removeClass("opacity-30");
          this.bookGenresForm.attr('aria-disabled', 'false');
          this.saveGenresButton.removeClass('hidden');
          this.saveGenresButton.addClass('tomc-book-organization--save-button');
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".tomc-book-organization--add-no-languages-selected").removeClass("hidden");
    }
  }
  addBookIdentities(e) {
    if (this.chosenIdentities.length > 0) {
      this.saveIdentitiesButton.addClass('contracting');
      this.saveIdentitiesButton.html('saving...');
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
          this.bookIdentitiesForm.addClass("opacity-30");
          this.bookLanguagesForm.attr('aria-disabled', 'true');
          this.saveIdentitiesButton.removeClass('tomc-book-organization--save-button');
          this.saveIdentitiesButton.removeClass('contracting');
          this.saveIdentitiesButton.addClass('hidden');
          this.addIdentityOverlayButton.addClass('hidden');
          this.addWarningButton.removeClass('hidden');
          this.bookWarningsForm.removeClass("opacity-30");
          this.bookWarningsForm.attr('aria-disabled', 'false');
          this.saveWarningsButton.removeClass('hidden');
          this.saveWarningsButton.addClass('tomc-book-organization--save-button');
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--add-no-identities-selected").removeClass("hidden");
    }
  }
  addBookWarnings(e) {
    if (this.chosenWarnings.length > 0) {
      this.saveWarningsButton.addClass('contracting');
      this.saveWarningsButton.html('saving...');
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
          this.bookWarningsForm.addClass("opacity-30");
          this.bookWarningsForm.attr('aria-disabled', 'true');
          this.saveWarningsButton.removeClass('tomc-book-organization--save-button');
          this.saveWarningsButton.removeClass('contracting');
          this.saveWarningsButton.addClass('hidden');
          this.addWarningButton.addClass('hidden');
          this.bookReadalikesForm.removeClass("opacity-30");
          this.bookReadalikesForm.attr('aria-disabled', 'false');
          this.saveReadalikesButton.removeClass('hidden');
          this.saveReadalikesButton.addClass('tomc-book-organization--save-button');
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      this.saveWarningsButton.addClass('contracting');
      this.saveWarningsButton.html('continuing...');
      setTimeout(() => {
        this.bookWarningsForm.addClass("opacity-30");
        this.bookWarningsForm.attr('aria-disabled', 'true');
        this.saveWarningsButton.removeClass('tomc-book-organization--save-button');
        this.saveWarningsButton.removeClass('contracting');
        this.saveWarningsButton.addClass('hidden');
        this.addWarningButton.addClass('hidden');
        this.bookReadalikesForm.removeClass("opacity-30");
        this.bookReadalikesForm.attr('aria-disabled', 'false');
        this.saveReadalikesButton.removeClass('hidden');
        this.saveReadalikesButton.addClass('tomc-book-organization--save-button');
      }, 500);
      // $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
  }
  addBookPenName(e) {
    this.savePenNameButton.addClass('contracting');
    this.savePenNameButton.html('saving...');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookPenName',
      type: 'POST',
      data: {
        'book': this.createdBookId,
        'penname': this.selectPenName.val()
      },
      success: response => {
        this.bookPenNameForm.addClass("opacity-30");
        this.bookPenNameForm.attr('aria-disabled', 'true');
        this.savePenNameButton.removeClass('tomc-book-organization--save-button');
        this.savePenNameButton.removeClass('contracting');
        this.savePenNameButton.addClass('hidden');
        this.addPenNameOverlayButton.addClass('hidden');
        this.bookProductsAddProductButton.removeClass('hidden');
        this.bookProductsForm.removeClass("opacity-30");
        this.bookProductsForm.attr('aria-disabled', 'false');
        this.bookProductsSavePublishButton.removeClass('hidden');
        this.bookProductsSavePublishButton.addClass('tomc-book-organization--save-button-alt');
        this.bookProductsSaveButton.removeClass('hidden');
        this.bookProductsSaveButton.addClass('tomc-book-organization--save-button');
        // $('html, body').animate({ scrollTop: 0 }, 'fast');
      },
      error: response => {
        console.log(response);
      }
    });
  }
  addBookReadalikes(e) {
    this.saveReadalikesButton.addClass('contracting');
    this.saveReadalikesButton.html('saving...');
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
        this.bookReadalikesForm.addClass("opacity-30");
        this.bookReadalikesForm.attr('aria-disabled', 'true');
        this.saveReadalikesButton.removeClass('tomc-book-organization--save-button');
        this.saveReadalikesButton.removeClass('contracting');
        this.saveReadalikesButton.addClass('hidden');
        this.addPenNameOverlayButton.removeClass('hidden');
        this.bookPenNameForm.removeClass("opacity-30");
        this.bookPenNameForm.attr('aria-disabled', 'false');
        this.savePenNameButton.removeClass('hidden');
        this.savePenNameButton.addClass('tomc-book-organization--save-button');
        // $('html, body').animate({ scrollTop: 0 }, 'fast');
      },
      error: response => {
        console.log(response);
      }
    });
  }
  addNewBook(e) {
    this.addBookSaveButton.addClass('contracting');
    this.addBookSaveButton.html('saving...');
    console.log(this.bookDescription.val());
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
          'edition': parseInt(this.bookEdition.val().substring(0, 10), 10),
          'description': this.bookDescription.val().substring(0, 3000),
          'excerpt': this.bookExcerpt.val().substring(0, 10000),
          'user': jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('user')
        },
        success: response => {
          this.createdBookId = response;
          this.addBookForm.addClass("opacity-30");
          this.addBookForm.attr('aria-disabled', 'true');
          this.addBookSaveButton.removeClass('tomc-book-organization--save-button');
          this.addBookSaveButton.removeClass('contracting');
          this.addBookSaveButton.addClass("hidden");
          this.addLanguageButton.removeClass('hidden');
          this.bookLanguagesForm.removeClass("opacity-30");
          this.bookLanguagesForm.attr('aria-disabled', 'false');
          this.saveLanguagesButton.removeClass("hidden");
          this.saveLanguagesButton.addClass("tomc-book-organization--save-button");
          // $('html, body').animate({ scrollTop: 0 }, 'fast');
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
  saveBookProducts(routePath) {
    var productsToAdd = [];
    var typesToAdd = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--product-checkbox:checkbox:checked').each(function () {
      productsToAdd.push(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()));
      typesToAdd.push(parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('.tomc-book-organization--product-option').children('select.tomc-book-organization--product-format').val()));
    });
    var imageProduct = jquery__WEBPACK_IMPORTED_MODULE_0___default()("input[name='tomc-book-organization--main-image-product']:checked").val();
    if (imageProduct) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--product-image-error").addClass("hidden");
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/' + routePath,
        type: 'POST',
        data: {
          'book': routePath == 'updateBookProducts' ? this.bookId : this.createdBookId,
          'products': JSON.stringify(productsToAdd),
          'types': JSON.stringify(typesToAdd),
          'image': imageProduct
        },
        success: response => {
          this.bookProductsForm.addClass('opacity-30');
          this.bookProductsAddProductButton.addClass('hidden');
          if (routePath == 'updateBookProducts') {
            location.reload(true);
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--complete').removeClass('hidden');
            // $('html, body').animate({ scrollTop: 0 }, 'fast');
          }
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--product-image-error").removeClass("hidden");
    }
  }

  // saveBookProducts(){
  //     var productsToAdd = [];
  //     var typesToAdd = [];
  //     $('.tomc-book-organization--product-checkbox:checkbox:checked').each(function(){
  //         productsToAdd.push(parseInt($(this).val()));
  //         typesToAdd.push(parseInt($(this).parent('.tomc-book-organization--product-option').children('select.tomc-book-organization--product-format').val()));
  //     });
  //     var imageProduct = $("input[name='tomc-book-organization--main-image-product']:checked").val();
  //     console.log('image product is ' + imageProduct);
  //     if(imageProduct){
  //         $("#tomc-book-organization--product-image-error").addClass("hidden");
  //         $.ajax({
  //             beforeSend: (xhr) => {
  //                 xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
  //             },
  //             url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookProducts',
  //             type: 'POST',
  //             data: {
  //                 'book' : this.createdBookId,
  //                 'products': JSON.stringify(productsToAdd),
  //                 'types': JSON.stringify(typesToAdd),
  //                 'image' : imageProduct
  //             },
  //             success: (response) => {
  //                 console.log(response);
  //             },
  //             error: (response) => {
  //                 console.log(response);
  //             }
  //         })
  //     }else{
  //         $("#tomc-book-organization--product-image-error").removeClass("hidden");
  //     }
  // }

  // savePublish(){
  //     var productsToAdd = [];
  //     var typesToAdd = [];
  //     $('.tomc-book-organization--product-checkbox:checkbox:checked').each(function(){
  //         productsToAdd.push(parseInt($(this).val()));
  //         typesToAdd.push(parseInt($(this).parent('.tomc-book-organization--product-option').children('select.tomc-book-organization--product-format').val()));
  //     });
  //     var imageProduct = $("input[name='tomc-book-organization--main-image-product']:checked").val();
  //     console.log('image product is ' + imageProduct);
  //     if(imageProduct){
  //         $("#tomc-book-organization--product-image-error").addClass("hidden");
  //         $.ajax({
  //             beforeSend: (xhr) => {
  //                 xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
  //             },
  //             url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookPublish',
  //             type: 'POST',
  //             data: {
  //                 'book' : this.createdBookId,
  //                 'products': JSON.stringify(productsToAdd),
  //                 'types': JSON.stringify(typesToAdd),
  //                 'image' : imageProduct
  //             },
  //             success: (response) => {
  //                 console.log(response);
  //             },
  //             error: (response) => {
  //                 console.log(response);
  //             }
  //         })
  //     }else{
  //         $("#tomc-book-organization--product-image-error").removeClass("hidden");
  //     }
  // }

  expandTitleEditingOptions(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-book-options').hasClass('hidden')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--book-to-edit').removeClass('tomc-book-options--cursor-pointer');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-book-options').removeClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('p').addClass('tomc-book-options--cursor-pointer');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--book-to-edit').addClass('tomc-book-options--cursor-pointer');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-options--cursor-pointer');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-book-options').addClass('hidden');
    }
  }
  openGenresOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getGenres',
      type: 'POST',
      data: {
        'book': this.bookId
        // ,
        // 'level' : 1
      },
      success: response => {
        if (this.genresOverlayIsOpen != true) {
          this.genresOverlayIsOpen = true;
          for (let i = 0; i < response.length; i++) {
            if (response[i]['genreid']) {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-genre-id', response[i]['id']).attr('data-genre-level', Number(response[i]['genre_level'])).attr('aria-label', response[i]['genre_name'] + ' is selected').html(response[i]['genre_name']).on('click', this.toggleGenreSelection.bind(this));
              if (Number(response[i]['genre_level']) === 1) {
                this.chosenGenres1.push(Number(response[i]['genreid']));
                this.oldGenres1.push(Number(response[i]['genreid']));
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-genres-container--1').append(this.newSpan);
              } else if (Number(response[i]['genre_level']) === 2) {
                this.chosenGenres2.push(Number(response[i]['genreid']));
                this.oldGenres2.push(Number(response[i]['genreid']));
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-genres-container--2').append(this.newSpan);
              } else if (Number(response[i]['genre_level']) === 3) {
                this.chosenGenres3.push(Number(response[i]['genreid']));
                this.oldGenres3.push(Number(response[i]['genreid']));
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-genres-container--3').append(this.newSpan);
              }
            } else {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-genre-id', response[i]['id']).attr('data-genre-level', Number(response[i]['genre_level'])).attr('aria-label', response[i]['genre_name'] + ' is not selected').html(response[i]['genre_name']).on('click', this.toggleGenreSelection.bind(this));
              if (Number(response[i]['genre_level']) === 1) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-genres-container--1').append(this.newSpan);
              } else if (Number(response[i]['genre_level']) === 2) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-genres-container--2').append(this.newSpan);
              } else if (Number(response[i]['genre_level']) === 3) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-genres-container--3').append(this.newSpan);
              }
            }
          }
          this.genresOverlay.addClass("tomc-book-organization__box--active");
        }
      },
      failure: response => {
        console.log(response);
      }
    });
  }
  openIdentitiesOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getIdentities',
      type: 'POST',
      data: {
        'book': this.bookId
      },
      success: response => {
        if (this.identitiesOverlayIsOpen != true) {
          this.identitiesOverlayIsOpen = true;
          for (let i = 0; i < response.length; i++) {
            if (response[i]['identityid']) {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-identity-id', response[i]['id']).attr('aria-label', response[i]['identity_name'] + ' is selected').html(response[i]['identity_name']).on('click', this.toggleIdentitySelection.bind(this));
              this.chosenIdentities.push(Number(response[i]['identityid']));
              this.oldIdentities.push(Number(response[i]['identityid']));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-identities-container').append(this.newSpan);
            } else {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-identity-id', response[i]['id']).attr('aria-label', response[i]['identity_name'] + ' is not selected').html(response[i]['identity_name']).on('click', this.toggleIdentitySelection.bind(this));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-identities-container').append(this.newSpan);
            }
            this.identitiesOverlay.addClass("tomc-book-organization__box--active");
          }
        }
      },
      failure: response => {
        console.log(response);
      }
    });
  }
  openLanguagesOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getLanguages',
      type: 'POST',
      data: {
        'book': this.bookId
      },
      success: response => {
        if (this.languageOverlayIsOpen != true) {
          this.languageOverlayIsOpen = true;
          for (let i = 0; i < response.length; i++) {
            if (response[i]['languageid']) {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
              this.chosenLanguages.push(Number(response[i]['languageid']));
              this.oldLanguages.push(Number(response[i]['languageid']));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-languages-container').append(this.newSpan);
            } else {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-languages-container').append(this.newSpan);
            }
            this.languagesOverlay.addClass("tomc-book-organization__box--active");
          }
        }
      },
      failure: response => {
        console.log(response);
      }
    });
  }
  openContentWarningsOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getContentWarnings',
      type: 'POST',
      data: {
        'book': this.bookId
      },
      success: response => {
        if (this.warningsOverlayIsOpen != true) {
          this.warningsOverlayIsOpen = true;
          for (let i = 0; i < response.length; i++) {
            if (response[i]['warningid']) {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
              this.chosenWarnings.push(Number(response[i]['warningid']));
              this.oldWarnings.push(Number(response[i]['warningid']));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-content-warnings-container').append(this.newSpan);
            } else {
              this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-content-warnings-container').append(this.newSpan);
            }
            this.contentWarningsOverlay.addClass("tomc-book-organization__box--active");
          }
        }
      },
      failure: response => {
        console.log(response);
      }
    });
  }
  openEditPenNameOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    let allNames = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getAllPenNamesByCreator',
      type: 'POST',
      success: response => {
        for (let i = 0; i < response.length; i++) {
          allNames.push(response[i]);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          beforeSend: xhr => {
            xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
          },
          url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getPenNameInfo',
          type: 'POST',
          data: {
            'book': this.bookId
          },
          success: response => {
            if (this.penNameOverlayIsOpen != true) {
              this.penNameOverlayIsOpen = true;
              let dropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<select />').attr('id', 'edit-book-pen-name-dropdown');
              let selectedId = 0;
              if (response.length > 0) {
                selectedId = response[0]['id'];
                let selectedOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option />').attr('value', response[0]['id']).attr('atria-label', 'your author names').text(response[0]['post_title']);
                dropdown.append(selectedOption);
              }
              for (let i = 0; i < allNames.length; i++) {
                if (allNames[i]['id'] != selectedId) {
                  let dropdownOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option />').attr('value', allNames[i]['id']).text(allNames[i]['post_title']);
                  dropdown.append(dropdownOption);
                }
              }
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-pen-name-container').append(dropdown);
              this.editPenNameOverlay.addClass('tomc-book-organization__box--active');
            }
          },
          error: response => {
            console.log(response);
          }
        });
      },
      error: response => {
        console.log(response);
      }
    });
  }
  openBasicInfoOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getBasicInfo',
      type: 'POST',
      data: {
        'book': this.bookId
      },
      success: response => {
        if (this.basicInfoOverlayIsOpen != true) {
          this.basicInfoOverlayIsOpen = true;
          this.newFormDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--edit-overlay-new-form');
          this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-title');
          this.newLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').attr('for', 'tomc-book-organization--title--edit').addClass('centered-text tomc-book-organization-label--edit').text('the title');
          this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').attr('name', 'tomc-book-organization--title--edit').addClass('centered-text tomc-book-organization-input--edit').val(response['title']);
          this.newDiv.append(this.newLabel);
          this.newDiv.append(this.newInput);
          this.newFormDiv.append(this.newDiv);
          this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-subtitle');
          this.newLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').attr('for', 'tomc-book-organization--subtitle--edit').addClass('centered-text tomc-book-organization-label--edit').text('the subtitle');
          this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').attr('name', 'tomc-book-organization--subtitle--edit').addClass('centered-text tomc-book-organization-input--edit').val(response['subtitle']);
          this.newDiv.append(this.newLabel);
          this.newDiv.append(this.newInput);
          this.newFormDiv.append(this.newDiv);
          this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-edition');
          this.newLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').attr('for', 'tomc-book-organization--edition--edit').addClass('centered-text tomc-book-organization-label--edit').text('the edition');
          this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').attr('name', 'tomc-book-organization--edition--edit').addClass('centered-text tomc-book-organization-input--edit').val(response['publication_edition']);
          this.newDiv.append(this.newLabel);
          this.newDiv.append(this.newInput);
          this.newFormDiv.append(this.newDiv);
          this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-description');
          this.newLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').attr('for', 'tomc-book-organization--description--edit').addClass('centered-text tomc-book-organization-label--edit').text('the description');
          this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<textarea />').attr('name', 'tomc-book-organization--description--edit').addClass('tomc-book-organization-textarea--edit').val(response['book_description']);
          this.newDiv.append(this.newLabel);
          this.newDiv.append(this.newInput);
          this.newFormDiv.append(this.newDiv).addClass('tomc-book-organization--form-div tomc-book-organization--form-div-excerpt');
          this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-excerpt');
          this.newLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').attr('for', 'tomc-book-organization--excerpt--edit').addClass('centered-text tomc-book-organization-label--edit').text('the excerpt');
          this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<textarea />').attr('name', 'tomc-book-organization--excerpt--edit').addClass('tomc-book-organization-textarea--edit').val(response['book_excerpt']);
          this.newDiv.append(this.newLabel);
          this.newDiv.append(this.newInput);
          this.newFormDiv.append(this.newDiv);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-basic-info-container').append(this.newFormDiv);
          this.basicInfoOverlay.addClass("tomc-book-organization__box--active");
          this.title = response['title'];
          this.subTitle = response['subtitle'];
          this.edition = response['publication_edition'];
          this.description = response['book_description'];
          this.excerpt = response['book_excerpt'];
        }
      },
      error: response => {
        console.log(response);
      }
    });
  }
  saveReadalikesEdits(e) {
    let newReadalikeBook0 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-0').children('.tomc-book-organization-input--edit-title-0').val();
    let newReadalikeAuthor0 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-0').children('.tomc-book-organization-input--edit-author-0').val();
    let newReadalikeBook1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-1').children('.tomc-book-organization-input--edit-title-1').val();
    let newReadalikeAuthor1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-1').children('.tomc-book-organization-input--edit-author-1').val();
    if (this.existingReadalikeBook0 != newReadalikeBook0 || this.existingReadalikeAuthor0 != newReadalikeAuthor0 || this.existingReadalikeBook1 != newReadalikeBook1 || this.existingReadalikeAuthor1 != newReadalikeAuthor1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/updateReadalikes',
        type: 'POST',
        data: {
          'book': this.bookId,
          'book0': newReadalikeBook0,
          'author0': newReadalikeAuthor0,
          'book1': newReadalikeBook1,
          'author1': newReadalikeAuthor1
        },
        success: response => {
          location.reload(true);
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-readalikes-no-changes').removeClass('hidden');
    }
  }
  openReadalikesOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getReadalikes',
      type: 'POST',
      data: {
        'book': this.bookId
      },
      success: response => {
        if (this.readalikesOverlayIsOpen != true) {
          this.readalikesOverlayIsOpen = true;
          this.newFormDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--edit-overlay-new-form');
          if (response[0]) {
            this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-0');
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-title-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-0-edit').val(response[0]['readalike_title']);
            this.newDiv.append(this.newInput);
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').html(' by ');
            this.newDiv.append(this.newSpan);
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-author-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-0-edit').val(response[0]['readalike_author']);
            this.newDiv.append(this.newInput);
            this.newFormDiv.append(this.newDiv);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
            this.existingReadalikeBook0 = response[0]['readalike_title'] == null ? '' : response[0]['readalike_title'];
            this.existingReadalikeAuthor0 = response[0]['readalike_author'] == null ? '' : response[0]['readalike_author'];
          } else {
            this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-0');
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-title-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-0-edit').attr('placeholder', 'book title');
            this.newDiv.append(this.newInput);
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').html(' by ');
            this.newDiv.append(this.newSpan);
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-author-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-0-edit').attr('placeholder', 'author');
            this.newDiv.append(this.newInput);
            this.newFormDiv.append(this.newDiv);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
          }
          if (response[1]) {
            this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-1');
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-title-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-1-edit').val(response[1]['readalike_title']);
            this.newDiv.append(this.newInput);
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').html(' by ');
            this.newDiv.append(this.newSpan);
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-autor-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-1-edit').val(response[1]['readalike_author']);
            this.newDiv.append(this.newInput);
            this.newFormDiv.append(this.newDiv);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
            this.existingReadalikeBook1 = response[1]['readalike_title'] == null ? '' : response[1]['readalike_title'];
            this.existingReadalikeAuthor1 = response[1]['readalike_author'] == null ? '' : response[1]['readalike_author'];
          } else {
            this.newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-1');
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-title-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-1-edit').attr('placeholder', 'book title');
            this.newDiv.append(this.newInput);
            this.newSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span />').html(' by ');
            this.newDiv.append(this.newSpan);
            this.newInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization-input--edit-author-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-1-edit').attr('placeholder', 'author');
            this.newDiv.append(this.newInput);
            this.newFormDiv.append(this.newDiv);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
          }
          this.readalikesOverlay.addClass("tomc-book-organization__box--active");
        }
      },
      error: response => {
        console.log(response);
      }
    });
  }
  saveGenreEdits(e) {
    if (this.chosenGenres1.length == 0 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0) {
      this.editBookGenresNoneAddedError.removeClass("hidden");
    } else {
      this.editBookGenresNoneAddedError.addClass("hidden");
      if (JSON.stringify(this.chosenGenres1) === JSON.stringify(this.oldGenres1) && JSON.stringify(this.chosenGenres2) === JSON.stringify(this.oldGenres2) && JSON.stringify(this.chosenGenres3) === JSON.stringify(this.oldGenres3)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-genres-no-changes').removeClass('hidden');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          beforeSend: xhr => {
            xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
          },
          url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookGenres',
          type: 'POST',
          data: {
            'book': this.bookId,
            'genres1': JSON.stringify(this.chosenGenres1),
            'genres2': JSON.stringify(this.chosenGenres2),
            'genres3': JSON.stringify(this.chosenGenres3)
          },
          success: response => {
            location.reload(true);
          },
          error: response => {
            console.log(response);
          }
        });
      }
    }
  }
  saveLanguageEdits(e) {
    if (JSON.stringify(this.chosenLanguages) === JSON.stringify(this.oldLanguages)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-languages-errors').removeClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-languages-no-changes').removeClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-no-languages-selected').addClass('hidden');
    } else if (this.chosenLanguages.length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-languages-errors').removeClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-no-languages-selected').removeClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-languages-no-changes').addClass('hidden');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookLanguages',
        type: 'POST',
        data: {
          'book': this.bookId,
          'languages': JSON.stringify(this.chosenLanguages)
        },
        success: response => {
          location.reload(true);
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
  savePenNameEdits(e) {
    let selectedPenName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#edit-book-pen-name-dropdown').val();
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookPenName',
      type: 'POST',
      data: {
        'book': this.bookId,
        'pennameid': selectedPenName
      },
      success: response => {
        location.reload(true);
      },
      error: response => {
        console.log(response);
      }
    });
  }
  saveWarningEdits(e) {
    if (JSON.stringify(this.chosenWarnings) === JSON.stringify(this.oldWarnings)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-warnings-no-changes').removeClass('hidden');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookWarnings',
        type: 'POST',
        data: {
          'book': this.bookId,
          'warnings': JSON.stringify(this.chosenWarnings)
        },
        success: response => {
          location.reload(true);
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
  saveIdentityEdits(e) {
    if (JSON.stringify(this.chosenIdentities) === JSON.stringify(this.oldIdentities)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-identities-no-changes').removeClass('hidden');
    } else if (this.chosenIdentities.length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-no-identities-selected').removeClass('hidden');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookIdentities',
        type: 'POST',
        data: {
          'book': this.bookId,
          'identities': JSON.stringify(this.chosenIdentities)
        },
        success: response => {
          location.reload(true);
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
  togglePublish(e) {
    let bookToUpdate = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    let newStatus = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('toggle');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/togglePublish',
      type: 'POST',
      data: {
        'book': bookToUpdate,
        'status': newStatus
      },
      success: response => {
        location.reload(true);
      },
      error: response => {
        console.log(response);
      }
    });
  }
  saveBasicInfoEdits(e) {
    let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-title').children('.tomc-book-organization-input--edit').val();
    let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-description').children('.tomc-book-organization-textarea--edit').val().substring(0, 3000);
    let newExcerpt = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-excerpt').children('.tomc-book-organization-textarea--edit').val().substring(0, 10000);
    if (this.title != newTitle || this.subTitle && this.subTitle != jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val() || !this.subTitle && jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val() || this.edition && this.edition != jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val() || !this.edition && jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val() || this.description != newDescription || this.excerpt != newExcerpt) {
      if (newTitle.length === 0 || newDescription.length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-errors').removeClass('hidden');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-no-changes').addClass('hidden');
        if (newTitle.length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-errors-title').removeClass('hidden');
        }
        if (newDescription.length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-errors-description').removeClass('hidden');
        }
        if (newExcerpt.length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-errors-excerpt').removeClass('hidden');
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          beforeSend: xhr => {
            xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
          },
          url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/updateBasicInfo',
          type: 'POST',
          data: {
            'book': this.bookId,
            'title': newTitle,
            'subtitle': jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val(),
            'edition': jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val(),
            'description': newDescription,
            'excerpt': newExcerpt
          },
          success: response => {
            location.reload(true);
          },
          error: response => {
            console.log(response);
          }
        });
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-errors').removeClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-no-changes').removeClass('hidden');
    }
  }
  openProductsOverlay(e) {
    this.bookId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
    let formatOptions = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getProductTypes',
      type: 'POST',
      success: response => {
        for (let i = 0; i < response.length; i++) {
          formatOptions.push(response[i]);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          beforeSend: xhr => {
            xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
          },
          url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getBookProducts',
          type: 'POST',
          data: {
            'book': this.bookId
          },
          success: response => {
            if (this.productsOverlayIsOpen != true) {
              this.productsOverlayIsOpen = true;
              for (let i = 0; i < response.length; i++) {
                let productDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--book-products-div');
                let productOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-book-organization--product-option');
                let checkbox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').addClass('tomc-book-organization--product-checkbox').attr('type', 'checkbox').attr('id', 'tomc-book-organization--book-product-id-' + response[i]['id']).val(response[i]['id']);
                if (response[i]['productid']) {
                  checkbox.prop("checked", true);
                }
                productOption.append(checkbox);
                let checkboxLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').addClass('tomc-book-organization--large-label').attr('for', 'tomc-book-organization--book-product-id-' + response[i]['id']).html(response[i]['post_title'] + ' (' + response[i]['name'] + ')');
                productOption.append(checkboxLabel);
                let thumbnail = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['guid']);
                productOption.append(thumbnail);
                productOption.append('<br><br>');
                let selectLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').addClass('tomc-book-organization--select-label').attr('for', 'tomc-book-organization--select-for-' + response[i]['id']).html('Which format is this product?');
                productOption.append(selectLabel);
                let typeSelect = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<select />').addClass('tomc-book-organization--product-format').attr('id', 'tomc-book-organization--select-for-' + response[i]['id']);
                for (let j = 0; j < formatOptions.length; j++) {
                  let selectOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option />').attr('value', formatOptions[j]['id']).text(formatOptions[j]['type_name']);
                  if (formatOptions[j]['id'] == response[i]['typeid']) {
                    selectOption.attr('selected', 'selected');
                  } else if (formatOptions[j]['type_name'] == response[i]['name']) {
                    selectOption.attr('selected', 'selected');
                  } else {
                    console.log('type name is ' + formatOptions[j]['type_name']);
                    console.log('name is ' + response[i]['name']);
                    console.log('typeid is ' + response[i]['typeid']);
                  }
                  typeSelect.append(selectOption);
                  console.log('type name is ' + formatOptions[j]['type_name']);
                  console.log('name is ' + response[i]['name']);
                  console.log('typeid is ' + response[i]['typeid']);
                }
                productOption.append(typeSelect);
                productOption.append('<br>');
                let radio = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input />').attr('type', 'radio').attr('name', 'tomc-book-organization--main-image-product').val(response[i]['id']).attr('id', 'tomc-book-organization--book-product-image-' + response[i]['id']);
                if (response[i]['productid'] == response[i]['product_image_id']) {
                  radio.prop('checked', true);
                }
                productOption.append(radio);
                let radioLabel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<label />').attr('for', 'tomc-book-organization--book-product-image-' + response[i]['id']).text("use this product's image as the main image for this book.");
                productOption.append(radioLabel);
                productDiv.append(productOption);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization__edit-products-container').append(productDiv);
              }
              this.productsOverlay.addClass("tomc-book-organization__box--active");
            }
          },
          failure: response => {
            console.log(response);
          }
        });
      },
      failure: response => {
        console.log(response);
      }
    });
  }
  closeEditOverlay(e) {
    this.bookId = 0;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.overlay-main-container').find('.tomc-book-org-html').html('');
    this.basicInfoOverlayIsOpen = false;
    this.languageOverlayIsOpen = false;
    this.genresOverlayIsOpen = false;
    this.identitiesOverlayIsOpen = false;
    this.warningsOverlayIsOpen = false;
    this.readalikesOverlayIsOpen = false;
    this.productsOverlayIsOpen = false;
    this.penNameOverlayIsOpen = false;
    this.title = '';
    this.subTitle = '';
    this.edition = '';
    this.description = '';
    this.excerpt = '';
    this.chosenLanguages = [];
    this.oldLanguages = [];
    this.chosenIdentities = [];
    this.oldIdentities = [];
    this.chosenWarnings = [];
    this.oldWarnings = [];
    this.existingReadalikeBook0 = '';
    this.existingReadalikeAuthor0 = '';
    this.existingReadalikeBook1 = '';
    this.existingReadalikeAuthor1 = '';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres2-error-section').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--genres3-error-section').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-warnings-no-changes').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-readalikes-no-changes').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-identities-no-changes').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-no-identities-selected').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-languages-errors').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--languages-error-section').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-basic-info-errors').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--edit-pen-name-overlay-error').addClass('hidden');
    this.chosenGenres1 = [];
    this.oldGenres1 = [];
    this.chosenGenres2 = [];
    this.oldGenres2 = [];
    this.chosenGenres3 = [];
    this.oldGenres3 = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization__overlay').removeClass("tomc-book-organization__box--active");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookInfo);

/***/ }),

/***/ "./src/modules/browse.js":
/*!*******************************!*\
  !*** ./src/modules/browse.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class BrowseStuff {
  constructor() {
    this.anyLevel1 = true;
    this.anyLevel2 = true;
    this.anyLevel3 = true;
    this.selectedGenres1 = [1, 2, 3];
    this.selectedGenres2 = [];
    this.selectedGenres3 = [];
    this.genreOptions1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--browse-option-1');
    this.genreOptions2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--browse-option-2');
    this.genreOptions3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--browse-option-3');
    this.rollButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--lets-roll-genres');
    this.resultsSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-browse--search-results-container');
    this.events();
  }
  events() {
    this.genreOptions1.on('click', this.toggleSelected1.bind(this));
    this.genreOptions2.on('click', this.toggleSelected2.bind(this));
    this.genreOptions3.on('click', this.toggleSelected3.bind(this));
    this.rollButton.on('click', this.rollResults.bind(this));
  }
  toggleSelected2(e) {
    console.log('in the beginning the selected genre 2s are ' + this.selectedGenres2 + ' and AnyGenre2 is ' + this.anyLevel2);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--browse-option-2-selected')) {
      this.anyLevel2 = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--browse-option-2-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html() + ' is not selected');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id') === 0) {
        this.selectedGenres2 = [];
      } else {
        for (let i = 0; i < this.selectedGenres2.length; i++) {
          if (this.selectedGenres2[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.selectedGenres2.splice(i, 1);
          }
        }
      }
      if (this.selectedGenres2.length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-2-error').removeClass('hidden');
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-2-error').addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--browse-option-2-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html() + ' is selected');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id') === 0) {
        this.anyLevel2 = true;
        this.selectedGenres2 = [];
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--browse-normal-2').each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('tomc-book-organization--browse-option-2-selected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html() + ' is not selected');
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genre-any-2').removeClass('tomc-book-organization--browse-option-2-selected');
        this.anyLevel2 = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--browse-option-2-selected');
        this.selectedGenres2.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
        if (this.selectedGenres2.length === jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--options-container').data('count')) {
          this.anyLevel2 = true;
        }
      }
    }
    console.log('at the end the selected genre 2s are ' + this.selectedGenres2 + ' and AnyGenre2 is ' + this.anyLevel2);
  }
  toggleSelected1(e) {
    console.log('at the beginning, selected genre 1s are ' + this.selectedGenres1 + ' and anyLevel1 is ' + this.anyLevel1);
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--browse-option-1-selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--browse-option-1-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html() + ' is not selected');
      for (let i = 0; i < this.selectedGenres1.length; i++) {
        if (this.selectedGenres1[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
          this.selectedGenres1.splice(i, 1);
        }
      }
      if (this.selectedGenres1.length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-1-error').removeClass('hidden');
      }
      this.anyLevel1 = false;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--browse-option-1-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html() + ' is selected');
      this.selectedGenres1.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-1-error').addClass('hidden');
      if (this.selectedGenres1.length === 3) {
        this.anyLevel1 = true;
      } else {
        this.anyLevel1 = false;
      }
    }
    console.log('at the end, selected genre 1s are ' + this.selectedGenres1 + ' and anyLevel1 is ' + this.anyLevel1);
  }
  toggleSelected3(e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-book-organization--browse-option-3-selected')) {
      this.anyLevel3 = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).removeClass('tomc-book-organization--browse-option-3-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html() + ' is not selected');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id') === 0) {
        this.selectedGenres3 = [];
      } else {
        for (let i = 0; i < this.selectedGenres3.length; i++) {
          if (this.selectedGenres3[i] == jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id')) {
            this.selectedGenres3.splice(i, 1);
          }
        }
      }
      if (this.selectedGenres3.length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-3-error').removeClass('hidden');
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-3-error').addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--browse-option-3-selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).html() + ' is selected');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id') === 0) {
        this.anyLevel3 = true;
        this.selectedGenres3 = [];
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--browse-normal-3').each(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('tomc-book-organization--browse-option-3-selected');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('aria-label', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html() + ' is not selected');
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genre-any-3').removeClass('tomc-book-organization--browse-option-3-selected');
        this.anyLevel3 = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-book-organization--browse-option-3-selected');
        this.selectedGenres3.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('genre-id'));
        if (this.selectedGenres3.length === jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--options-container').data('count')) {
          this.anyLevel3 = true;
        }
      }
    }
    console.log('at the end the selected genre 3s are ' + this.selectedGenres3 + ' and AnyGenre3 is ' + this.anyLevel3);
  }
  rollResults() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-1-error').hasClass('hidden') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-2-error').hasClass('hidden') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--browse-genres-3-error').hasClass('hidden')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcBrowse/v1/byGenres',
        type: 'POST',
        data: {
          'anyLevel1': this.anyLevel1 ? 1 : 0,
          'anyLevel2': this.anyLevel2 ? 1 : 0,
          'anyLevel3': this.anyLevel3 ? 1 : 0,
          'selectedGenres1': JSON.stringify(this.selectedGenres1),
          'selectedGenres2': JSON.stringify(this.selectedGenres2),
          'selectedGenres3': JSON.stringify(this.selectedGenres3)
        },
        success: response => {
          console.log(response);
          let alreadyAddedIds = [];
          this.resultsSection.html('');
          for (let i = 0; i < response.length; i++) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(response[i]['id'], alreadyAddedIds) > -1) {
              let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
              let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name']);
              newLink.append(newFormat);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-browse-genres--results--book-' + response[i]['id']).children('.tomc-browse--search-result-bottom-section').append(newLink);
            } else {
              let newDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
              let newTopSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />'); //.addClass('tomc-browse--search-result-top-section');
              let newBorder0 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-result-top-border-0');
              let newBorder1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-result-top-border-1');
              newBorder1.append(newBorder0);
              let newBorder2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-result-top-border-2');
              newBorder2.append(newBorder1);
              newTopSection.append(newBorder2);
              let newTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h3 />').html(response[i]['title']);
              newBorder0.append(newTitle);
              let newAuthor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
              newBorder0.append(newAuthor);
              let newImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', response[i]['product_image_id']);
              newBorder0.append(newImage);
              newDiv.append(newTopSection);
              let newBottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section');
              let newDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['book_description'].substring(0, 500) + '...');
              newBottomSection.append(newDescription);
              newBottomSection.append('<h4 class="centered-text">available in</h4>');
              let newLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
              let newFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[i]['type_name']);
              newLink.append(newFormat);
              newBottomSection.append(newLink);
              newDiv.append(newBottomSection);
              this.resultsSection.append(newDiv);
              alreadyAddedIds.push(response[i]['id']);
            }
          }
          this.resultsSection.removeClass('hidden');
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      console.log('else');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowseStuff);

/***/ }),

/***/ "./src/modules/pen-names.js":
/*!**********************************!*\
  !*** ./src/modules/pen-names.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class PenNames {
  constructor() {
    this.displaySections = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--display-penname-section');
    this.editButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-penname-bio');
    this.editSections = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--edit-penname-section');
    this.saveEditButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--save-penname-edit');
    this.cancelEditButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-book-organization--cancel-penname-edit');
    this.newName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization-new-penname');
    this.newNameBio = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--ew-name-bio');
    this.saveNewName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--save-new-penname');
    this.cancelNewName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-organization--cancel-new-penname');
    this.events();
  }
  events() {
    this.editButtons.on('click', this.editPenName.bind(this));
    this.cancelEditButtons.on('click', this.cancelEdit.bind(this));
    this.saveEditButtons.on('click', this.submitEdit.bind(this));
    this.saveNewName.on('click', this.submitNewName.bind(this));
    this.cancelNewName.on('click', this.clearNewName.bind(this));
  }
  editPenName(e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--display-penname-section').parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-penname-section').toggleClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-book-organization--display-penname-section').toggleClass('hidden');
  }
  cancelEdit(e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent().children('.tomc-blank-bio-message').addClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--edit-penname-section').parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--display-penname-section').toggleClass('hidden');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--edit-penname-section').toggleClass('hidden');
  }
  clearNewName(e) {
    this.newName.val('');
    this.newNameBio.val('');
  }
  submitEdit(e) {
    let $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--edit-penname-section').children('.tomc-book-organization-textarea--edit').val().substring(0, 1000);
    let $id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent('.tomc-book-organization--edit-penname-section').parent('.tomc-book-organization--book-to-edit').data('pen-name');
    if ($content) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent().children('.tomc-blank-bio-message').addClass('hidden');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcPennames/v1/submitEdit',
        type: 'POST',
        data: {
          'content': $content,
          'postId': $id
        },
        success: response => {
          console.log(response);
          location.reload(true);
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent().parent().children('.tomc-blank-bio-message').removeClass('hidden');
    }
  }
  submitNewName(e) {
    let $name = this.newName.val().substring(0, 100);
    let $content = this.newNameBio.val().substring(0, 1000);
    if ($name) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-blank-new-name-message').addClass('hidden');
      if ($content) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-blank-new-bio-message').addClass('hidden');
        this.newPenNameData = {
          'title': $name,
          'content': $content,
          'status': 'publish'
        };
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          beforeSend: xhr => {
            xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
          },
          url: tomcBookorgData.root_url + '/wp-json/wp/v2/author-profile',
          type: 'POST',
          data: this.newPenNameData,
          success: response => {
            console.log(response);
            location.reload(true);
          },
          error: response => {
            console.log(response);
          }
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-blank-new-bio-message').removeClass('hidden');
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-blank-new-name-message').removeClass('hidden');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PenNames);

/***/ }),

/***/ "./src/modules/shop-displays.js":
/*!**************************************!*\
  !*** ./src/modules/shop-displays.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class ShopDisplays {
  constructor() {
    this.oldestButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-shop-books-oldest');
    this.newestButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-shop-books-newest');
    this.randomButtons = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tomc-shop-books-random');
    this.audiobooksContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-org--container-audiobooks');
    this.ebooksContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-org--container-ebooks');
    this.physicalContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tomc-book-org--container-physical');
    this.events();
  }
  events() {
    this.oldestButtons.on('click', this.getByDate.bind(this));
    this.newestButtons.on('click', this.getByDate.bind(this));
    this.randomButtons.on('click', this.getRandom.bind(this));
  }
  toggleHTML(e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-shop-books-sort-by-section').children('.tomc-shop-books-sort-options-selected').removeClass('tomc-shop-books-sort-options-selected');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('tomc-shop-books-sort-options-selected');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').addClass('contracting');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container').html('');
  }
  getByDate(e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-shop-books-sort-options-selected')) {
      let format = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
      let orderBy = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).data('order');
      this.toggleHTML(e);
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/byDateAndFormat',
        type: 'GET',
        data: {
          'format': format,
          'order': orderBy
        },
        success: response => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
          let columnsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container');
          for (let $index = 0; $index < response.length; $index++) {
            let bookDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-bookorg--all-columns');
            if ($index % 3 == 0) {
              bookDiv.addClass('tomc-book-org--three-of-three');
            } else if ($index % 2 == 0) {
              bookDiv.addClass('tomc-book-org--two-of-three');
            } else {
              bookDiv.addClass('tomc-book-org--one-of-three');
            }
            if ($index % 4 == 0) {
              bookDiv.addClass('tomc-book-org--four-of-four');
            } else if ($index % 3 == 0) {
              bookDiv.addClass('tomc-book-org--three-of-four');
            } else if ($index % 2 == 0) {
              bookDiv.addClass('tomc-book-org--two-of-four');
            } else {
              bookDiv.addClass('tomc-book-org--one-of-four');
            }
            let bookLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[$index]['product_url']);
            let h3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h3 />').html(response[$index]['title']);
            bookLink.append(h3);
            bookDiv.append(bookLink);
            let p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('centered-text');
            let strong = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<strong />').html(response[$index]['pen_name'] ? 'by ' + response[$index]['pen_name'] : 'by unknown or anonymous author');
            p.append(strong);
            bookDiv.append(p);
            let bottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section prewrap');
            p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[$index]['book_description'].substr(0, 500) + '...');
            bottomSection.append(p);
            bookDiv.append(bottomSection);
            columnsContainer.append(bookDiv);
          }
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
  getRandom(e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('tomc-shop-books-sort-options-selected')) {
      let format = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
      this.toggleHTML(e);
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        beforeSend: xhr => {
          xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
        },
        url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/byFormatRandom',
        type: 'GET',
        data: {
          'format': format
        },
        success: response => {
          console.log(response);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
          let columnsContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container');
          for (let $index = 0; $index < response.length; $index++) {
            let bookDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-bookorg--all-columns');
            if ($index % 3 == 0) {
              bookDiv.addClass('tomc-book-org--three-of-three');
            } else if ($index % 2 == 0) {
              bookDiv.addClass('tomc-book-org--two-of-three');
            } else {
              bookDiv.addClass('tomc-book-org--one-of-three');
            }
            if ($index % 4 == 0) {
              bookDiv.addClass('tomc-book-org--four-of-four');
            } else if ($index % 3 == 0) {
              bookDiv.addClass('tomc-book-org--three-of-four');
            } else if ($index % 2 == 0) {
              bookDiv.addClass('tomc-book-org--two-of-four');
            } else {
              bookDiv.addClass('tomc-book-org--one-of-four');
            }
            let bookLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a />').addClass('centered-text').attr('href', response[$index]['product_url']);
            let h3 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<h3 />').html(response[$index]['title']);
            bookLink.append(h3);
            bookDiv.append(bookLink);
            let p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').addClass('centered-text');
            let strong = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<strong />').html(response[$index]['pen_name'] ? 'by ' + response[$index]['pen_name'] : 'by unknown or anonymous author');
            p.append(strong);
            bookDiv.append(p);
            let bottomSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').addClass('tomc-browse--search-result-bottom-section prewrap');
            p = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p />').html(response[$index]['book_description'].substr(0, 500) + '...');
            bottomSection.append(p);
            bookDiv.append(bottomSection);
            columnsContainer.append(bookDiv);
          }
        },
        error: response => {
          console.log(response);
        }
      });
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopDisplays);

/***/ }),

/***/ "./src/modules/suggestions.js":
/*!************************************!*\
  !*** ./src/modules/suggestions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Suggestions {
  constructor() {
    this.suggestionSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--enter-suggestion-section");
    this.suggestionText = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--suggestion-text");
    this.gotItSection = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--got-suggestion");
    // uncomment the below if we decide to add multiple suggestion options -------------
    // this.instructions = $("#tomc-book-organization--suggestion-instructions");
    // this.dropdown = $("#tomc-book-organization--suggestion-types-select");
    this.submit = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#tomc-book-organization--submit-suggestion");
    this.events();
  }
  events() {
    // this.dropdown.on('change', this.updateInstructions.bind(this));
    this.submit.on('click', this.submitSuggestion.bind(this));
  }
  // updateInstructions(){
  //     console.log('called');
  //     if (this.dropdown.val() > 0){
  //         this.instructions.html(this.dropdown.find(':selected').data('instruction'));
  //         this.suggestionSection.removeClass('hidden');
  //     } else {
  //         this.instructions.html('');
  //         this.suggestionSection.addClass('hidden');
  //     }
  // }
  submitSuggestion() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      beforeSend: xhr => {
        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
      },
      url: tomcBookorgData.root_url + '/wp-json/tomcSuggestions/v1/simpleTriggerSuggestion',
      type: 'POST',
      data: {
        'suggestion': this.suggestionText.val().substring(0, 200)
      },
      success: response => {
        this.suggestionSection.addClass('hidden');
        this.gotItSection.removeClass('hidden');
      },
      error: response => {
        console.log(response);
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suggestions);

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
/* harmony import */ var _modules_book_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/book-form */ "./src/modules/book-form.js");
/* harmony import */ var _modules_browse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/browse */ "./src/modules/browse.js");
/* harmony import */ var _modules_suggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/suggestions */ "./src/modules/suggestions.js");
/* harmony import */ var _modules_shop_displays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shop-displays */ "./src/modules/shop-displays.js");
/* harmony import */ var _modules_pen_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pen-names */ "./src/modules/pen-names.js");





const tomcBookForm = new _modules_book_form__WEBPACK_IMPORTED_MODULE_0__["default"]();
const tomcBrowseStuff = new _modules_browse__WEBPACK_IMPORTED_MODULE_1__["default"]();
const tomcSuggestions = new _modules_suggestions__WEBPACK_IMPORTED_MODULE_2__["default"]();
const tomcShopDisplays = new _modules_shop_displays__WEBPACK_IMPORTED_MODULE_3__["default"]();
const tomcPenNames = new _modules_pen_names__WEBPACK_IMPORTED_MODULE_4__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map