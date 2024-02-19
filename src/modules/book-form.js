import $ from 'jquery';

class BookInfo{
    constructor(){
        // main elements in the main form to create a new book
        this.addBookForm = $("#tomc-book-organization--add-book");
        this.addBookSaveButton = $("#tomc-book-organization--save-book");
        // required inputs
        this.bookTitle = $("#tomc-book-organization--title");
        this.bookDescription = $("#tomc-book-organization--description");
        this.bookExcerpt = $("#tomc-book-organization--excerpt");
        // optional inputs
        this.bookSubtitle = $("#tomc-book-organization--subtitle");
        this.bookEdition = $("#tomc-book-organization--edition");
        //radio buttons
        this.subtitleYesButton = $("#tomc-book-organization--subtitle-yes");
        this.subtitleNoButton = $("#tomc-book-organization--subtitle-no");
        this.editionYesButton = $("#tomc-book-organization--new-edition-yes");
        this.editionNoButton = $("#tomc-book-organization--new-edition-no");
        this.fictionButton = $("#tomc-book-organization--fiction");
        this.nonfictionButton = $("#tomc-book-organization--nonfiction");
        this.poetryButton = $("#tomc-book-organization--poetry");
        // errors
        this.addBookErrorsDiv = $("#tomc-book-organization--add-book-errors");
        this.addBookTitleError = $("#tomc-book-organization--add-book-errors-title");
        this.addBookDescriptionError = $("#tomc-book-organization--add-book-errors-description");
        this.addBookExcerptError = $("#tomc-book-organization--add-book-errors-excerpt");
        this.addBookGenresErrorsDiv = $("#tomc-book-organization--add-book-genre-errors");
        this.addReadalikesError = $("#tomc-book-organization--add-readalike-errors");
        //book languages form
        this.bookLanguagesForm = $("#tomc-book-organization--book-languages-form");
        this.addLanguageButton = $(".tomc-book-organization--add-language");
        this.saveLanguagesButton = $("#tomc-book-organization--save-book-languages");
        //book genres form
        this.bookGenresForm = $("#tomc-book-organization--book-genre-form");
        this.addGenreButtons = $(".tomc-book-organization--add-genre");
        this.saveGenresButton = $("#tomc-book-organization--save-book-genres");
        //book identities form
        this.bookIdentitiesForm = $("#tomc-book-organization--book-identities-form");
        this.addIdentityOverlayButton = $(".tomc-book-organization--add-identity");
        this.saveIdentitiesButton = $("#tomc-book-organization--save-book-identities");
        //book readalikes form
        this.bookReadalikesForm = $("#tomc-book-organization--readalikes");
        this.readalikeBook0 = $("#tomc-book-organization__readalike-book-0");
        this.readalikeAuthor0 = $("#tomc-book-organization__readalike-author-0");
        this.readalikeBook1 = $("#tomc-book-organization__readalike-book-1");
        this.readalikeAuthor1 = $("#tomc-book-organization__readalike-author-1");
        this.saveReadalikesButton = $("#tomc-book-organization--save-book-readalikes");
        //book content warnings form
        this.bookWarningsForm = $("#tomc-book-organization--book-warnings-form");
        this.addWarningButton = $(".tomc-book-organization--add-warning");
        this.saveWarningsButton = $("#tomc-book-organization--save-book-warnings");
        //book pen name form
        this.bookPenNameForm = $("#tomc-book-organization--book-pen-name");
        this.addPenNameOverlayButton = $(".tomc-book-organization--add-pen-name");
        this.selectPenName = $("#tomc-book-organization--book-pen-name-select");
        this.savePenNameButton = $("#tomc-book-organization--save-book-pen-name");
        //book products form
        this.bookProductsForm = $("#tomc-book-organization--book-products");
        this.bookProductsSaveButton = $("#tomc-book-organization--save-book-products");
        this.bookProductsSavePublishButton = $("#tomc-book-organization--save-book-products-publish");
        this.bookProductsAddProductButton = $(".tomc-book-organization--add-product");
        this.bookProductsAddInstructions = $("#tomc-book-organization--products-instruction-section");
        //add book overlays
        this.languageOverlayCloseButton = $("#tomc-book-organization__language-overlay-close");
        this.languageOverlay = $("#tomc-book-organization__language-overlay");
        this.languageInput = $("#tomc-book-organization__new-language");
        this.addNewLanguageButton = $("#tomc-book-organization--new-language");
        this.genreOverlayCloseButton = $("#tomc-book-organization__genre-overlay-close");
        this.genreOverlay = $("#tomc-book-organization__genre-overlay");
        this.genreInput = $("#tomc-book-organization__new-genre");
        this.addGenreButton = $('#tomc-book-organization--new-genre');
        this.identityOverlayCloseButton = $("#tomc-book-organization__identity-overlay-close");
        this.identityOverlay = $("#tomc-book-organization__identity-overlay");
        this.identityInput = $("#tomc-book-organization__new-identity");
        this.addIdentityButton = $("#tomc-book-organization--new-identity");
        this.warningOverlayCloseButton = $("#tomc-book-organization__warning-overlay-close");
        this.warningOverlay = $("#tomc-book-organization__warning-overlay");
        this.warningInput = $("#tomc-book-organization__new-warning");
        this.addNewWarningButton = $("#tomc-book-organization--new-warning");
        this.penNameOverlay = $("#tomc-book-organization__pen-name-overlay");
        this.penNameInput = $("#tomc-book-organization__new-pen-name");
        this.addNewPenNameButton = $("#tomc-book-organization--new-pen-name");
        this.penNameOverlayCloseButton = $("#tomc-book-organization__pen-name-overlay-close");
        // toggle select buttons
        this.selectLanguageButtons = $(".tomc-book-organization--option-languages");        
        this.selectGenreButtons = $(".tomc-book-organization--option");
        this.selectIdentityButtons = $(".tomc-book-organization--option-alt-0");
        this.selectWarningButtons = $(".tomc-book-organization--option-alt");
        // edit book titles
        this.bookOptionTitles = $('.tomc-book-organization--book-to-edit-title');
        // edit book overlays
        this.closeOverlayButtons = $('.tomc-book-organization--close-overlay');
        this.basicInfoOverlay = $('#tomc-book-organization__edit-basic-info-overlay');
        this.languagesOverlay = $('#tomc-book-organization__edit-languages-overlay');
        this.genresOverlay = $('#tomc-book-organization__edit-genres-overlay');
        this.identitiesOverlay = $('#tomc-book-organization__edit-identities-overlay');
        this.readalikesOverlay = $('#tomc-book-organization__edit-readalikes-overlay');
        this.contentWarningsOverlay = $('tomc-book-organization__edit-content-warnings-overlay');
        this.productsOverlay = $('tomc-book-organization__edit-products-overlay');
        // edit options
        this.editBasicInfoOption = $('.tomc-book-organization--edit-basic-info');
        this.editLanguagesOption = $('.tomc-book-organization--edit-languages');
        this.editGenresOption = $('.tomc-book-organization--edit-genres');
        this.editIdentitiesOption = $('.tomc-book-organization--edit-character-identities');
        this.editReadalikesOption = $('.tomc-book-organization--edit-readalikes');
        this.editWarningsOption = $('.tomc-book-organization--edit-content-warnings');
        this.productsOption = $('.tomc-book-organization--edit-linked-products');
        // basic info
        this.saveBasicInfoEditsButton = $('#tomc-book-organization--save-basic-info-edits');
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
        this.basicInfoOverlayIsOpen = false;
        this.languageOverlayIsOpen = false;
        this.title = '';
        this.subTitle = '';
        this.edition = '';
        this.description = '';
        this.excerpt = '';
    }

    events(){
        //add book events
        this.subtitleYesButton.on("click", function(){
            $("#tomc-book-organization--subtitle-div").removeClass("hidden");
        });
        this.subtitleNoButton.on("click", function(){
            $("#tomc-book-organization--subtitle-div").addClass("hidden");
        });
        this.editionYesButton.on("click", function(){
            $("#tomc-book-organization--edition-div").removeClass("hidden");
        });
        this.editionNoButton.on("click", function(){
            $("#tomc-book-organization--edition-div").addClass("hidden");
        });
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
        this.bookProductsSaveButton.on("click", this.saveBookProducts.bind(this));
        this.bookProductsSavePublishButton.on("click", this.savePublish.bind(this));
        //toggle events
        this.selectLanguageButtons.on("click", this.toggleLanguageSelection.bind(this));
        this.selectGenreButtons.on("click", this.toggleGenreSelection.bind(this));
        this.selectWarningButtons.on("click", this.toggleWarningSelection.bind(this));
        this.selectIdentityButtons.on("click", this.toggleIdentitySelection.bind(this));
        //edit book events
        this.bookOptionTitles.on('click', this.expandTitleEditingOptions.bind(this));
        // overlays
        this.closeOverlayButtons.on('click', this.closeEditOverlay.bind(this));
        this.editBasicInfoOption.on('click', this.openBasicInfoOverlay.bind(this));
        this.editLanguagesOption.on('click', this.openLanguagesOverlay.bind(this));
        // this.editIdentitiesOption.on('click', this.openIdentitiesOverlay.bind(this));
        // this.editGenresOption.on('click', this.openGenresOverlay.bind(this));
        // this.editReadalikesOption.on('click', this.openReadalikesOverlay.bind(this));
        // this.editWarningsOption.on('click', this.openContentWarningsOverlay.bind(this));
        // this.editProductsOption.on('click', this.openProductsOverlay.bind(this));
        // basic info
        this.saveBasicInfoEditsButton.on('click', this.saveBasicInfoEdits.bind(this));
    }

    toggleLanguageSelection(e){
        console.log('chosen languages length is ' + this.chosenLanguages.length);
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            for (let i = 0; i < this.chosenLanguages.length; i++){
                if (this.chosenLanguages[i] == $(e.target).data('language-id')){
                    this.chosenLanguages.splice(i, 1);
                }
            }
            $('#tomc-book-organization--languages-error-section').addClass('hidden');
        } else {
            if (this.chosenLanguages.length < 3) {
                $("#tomc-book-organization--add-no-languages-selected").addClass("hidden");
                this.chosenLanguages.push($(e.target).data('language-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');
            } else {
                $('#tomc-book-organization--languages-error-section').removeClass('hidden');
            }
        }
    }

    toggleGenreSelection(e){
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            if ($(e.target).data('genre-level') == 1){
                this.chosenGenres1 = [];
                $(e.target).removeClass('tomc-book-organization--option-selected');
                $('#tomc-book-organization--genres1-error-section').addClass('hidden');
            } else if ($(e.target).data('genre-level') == 2){
                for (let i = 0; i < this.chosenGenres2.length; i++){
                    if (this.chosenGenres2[i] == $(e.target).data('genre-id')){
                        this.chosenGenres2.splice(i, 1);
                    }
                }
                $(e.target).removeClass('tomc-book-organization--option-selected');
                $('#tomc-book-organization--genres2-error-section').addClass('hidden');
            } else if ($(e.target).data('genre-level') == 3){
                for (let i = 0; i < this.chosenGenres3.length; i++){
                    if (this.chosenGenres3[i] == $(e.target).data('genre-id')){
                        this.chosenGenres3.splice(i, 1);
                    }
                }
                $(e.target).removeClass('tomc-book-organization--option-selected');
                $('#tomc-book-organization--genres3-error-section').addClass('hidden');
            }
        } else {
            if ($(e.target).data('genre-level') == 1){
                if (this.chosenGenres1.length < 3) {
                    this.chosenGenres1 = $(e.target).data('genre-id');
                    $(e.target).addClass('tomc-book-organization--option-selected');
                } else {
                    $('#tomc-book-organization--genres1-error-section').removeClass('hidden');
                }
            } else if ($(e.target).data('genre-level') == 2){
                if (this.chosenGenres2.length < 2) {
                    this.chosenGenres2.push($(e.target).data('genre-id'));
                    $(e.target).addClass('tomc-book-organization--option-selected');
                } else {
                    $('#tomc-book-organization--genres2-error-section').removeClass('hidden');
                }
            } else if ($(e.target).data('genre-level') == 3){
                if (this.chosenGenres3.length < 10) {
                    this.chosenGenres3.push($(e.target).data('genre-id'));
                    $(e.target).addClass('tomc-book-organization--option-selected');
                } else {
                    $('#tomc-book-organization--genres3-error-section').removeClass('hidden');
                }
            }
        }
    }

    toggleIdentitySelection(e){
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            for (let i = 0; i < this.chosenIdentities.length; i++){
                if (this.chosenIdentities[i] == $(e.target).data('identity-id')){
                    this.chosenIdentities.splice(i, 1);
                }
            }
            $('#tomc-book-organization--identities-error-section').addClass('hidden');
        } else {
            if (this.chosenIdentities.length < 5) {
                $("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
                this.chosenIdentities.push($(e.target).data('identity-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');
            } else {
                $('#tomc-book-organization--identities-error-section').removeClass('hidden');
            }
        }
    }

    toggleWarningSelection(e){
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            for (let i = 0; i < this.chosenWarnings.length; i++){
                if (this.chosenWarnings[i] == $(e.target).data('warning-id')){
                    this.chosenWarnings.splice(i, 1);
                }
            }
            $('#tomc-book-organization--warnings-error-section').addClass('hidden');
        } else {
            if (this.chosenWarnings.length < 10) {
                this.chosenWarnings.push($(e.target).data('warning-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');
            } else {
                $('#tomc-book-organization--warnings-error-section').removeClass('hidden');
            }
        }
        if (this.chosenWarnings.length > 0) {
            this.saveWarningsButton.text('save and continue');
        } else {
            this.saveWarningsButton.text('continue');
        }
    }

    showAddProductsInstructions(){
        console.log('book products add button called');
        this.bookProductsAddInstructions .hasClass("hidden") ? this.bookProductsAddInstructions.removeClass("hidden") : this.bookProductsAddInstructions.addClass("hidden");
    }

    closeLanguageOverlay(){
        this.languageOverlay.removeClass("tomc-book-organization__box--active");
        this.languageInput.val('');
        $("body").removeClass("body-no-scroll");
    }

    openLanguageOverlay(e){
        this.currentUserId = $(e.target).data('user-id');
        this.languageOverlay.addClass("tomc-book-organization__box--active");
        $("body").addClass("body-no-scroll");
    }

    closeGenreOverlay(){
        this.genreOverlay.removeClass("tomc-book-organization__box--active");
        this.genreInput.val('');
        $("body").removeClass("body-no-scroll");
    }

    openGenreOverlay(e){
        this.addedGenreLevel = $(e.target).data('genre-level');
        this.currentUserId = $(e.target).data('user-id');
        this.genreOverlay.addClass("tomc-book-organization__box--active");
        $("body").addClass("body-no-scroll");
    }

    closeIdentityOverlay(){
        this.identityOverlay.removeClass("tomc-book-organization__box--active");
        this.identityInput.val('');
        $("body").removeClass("body-no-scroll");
    }

    openIdentityOverlay(e){
        this.currentUserId = $(e.target).data('user-id');
        this.identityOverlay.addClass("tomc-book-organization__box--active");
        $("body").addClass("body-no-scroll");
    }

    closeWarningOverlay(){
        this.warningOverlay.removeClass("tomc-book-organization__box--active");
        this.warningInput.val('');
        $("body").removeClass("body-no-scroll");
    }

    openWarningOverlay(e){
        this.currentUserId = $(e.target).data('user-id');
        this.warningOverlay.addClass("tomc-book-organization__box--active");
        $("body").addClass("body-no-scroll");
    }

    closePenNameOverlay(){
        this.penNameOverlay.removeClass("tomc-book-organization__box--active");
        this.penNameInput.val('');
        $("body").removeClass("body-no-scroll");
    }

    openPenNameOverlay(e){
        this.currentUserId = $(e.target).data('user-id');
        this.penNameOverlay.addClass("tomc-book-organization__box--active");
        $("body").addClass("body-no-scroll");
    }

    addGenre(){
        this.genreName =  this.genreInput.val().substring(0, 200);
        if (this.genreInput != ''){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addGenre',
                type: 'POST',
                data: {
                    'genre_name' : this.genreName,
                    'genre_level' : this.addedGenreLevel,
                    'user' : this.currentUserId
                },
                success: (response) => {
                    if (response != 0 && response != 'fail') {
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-genre-id', response).attr('aria-checked', true).html(this.genreName).on('click', this.toggleGenreSelection.bind(this));
                        $('#tomc-book-organization--genres-' + this.addedGenreLevel).prepend(this.newSpan);
                        if (this.addedGenreLevel == 2){
                            if (this.chosenGenres2.length < 2) {
                                this.chosenGenres2.push(response);
                                this.newSpan.addClass('tomc-book-organization--option-selected');
                            } else {
                                $('#tomc-book-organization--genres2-error-section').removeClass('hidden');
                            }
                        } else if (this.addedGenreLevel == 3){
                            if (this.chosenGenres3.length < 10) {
                                this.chosenGenres3.push(response);
                                this.newSpan.addClass('tomc-book-organization--option-selected');
                            } else {
                                $('#tomc-book-organization--genres3-error-section').removeClass('hidden');
                            }
                        }
                    }                    
                    this.closeGenreOverlay();
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $('#tomc-book-organization--genre-overlay-error').removeClass("hidden");
        }
    }

    addIdentity(){
        this.identityName =  this.identityInput.val().substring(0, 200);
        if (this.identityName != ''){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addIdentity',
                type: 'POST',
                data: {
                    'identity_name' : this.identityName,
                    'user' : this.currentUserId
                },
                success: (response) => {
                    if (response != 0 && response != 'fail') {
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-identity-id', response).attr('aria-checked', true).html(this.identityName).on('click', this.toggleIdentitySelection.bind(this));
                        $('#tomc-book-organization--identities').prepend(this.newSpan);                        
                        $("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
                        if (this.chosenIdentities.length < 5) {
                            this.chosenIdentities.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
                        } else {
                            $('#tomc-book-organization--identities-error-section').removeClass('hidden');
                        }
                    }                    
                    this.closeIdentityOverlay();
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $('#tomc-book-organization--identity-overlay-error').removeClass("hidden");
        }
    }

    addLanguage(){
        this.languageName =  this.languageInput.val().substring(0, 200);
        if (this.languageName != ''){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addLanguage',
                type: 'POST',
                data: {
                    'language_name' : this.languageName,
                    'user' : this.currentUserId
                },
                success: (response) => {
                    if (response != 0 && response != 'fail') {
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response).attr('aria-checked', true).html(this.languageName).on('click', this.toggleLanguageSelection.bind(this));
                        $('#tomc-book-organization--languages').prepend(this.newSpan);                        
                        $("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
                        if (this.chosenLanguages.length < 3) {
                            this.chosenLanguages.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
                        } else {
                            $('#tomc-book-organization--languages-error-section').removeClass('hidden');
                        }
                    }                    
                    this.closeLanguageOverlay();
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $('#tomc-book-organization--language-overlay-error').removeClass("hidden");
        }
    }

    addWarning(){
        this.warningName =  this.warningInput.val().substring(0, 200);
        if (this.warningName != ''){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addWarning',
                type: 'POST',
                data: {
                    'warning_name' : this.warningName,
                    'user' : this.currentUserId
                },
                success: (response) => {
                    if (response != 0 && response != 'fail') {
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response).attr('aria-checked', true).html(this.warningName).on('click', this.toggleWarningSelection.bind(this));
                        $('#tomc-book-organization--warnings').prepend(this.newSpan);
                        if (this.chosenWarnings.length < 10) {
                            this.chosenWarnings.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
                            this.saveWarningsButton.text('save and continue');
                        } else {
                            $('#tomc-book-organization--warnings-error-section').removeClass('hidden');
                        }
                    }                    
                    this.closeWarningOverlay();
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $('#tomc-book-organization--warning-overlay-error').removeClass("hidden");
        }
    }

    addPenName(){
        this.newPenNameData = {
            'title':  this.penNameInput.val().substring(0, 200),
            'status': 'publish'
        }
        if (this.penName != ''){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/wp/v2/author-profile',
                type: 'POST',
                data: this.newPenNameData,
                success: (response) => {
                    console.log(response);
                    var newOption = $('<option />');
                    newOption.attr('value', response.id);
                    newOption.attr('selected', true);
                    newOption.html(response.title.rendered);
                    this.selectPenName.prepend(newOption);                        
                    $("#tomc-book-organization--add-pen-name-errors").addClass("hidden");                   
                    this.closePenNameOverlay();
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $('#tomc-book-organization--pen-name-overlay-error').removeClass("hidden");
        }
    }

    addBookGenres(e){
        if (this.chosenGenres1.length < 3 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0){
            this.addBookGenresErrorsDiv.removeClass("hidden");
        } else {
            this.addBookGenresErrorsDiv.addClass("hidden");
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookGenres',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'genres1' : JSON.stringify(this.chosenGenres1),
                    'genres2' : JSON.stringify(this.chosenGenres2),
                    'genres3' : JSON.stringify(this.chosenGenres3)
                },
                success: (response) => {
                    this.bookGenresForm.addClass("hidden");
                    this.bookIdentitiesForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }
    }chosenIdentities

    addBookLanguages(e){
        if (this.chosenLanguages.length > 0){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookLanguages',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'languages' : JSON.stringify(this.chosenLanguages)
                },
                success: (response) => {
                    console.log(response);
                    this.bookLanguagesForm.addClass("hidden");
                    this.bookGenresForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $("#tomc-book-organization--add-no-languages-selected").removeClass("hidden");
        }        
    }

    addBookIdentities(e){
        if (this.chosenIdentities.length > 0){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookIdentities',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'identities' : JSON.stringify(this.chosenIdentities)
                },
                success: (response) => {
                    this.bookIdentitiesForm.addClass("hidden");
                    this.bookWarningsForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $("#tomc-book-organization--add-no-identities-selected").removeClass("hidden");
        }        
    }

    addBookWarnings(e){
        if (this.chosenWarnings.length > 0) {
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookWarnings',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'warnings' : JSON.stringify(this.chosenWarnings)
                },
                success: (response) => {
                    this.bookWarningsForm.addClass("hidden");
                    this.bookReadalikesForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            this.bookWarningsForm.addClass("hidden");
            this.bookReadalikesForm.removeClass("hidden");
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        }
    }

    addBookPenName(e){
        console.log(this.selectPenName.val());
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookPenName',
            type: 'POST',
            data: {
                'book' : this.createdBookId,
                'penname' : this.selectPenName.val()
            },
            success: (response) => {
                this.bookPenNameForm.addClass("hidden");
                this.bookProductsForm.removeClass("hidden");
                $('html, body').animate({ scrollTop: 0 }, 'fast');
            },
            error: (response) => {
                console.log(response);
            }
        })
    }

    addBookReadalikes(e){
        if (this.readalikeBook0.val() == '' && this.readalikeBook1.val() == ''){
            this.addReadalikesError.removeClass("hidden");
        } else {
            this.addReadalikesError.addClass("hidden");
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookReadalikes',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'book0' : this.readalikeBook0.val(),
                    'author0' : this.readalikeAuthor0.val(),
                    'book1' : this.readalikeBook1.val(),
                    'author1' : this.readalikeAuthor1.val()
                },
                success: (response) => {
                    this.bookReadalikesForm.addClass("hidden");
                    this.bookPenNameForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }
    }

    addNewBook(e){
        console.log('book edition is ' + this.bookEdition.val().substring(0, 10));
        console.log('and as an int it is ' + parseInt(this.bookEdition.val().substring(0, 10)));
        if (this.bookTitle.val() != '' && this.bookDescription.val() != '' && this.bookExcerpt.val() != ''){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBook',
                type: 'POST',
                data: {
                    'title' : this.bookTitle.val().substring(0, 200),
                    'subtitle' : this.bookSubtitle.val().substring(0, 200),
                    'edition' : parseInt(this.bookEdition.val().substring(0, 10), 10),
                    'description' : this.bookDescription.val().substring(0, 1000),
                    'excerpt' : this.bookExcerpt.val().substring(0, 500),
                    'user' : $(e.target).data('user')
                },
                success: (response) => {
                    console.log(response);
                    this.createdBookId = response;
                    this.addBookForm.addClass("hidden");
                    // this.bookGenresForm.removeClass("hidden");                    
                    this.bookLanguagesForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            this.addBookErrorsDiv.removeClass("hidden");
            if (this.bookTitle.val() == ''){
                this.addBookTitleError.removeClass("hidden");
            } else {
                this.addBookTitleError.addClass("hidden");
            }
            if (this.bookDescription.val() == ''){
                this.addBookDescriptionError.removeClass("hidden");
            } else {
                this.addBookDescriptionError.addClass("hidden");
            }
            if (this.bookExcerpt.val() == ''){
                this.addBookExcerptError.removeClass("hidden");
            } else {
                this.addBookExcerptError.addClass("hidden");
            }
        }        
    }

    saveBookProducts(){
        var productsToAdd = [];
        var typesToAdd = [];
        $('.tomc-book-organization--product-checkbox:checkbox:checked').each(function(){
            productsToAdd.push(parseInt($(this).val()));
            typesToAdd.push(parseInt($(this).parent('.tomc-book-organization--product-option').children('select.tomc-book-organization--product-format').val()));
        });
        var imageProduct = $("input[name='tomc-book-organization--main-image-product']:checked").val();
        console.log('image product is ' + imageProduct);
        if(imageProduct){
            $("#tomc-book-organization--product-image-error").addClass("hidden");
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookProducts',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'products': JSON.stringify(productsToAdd),
                    'types': JSON.stringify(typesToAdd),
                    'image' : imageProduct
                },
                success: (response) => {
                    console.log(response);
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }else{
            $("#tomc-book-organization--product-image-error").removeClass("hidden");
        }
    }

    savePublish(){
        var productsToAdd = [];
        var typesToAdd = [];
        $('.tomc-book-organization--product-checkbox:checkbox:checked').each(function(){
            productsToAdd.push(parseInt($(this).val()));
            typesToAdd.push(parseInt($(this).parent('.tomc-book-organization--product-option').children('select.tomc-book-organization--product-format').val()));
        });
        var imageProduct = $("input[name='tomc-book-organization--main-image-product']:checked").val();
        console.log('image product is ' + imageProduct);
        if(imageProduct){
            $("#tomc-book-organization--product-image-error").addClass("hidden");
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/addBookPublish',
                type: 'POST',
                data: {
                    'book' : this.createdBookId,
                    'products': JSON.stringify(productsToAdd),
                    'types': JSON.stringify(typesToAdd),
                    'image' : imageProduct
                },
                success: (response) => {
                    console.log(response);
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }else{
            $("#tomc-book-organization--product-image-error").removeClass("hidden");
        }
    }

    expandTitleEditingOptions(e){
        if ($(e.target).parent().parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-book-options').hasClass('hidden')) {
            $(e.target).parent().parent('.tomc-book-organization--book-to-edit').removeClass('tomc-book-options--cursor-pointer');
            $(e.target).parent().parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-book-options').removeClass('hidden');
            $(e.target).parent('p').addClass('tomc-book-options--cursor-pointer');
        } else {
            $(e.target).parent().parent('.tomc-book-organization--book-to-edit').addClass('tomc-book-options--cursor-pointer');
            $(e.target).addClass('tomc-book-options--cursor-pointer');
            $(e.target).parent().parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-book-options').addClass('hidden');
        }        
    }
    
    openLanguagesOverlay(e){
        console.log('called');
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getLanguages',
            type: 'POST',
            data: {
                'book' : this.bookId
            },
            success: (response) => {
                if (this.languageOverlayIsOpen != true){
                    this.languageOverlayIsOpen = true;
                    for(let i = 0; i < response.length; i++){
                        if (response[i]['languageid']){
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language', response[i]['id']).attr('aria-checked', true).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                            $('.tomc-book-organization__edit-languages-container').append(this.newSpan);
                        } else {
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-language', response[i]['id']).attr('aria-checked', true).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                            $('.tomc-book-organization__edit-languages-container').append(this.newSpan);
                        }
                        this.languagesOverlay.addClass("tomc-book-organization__box--active");
                    }
                    this.languagesOverlay
                }
            },
            failure: (response) => {
                console.log(response);
            }
        })
    }

    openBasicInfoOverlay(e){
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getBasicInfo',
            type: 'POST',
            data: {
                'book' : this.bookId
            },
            success: (response) => {
                if (this.basicInfoOverlayIsOpen != true){
                    this.basicInfoOverlayIsOpen = true;
                    this.newFormDiv = $('<div />').addClass('tomc-book-organization--edit-overlay-new-form');
                    this.newDiv = $('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-title');
                    this.newLabel = $('<label />').attr('for', 'tomc-book-organization--title--edit').addClass('centered-text tomc-book-organization-label--edit').text('the title');
                    this.newInput = $('<input />').attr('name', 'tomc-book-organization--title--edit').addClass('centered-text tomc-book-organization-input--edit').val(response['title']);
                    this.newDiv.append(this.newLabel);
                    this.newDiv.append(this.newInput);
                    this.newFormDiv.append(this.newDiv);
                    this.newDiv = $('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-subtitle');
                    this.newLabel = $('<label />').attr('for', 'tomc-book-organization--subtitle--edit').addClass('centered-text tomc-book-organization-label--edit').text('the subtitle');
                    this.newInput = $('<input />').attr('name', 'tomc-book-organization--subtitle--edit').addClass('centered-text tomc-book-organization-input--edit').val(response['subtitle']);
                    this.newDiv.append(this.newLabel);
                    this.newDiv.append(this.newInput);
                    this.newFormDiv.append(this.newDiv);
                    this.newDiv = $('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-edition');
                    this.newLabel = $('<label />').attr('for', 'tomc-book-organization--edition--edit').addClass('centered-text tomc-book-organization-label--edit').text('the edition');
                    this.newInput = $('<input />').attr('name', 'tomc-book-organization--edition--edit').addClass('centered-text tomc-book-organization-input--edit').val(response['publication_edition']);
                    this.newDiv.append(this.newLabel);
                    this.newDiv.append(this.newInput);
                    this.newFormDiv.append(this.newDiv);
                    this.newDiv = $('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-description');
                    this.newLabel = $('<label />').attr('for', 'tomc-book-organization--description--edit').addClass('centered-text tomc-book-organization-label--edit').text('the description');
                    this.newInput = $('<textarea />').attr('name', 'tomc-book-organization--description--edit').addClass('tomc-book-organization-textarea--edit').val(response['book_description']);
                    this.newDiv.append(this.newLabel);
                    this.newDiv.append(this.newInput);
                    this.newFormDiv.append(this.newDiv).addClass('tomc-book-organization--form-div tomc-book-organization--form-div-excerpt');
                    this.newDiv = $('<div />').addClass('tomc-book-organization--form-div tomc-book-organization--form-div-excerpt');
                    this.newLabel = $('<label />').attr('for', 'tomc-book-organization--excerpt--edit').addClass('centered-text tomc-book-organization-label--edit').text('the excerpt');
                    this.newInput = $('<textarea />').attr('name', 'tomc-book-organization--excerpt--edit').addClass('tomc-book-organization-textarea--edit').val(response['book_excerpt']);
                    this.newDiv.append(this.newLabel);
                    this.newDiv.append(this.newInput);
                    this.newFormDiv.append(this.newDiv);
                    $('.tomc-book-organization__edit-basic-info-container').append(this.newFormDiv);
                    this.basicInfoOverlay.addClass("tomc-book-organization__box--active");
                    this.title = response['title'];
                    this.subTitle = response['subtitle'];
                    this.edition = response['publication_edition'];
                    this.description = response['book_description'];
                    this.excerpt = response['book_excerpt'];
                }
            },
            error: (response) => {
                console.log(response);
            }
        })
    }
    saveBasicInfoEdits(e){
        if (this.title != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-title').children('.tomc-book-organization-input--edit').val()
        || ((this.subTitle) && (this.subTitle != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val()))
        || ((! this.subTitle) && $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val())
        || ((this.edition) && (this.edition != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val()))
        || ((! this.edition) && $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val())
        || (this.description != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-description').children('.tomc-book-organization-textarea--edit').val())
        || (this.excerpt != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-excerpt').children('.tomc-book-organization-textarea--edit').val())
        ){
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/updateBasicInfo',
                type: 'POST',
                data: {
                    'book' : this.bookId,
                    'title' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-title').children('.tomc-book-organization-input--edit').val(),
                    'subtitle' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val(),
                    'edition' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val(),
                    'description' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-description').children('.tomc-book-organization-textarea--edit').val().substring(0, 1000),
                    'excerpt' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-excerpt').children('.tomc-book-organization-textarea--edit').val().substring(0, 500)
                },
                success: (response) => {
                    location.reload(true);
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            console.log('no changes have been made');
            this.closeEditOverlay(e);
        }
    }

    closeEditOverlay(e){
        this.bookId = 0;
        $(e.target).parent('.overlay-main-container').find('.tomc-book-org-html').html('');
        this.basicInfoOverlayIsOpen = false;
        this.languageOverlayIsOpen = false;
        this.title = '';
        this.subTitle = '';
        this.edition = '';
        this.description = '';
        this.excerpt = '';
        $(e.target).parent().parent('.tomc-book-organization__overlay').removeClass("tomc-book-organization__box--active");
    }

}

export default BookInfo;