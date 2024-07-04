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
        // errors
        this.addBookErrorsDiv = $("#tomc-book-organization--add-book-errors");
        this.addBookTitleError = $("#tomc-book-organization--add-book-errors-title");
        this.addBookDescriptionError = $("#tomc-book-organization--add-book-errors-description");
        this.addBookExcerptError = $("#tomc-book-organization--add-book-errors-excerpt");
        this.addBookGenresNoneAddedError = $(".tomc-book-organization--no-genres-added-error");
        this.editBookGenresNoneAddedError = $('.tomc-book-organization--no-genres-added-edit-error');
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
        this.penNameBioInput = $("#tomc-book-organization__new-name-bio");
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
        this.contentWarningsOverlay = $('#tomc-book-organization__edit-content-warnings-overlay');
        this.productsOverlay = $('#tomc-book-organization__edit-products-overlay');
        // edit options
        this.editBasicInfoOption = $('.tomc-book-organization--edit-basic-info');
        this.editLanguagesOption = $('.tomc-book-organization--edit-languages');
        this.editGenresOption = $('.tomc-book-organization--edit-genres');
        this.editIdentitiesOption = $('.tomc-book-organization--edit-character-identities');
        this.editReadalikesOption = $('.tomc-book-organization--edit-readalikes');
        this.editWarningsOption = $('.tomc-book-organization--edit-content-warnings');
        this.editProductsOption = $('.tomc-book-organization--edit-linked-products');
        // save edits
        this.saveBasicInfoEditsButton = $('#tomc-book-organization--save-basic-info-edits');
        this.saveLanguageEditsButton = $('#tomc-book-organization--save-languages-edits');
        this.saveGenreEditsButton = $('#tomc-book-organization--save-genres-edits');
        this.saveIdentityEditsButton = $('#tomc-book-organization--save-identities-edits');
        this.saveWarningEditsButton = $('#tomc-book-organization--save-content-warnings-edits');
        this.saveReadalikesEditsButton = $('#tomc-book-organization--save-readalikes-edits');
        this.saveProductsEditsButton = $('#tomc-book-organization--save-products-edits');
        // update publication status
        this.unpublishButtons = $('.tomc-book-organization--unpublish');
        this.publishButtons = $('.tomc-book-organization--publish');
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

    events(){
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
        this.editProductsOption.on('click', this.openProductsOverlay.bind(this));
        // save edits
        this.saveBasicInfoEditsButton.on('click', this.saveBasicInfoEdits.bind(this));
        this.saveLanguageEditsButton.on('click', this.saveLanguageEdits.bind(this));
        this.saveGenreEditsButton.on('click', this.saveGenreEdits.bind(this));
        this.saveIdentityEditsButton.on('click', this.saveIdentityEdits.bind(this));
        this.saveWarningEditsButton.on('click', this.saveWarningEdits.bind(this));
        this.saveReadalikesEditsButton.on('click', this.saveReadalikesEdits.bind(this));
        this.saveProductsEditsButton.on('click', this.saveBookProducts.bind(this, 'updateBookProducts'));
        this.publishButtons.on('click', this.togglePublish.bind(this));
        this.unpublishButtons.on('click', this.togglePublish.bind(this));
    }

    toggleLanguageSelection(e){
        console.log('before toggling the chosen language length is ' + this.chosenLanguages.length);
        console.log(this.chosenLanguages);
        let labelName = $(e.target).text();
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            $(e.target).attr('aria-label', labelName + ' is not selected');
            for (let i = 0; i < this.chosenLanguages.length; i++){
                if (this.chosenLanguages[i] == $(e.target).data('language-id')){
                    this.chosenLanguages.splice(i, 1);
                }
            }
            $('.tomc-book-organization--languages-error-section').addClass('hidden');            
            console.log('after toggling the chosen languages length is ' + this.chosenLanguages.length);
            console.log(this.chosenLanguages);
        } else {
            if (this.chosenLanguages.length < 3) {
                $(".tomc-book-organization--add-no-languages-selected").addClass("hidden");
                this.chosenLanguages.push($(e.target).data('language-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');  
                $(e.target).attr('aria-label', labelName + ' is selected');          
                console.log('after toggling the chosen languages length is ' + this.chosenLanguages.length);
                console.log(this.chosenLanguages);
            } else {
                $('.tomc-book-organization--languages-error-section').removeClass('hidden');
            }
        }
    }

    updateReadalikeContinueButton(e){
        setTimeout(() => {
            console.log('updating readalike button function called');
            if (this.readalikeBook0.val() != ''){
                console.log('readalike condition met');
                this.saveReadalikesButton.text('save and continue');
            } else {
                this.saveReadalikesButton.text('continue');
            }
        }, 3000)
    }

    toggleGenreSelection(e){
        let labelName = $(e.target).text();
        $('#tomc-book-organization--edit-genres-no-changes').addClass('hidden');
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            if ($(e.target).data('genre-level') == 1){
                console.log('toggling off a level 1');
                for (let i = 0; i < this.chosenGenres1.length; i++){
                    if (this.chosenGenres1[i] == $(e.target).data('genre-id')){
                        console.log('chosen genres 1 before splice is ' + this.chosenGenres1);
                        this.chosenGenres1.splice(i, 1);
                        console.log('chosen genres 1 after splice is ' + this.chosenGenres1);
                    }
                }
                $(e.target).removeClass('tomc-book-organization--option-selected');
                $(e.target).attr('aria-label', labelName + ' is not selected');
            } else if ($(e.target).data('genre-level') == 2){
                for (let i = 0; i < this.chosenGenres2.length; i++){
                    if (this.chosenGenres2[i] == $(e.target).data('genre-id')){
                        console.log('chosen genres 2 before splice is ' + this.chosenGenres2);
                        this.chosenGenres2.splice(i, 1);
                        console.log('chosen genres 2 after splice is ' + this.chosenGenres2);
                    }
                }
                $(e.target).removeClass('tomc-book-organization--option-selected');
                $(e.target).attr('aria-label', labelName + ' is not selected');
                $('.tomc-book-organization--genres2-error-section').addClass('hidden');
            } else if ($(e.target).data('genre-level') == 3){
                for (let i = 0; i < this.chosenGenres3.length; i++){
                    if (this.chosenGenres3[i] == $(e.target).data('genre-id')){
                        console.log('chosen genres 3 before splice is ' + this.chosenGenres3);
                        this.chosenGenres3.splice(i, 1);
                        console.log('chosen genres 3 after splice is ' + this.chosenGenres3);
                    }
                }
                $(e.target).removeClass('tomc-book-organization--option-selected');
                $(e.target).attr('aria-label', labelName + ' is not selected');
                $('.tomc-book-organization--genres3-error-section').addClass('hidden');
            }
        } else {
            if ($(e.target).data('genre-level') == 1){
                if (this.chosenGenres1.length < 3) {
                    this.chosenGenres1.push($(e.target).data('genre-id'));
                    $(e.target).addClass('tomc-book-organization--option-selected');
                    $(e.target).attr('aria-label', labelName + ' is selected');
                } 
            } else if ($(e.target).data('genre-level') == 2){
                if (this.chosenGenres2.length < 2) {
                    this.chosenGenres2.push($(e.target).data('genre-id'));
                    $(e.target).addClass('tomc-book-organization--option-selected');
                    $(e.target).attr('aria-label', labelName + ' is selected');
                } else {
                    $('.tomc-book-organization--genres2-error-section').removeClass('hidden');
                }
            } else if ($(e.target).data('genre-level') == 3){
                if (this.chosenGenres3.length < 10) {
                    this.chosenGenres3.push($(e.target).data('genre-id'));
                    $(e.target).addClass('tomc-book-organization--option-selected');
                    $(e.target).attr('aria-label', labelName + ' is selected');
                } else {
                    $('.tomc-book-organization--genres3-error-section').removeClass('hidden');
                }
            }
        }
    }

    toggleIdentitySelection(e){
        let labelName = $(e.target).text();
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            $(e.target).attr('aria-label', labelName + ' is not selected');
            for (let i = 0; i < this.chosenIdentities.length; i++){
                if (this.chosenIdentities[i] == $(e.target).data('identity-id')){
                    this.chosenIdentities.splice(i, 1);
                }
            }
            $('.tomc-book-organization--identities-error-section').addClass('hidden');
        } else {
            if (this.chosenIdentities.length < 5) {
                $("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
                this.chosenIdentities.push($(e.target).data('identity-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');
                $(e.target).attr('aria-label', labelName + ' is selected');
            } else {
                $('.tomc-book-organization--identities-error-section').removeClass('hidden');
            }
        }
    }

    toggleWarningSelection(e){
        let labelName = $(e.target).text();
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            $(e.target).attr('aria-label', labelName + ' is not selected');
            for (let i = 0; i < this.chosenWarnings.length; i++){
                if (this.chosenWarnings[i] == $(e.target).data('warning-id')){
                    this.chosenWarnings.splice(i, 1);
                }
            }
            $('.tomc-book-organization--warnings-error-section').addClass('hidden');
        } else {
            if (this.chosenWarnings.length < 10) {
                this.chosenWarnings.push($(e.target).data('warning-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');
                $(e.target).attr('aria-label', labelName + ' is selected');
            } else {
                $('.tomc-book-organization--warnings-error-section').removeClass('hidden');
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
        console.log('close language overlay called!!');
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
        this.penNameBioInput.val('');
        $("body").removeClass("body-no-scroll");
    }

    openPenNameOverlay(e){
        this.currentUserId = $(e.target).data('user-id');
        this.penNameOverlay.addClass("tomc-book-organization__box--active");
        $("body").addClass("body-no-scroll");
    }

    addGenre(){
        this.genreName =  this.genreInput.val().substring(0, 200);
        if (this.genreName == 'any genre'){
            this.genreName = 'the any-genre genre'
        } else if (this.genreName == 'anything'){
            this.genreName = 'books about ' + this.genreName;
        }
        if (this.genreInput != ''){
            console.log('going to add a genre');
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
                    console.log('getting there with the new genre');
                    if (response != 0 && response != 'fail') {
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-genre-id', response).attr('aria-label', this.genreName + ' is selected').html(this.genreName).on('click', this.toggleGenreSelection.bind(this));
                        $('#tomc-book-organization--genres-' + this.addedGenreLevel).prepend(this.newSpan);
                        if (this.addedGenreLevel == 2){
                            if (this.chosenGenres2.length < 2) {
                                this.chosenGenres2.push(response);
                                this.newSpan.addClass('tomc-book-organization--option-selected');
                                this.newSpan.attr('aria-label', this.genreName + ' is selected');
                            } else {
                                this.newSpan.attr('aria-label', this.genreName + ' is not selected');
                                $('.tomc-book-organization--genres2-error-section').removeClass('hidden');
                            }
                        } else if (this.addedGenreLevel == 3){
                            if (this.chosenGenres3.length < 10) {
                                this.chosenGenres3.push(response);
                                this.newSpan.addClass('tomc-book-organization--option-selected');
                                this.newSpan.attr('aria-label', this.genreName + ' is selected');
                            } else {
                                this.newSpan.attr('aria-label', this.genreName + ' is not selected');
                                $('.tomc-book-organization--genres3-error-section').removeClass('hidden');
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
        console.log('identity name is ' + this.identityName);
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
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-identity-id', response).attr('aria-label', this.identityName + ' is selected').html(this.identityName).on('click', this.toggleIdentitySelection.bind(this));
                        $('#tomc-book-organization--identities').prepend(this.newSpan);                        
                        $("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
                        if (this.chosenIdentities.length < 5) {
                            this.chosenIdentities.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
                            this.newSpan.attr('aria-label', this.identityName + ' is selected');
                        } else {
                            this.newSpan.attr('aria-label', this.identityName + ' is not selected');
                            $('.tomc-book-organization--identities-error-section').removeClass('hidden');
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
                    console.log('new version adding language.');
                    if (response != 0 && response != 'fail') {
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response).attr('aria-label', this.languageName + ' is selected').html(this.languageName).on('click', this.toggleLanguageSelection.bind(this));
                        $('#tomc-book-organization--languages').prepend(this.newSpan);                        
                        $("#tomc-book-organization--add-no-identities-selected").addClass("hidden");
                        if (this.chosenLanguages.length < 3) {
                            this.chosenLanguages.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
                            this.newSpan.attr('aria-label', this.languageName + ' is selected');
                        } else {
                            this.newSpan.attr('aria-label', this.languageName + ' is not selected');
                            $('.tomc-book-organization--languages-error-section').removeClass('hidden');
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
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response).attr('aria-label', this.warningName + ' is selected').html(this.warningName).on('click', this.toggleWarningSelection.bind(this));
                        $('#tomc-book-organization--warnings').prepend(this.newSpan);
                        if (this.chosenWarnings.length < 10) {
                            this.chosenWarnings.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
                            this.newSpan.attr('aria-label', this.warningName + ' is selected');
                            this.saveWarningsButton.text('save and continue');
                        } else {
                            this.newSpan.attr('aria-label', this.warningName + ' is not selected');
                            $('.tomc-book-organization--warnings-error-section').removeClass('hidden');
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
            'content': this.penNameBioInput.val().substring(0, 1000),
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
                    var newOption = $('<option />');
                    newOption.attr('value', response.id);
                    newOption.attr('aria-selected', true);
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
        if (this.chosenGenres1.length == 0 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0){
            this.addBookGenresNoneAddedError.removeClass("hidden");
        } else {
            this.addBookGenresNoneAddedError.addClass("hidden");
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
    }

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
                    this.bookLanguagesForm.addClass("hidden");
                    this.bookGenresForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            $(".tomc-book-organization--add-no-languages-selected").removeClass("hidden");
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
                    'description' : this.bookDescription.val().substring(0, 3000),
                    'excerpt' : this.bookExcerpt.val().substring(0, 10000),
                    'user' : $(e.target).data('user')
                },
                success: (response) => {
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

    saveBookProducts(routePath){
        var productsToAdd = [];
        var typesToAdd = [];
        $('.tomc-book-organization--product-checkbox:checkbox:checked').each(function(){
            productsToAdd.push(parseInt($(this).val()));
            typesToAdd.push(parseInt($(this).parent('.tomc-book-organization--product-option').children('select.tomc-book-organization--product-format').val()));
        });
        var imageProduct = $("input[name='tomc-book-organization--main-image-product']:checked").val();
        // console.log('image product is ' + imageProduct);
        if(imageProduct){
            // console.log('moving on');
            $("#tomc-book-organization--product-image-error").addClass("hidden");
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/' + routePath,
                type: 'POST',
                data: {
                    'book' : routePath == 'updateBookProducts' ? this.bookId : this.createdBookId,
                    'products': JSON.stringify(productsToAdd),
                    'types': JSON.stringify(typesToAdd),
                    'image' : imageProduct
                },
                success: (response) => {
                    this.bookProductsForm.addClass('hidden');
                    if (routePath == 'updateBookProducts'){
                        location.reload(true);
                    } else {
                        $('#tomc-book-organization--complete').removeClass('hidden');
                        $('html, body').animate({ scrollTop: 0 }, 'fast');
                    }
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }else{
            $("#tomc-book-organization--product-image-error").removeClass("hidden");
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

    openGenresOverlay(e){        
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getGenres',
            type: 'POST',
            data: {
                'book' : this.bookId
                // ,
                // 'level' : 1
            },
            success: (response) => {
                if (this.genresOverlayIsOpen != true){
                    this.genresOverlayIsOpen = true;
                    for(let i = 0; i < response.length; i++){
                        if (response[i]['genreid']){
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-genre-id', response[i]['id']).attr('data-genre-level', Number(response[i]['genre_level'])).attr('aria-label', response[i]['genre_name'] + ' is selected').html(response[i]['genre_name']).on('click', this.toggleGenreSelection.bind(this));
                            if (Number(response[i]['genre_level']) === 1){
                                this.chosenGenres1.push(Number(response[i]['genreid']));
                                this.oldGenres1.push(Number(response[i]['genreid']));
                                $('.tomc-book-organization__edit-genres-container--1').append(this.newSpan);
                            } else if (Number(response[i]['genre_level']) === 2){
                                this.chosenGenres2.push(Number(response[i]['genreid']));
                                this.oldGenres2.push(Number(response[i]['genreid']));
                                $('.tomc-book-organization__edit-genres-container--2').append(this.newSpan);
                            } else if (Number(response[i]['genre_level']) === 3){
                                this.chosenGenres3.push(Number(response[i]['genreid']));
                                this.oldGenres3.push(Number(response[i]['genreid']));
                                $('.tomc-book-organization__edit-genres-container--3').append(this.newSpan);
                            }
                        } else {
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-genre-id', response[i]['id']).attr('data-genre-level', Number(response[i]['genre_level'])).attr('aria-label', response[i]['genre_name'] + ' is not selected').html(response[i]['genre_name']).on('click', this.toggleGenreSelection.bind(this));
                            if (Number(response[i]['genre_level']) === 1){                                
                                $('.tomc-book-organization__edit-genres-container--1').append(this.newSpan);
                            } else if (Number(response[i]['genre_level']) === 2){
                                $('.tomc-book-organization__edit-genres-container--2').append(this.newSpan);
                            } else if (Number(response[i]['genre_level']) === 3){
                                $('.tomc-book-organization__edit-genres-container--3').append(this.newSpan);
                            }
                        }
                    }
                    this.genresOverlay.addClass("tomc-book-organization__box--active");
                }
            },
            failure: (response) => {
                console.log(response);
            }
        })
    }

    openIdentitiesOverlay(e){
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getIdentities',
            type: 'POST',
            data: {
                'book' : this.bookId
            },
            success: (response) => {
                if (this.identitiesOverlayIsOpen != true){
                    this.identitiesOverlayIsOpen = true;
                    for(let i = 0; i < response.length; i++){
                        if (response[i]['identityid']){
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-identity-id', response[i]['id']).attr('aria-label', response[i]['identity_name'] + ' is selected').html(response[i]['identity_name']).on('click', this.toggleIdentitySelection.bind(this));
                            this.chosenIdentities.push(Number(response[i]['identityid']));
                            this.oldIdentities.push(Number(response[i]['identityid']));
                            $('.tomc-book-organization__edit-identities-container').append(this.newSpan);
                        } else {
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-identity-id', response[i]['id']).attr('aria-label', response[i]['identity_name'] + ' is not selected').html(response[i]['identity_name']).on('click', this.toggleIdentitySelection.bind(this));
                            $('.tomc-book-organization__edit-identities-container').append(this.newSpan);
                        }
                        this.identitiesOverlay.addClass("tomc-book-organization__box--active");
                    }
                }
            },
            failure: (response) => {
                console.log(response);
            }
        })
    }
    
    openLanguagesOverlay(e){
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        console.log('the book id is ' + this.bookId);
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
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                            this.chosenLanguages.push(Number(response[i]['languageid']));
                            this.oldLanguages.push(Number(response[i]['languageid']));
                            $('.tomc-book-organization__edit-languages-container').append(this.newSpan);
                        } else {
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                            $('.tomc-book-organization__edit-languages-container').append(this.newSpan);
                        }
                        this.languagesOverlay.addClass("tomc-book-organization__box--active");
                    }
                }
            },
            failure: (response) => {
                console.log(response);
            }
        })
    }

    openContentWarningsOverlay(e){
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getContentWarnings',
            type: 'POST',
            data: {
                'book' : this.bookId
            },
            success: (response) => {
                if (this.warningsOverlayIsOpen != true){
                    this.warningsOverlayIsOpen = true;
                    for(let i = 0; i < response.length; i++){
                        if (response[i]['warningid']){
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                            this.chosenWarnings.push(Number(response[i]['warningid']));
                            this.oldWarnings.push(Number(response[i]['warningid']));
                            $('.tomc-book-organization__edit-content-warnings-container').append(this.newSpan);
                        } else {
                            this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                            $('.tomc-book-organization__edit-content-warnings-container').append(this.newSpan);
                        }
                        this.contentWarningsOverlay.addClass("tomc-book-organization__box--active");
                    }
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

    saveReadalikesEdits(e){
        let newReadalikeBook0 = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-0').children('.tomc-book-organization-input--edit-title-0').val();
        let newReadalikeAuthor0 = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-0').children('.tomc-book-organization-input--edit-author-0').val();
        let newReadalikeBook1 = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-1').children('.tomc-book-organization-input--edit-title-1').val();
        let newReadalikeAuthor1 = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-readalikes-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-readalike-1').children('.tomc-book-organization-input--edit-author-1').val();
        if (this.existingReadalikeBook0 != newReadalikeBook0 
            || this.existingReadalikeAuthor0 != newReadalikeAuthor0
            || this.existingReadalikeBook1 != newReadalikeBook1
            || this.existingReadalikeAuthor1 != newReadalikeAuthor1)
        {
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/updateReadalikes',
                type: 'POST',
                data: {
                    'book' : this.bookId,
                    'book0' : newReadalikeBook0,
                    'author0' : newReadalikeAuthor0,
                    'book1' : newReadalikeBook1,
                    'author1' : newReadalikeAuthor1
                },
                success: (response) => {
                    console.log('a success occurred');
                    location.reload(true);
                },
                error: (response) => {
                    console.log('error occurred.');
                    console.log(response);
                }
            })
        } else {
            $('#tomc-book-organization--edit-readalikes-no-changes').removeClass('hidden');
        }
    }

    openReadalikesOverlay(e){
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getReadalikes',
            type: 'POST',
            data: {
                'book' : this.bookId
            },
            success: (response) => {
                if (this.readalikesOverlayIsOpen != true){
                    this.readalikesOverlayIsOpen = true;
                    this.newFormDiv = $('<div />').addClass('tomc-book-organization--edit-overlay-new-form');
                    if (response[0]){
                        this.newDiv = $('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-0');
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-title-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-0-edit').val(response[0]['readalike_title']);
                        this.newDiv.append(this.newInput);
                        this.newSpan = $('<span />').html(' by ');
                        this.newDiv.append(this.newSpan);
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-author-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-0-edit').val(response[0]['readalike_author']);
                        this.newDiv.append(this.newInput);
                        this.newFormDiv.append(this.newDiv);
                        $('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
                        this.existingReadalikeBook0 = (response[0]['readalike_title'] == null) ? '' : response[0]['readalike_title'];
                        this.existingReadalikeAuthor0 = (response[0]['readalike_author'] == null) ? '' : response[0]['readalike_author'];
                    } else {
                        this.newDiv = $('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-0');
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-title-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-0-edit').attr('placeholder', 'book title');
                        this.newDiv.append(this.newInput);
                        this.newSpan = $('<span />').html(' by ');
                        this.newDiv.append(this.newSpan);
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-author-0').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-0-edit').attr('placeholder', 'author');
                        this.newDiv.append(this.newInput);
                        this.newFormDiv.append(this.newDiv);
                        $('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
                    }
                    if (response[1]){
                        this.newDiv = $('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-1');
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-title-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-1-edit').val(response[1]['readalike_title']);
                        this.newDiv.append(this.newInput);
                        this.newSpan = $('<span />').html(' by ');
                        this.newDiv.append(this.newSpan);
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-autor-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-1-edit').val(response[1]['readalike_author']);
                        this.newDiv.append(this.newInput);
                        this.newFormDiv.append(this.newDiv);
                        $('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
                        this.existingReadalikeBook1 = (response[1]['readalike_title'] == null ) ? '' : response[1]['readalike_title'];
                        this.existingReadalikeAuthor1 = (response[1]['readalike_author'] == null) ? '' : response[1]['readalike_author'];
                    } else {
                        this.newDiv = $('<div />').addClass('tomc-book-organization--form tomc-book-organization--form-div tomc-book-organization--form-div-readalike-1');
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-title-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-book-1-edit').attr('placeholder', 'book title');
                        this.newDiv.append(this.newInput);
                        this.newSpan = $('<span />').html(' by ');
                        this.newDiv.append(this.newSpan);
                        this.newInput = $('<input />').addClass('tomc-book-organization-input--edit-author-1').attr('type', 'text').attr('name', 'tomc-book-organization--readalike-author-1-edit').attr('placeholder', 'author');
                        this.newDiv.append(this.newInput);
                        this.newFormDiv.append(this.newDiv);
                        $('.tomc-book-organization__edit-readalikes-container').append(this.newFormDiv);
                    }
                    this.readalikesOverlay.addClass("tomc-book-organization__box--active");
                }
            },
            error: (response) => {
                console.log(response);
            }
        })
    }

    saveGenreEdits(e){
        if (this.chosenGenres1.length == 0 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0){
            this.editBookGenresNoneAddedError.removeClass("hidden");
        } else {
            this.editBookGenresNoneAddedError.addClass("hidden");
            if (JSON.stringify(this.chosenGenres1) === JSON.stringify(this.oldGenres1) && JSON.stringify(this.chosenGenres2) === JSON.stringify(this.oldGenres2) && JSON.stringify(this.chosenGenres3) === JSON.stringify(this.oldGenres3)){
                $('#tomc-book-organization--edit-genres-no-changes').removeClass('hidden');
            } else {
                console.log(this.bookId);
                console.log(JSON.stringify(this.chosenGenres1));
                console.log(JSON.stringify(this.chosenGenres2));
                console.log(JSON.stringify(this.chosenGenres3));
                $.ajax({
                    beforeSend: (xhr) => {
                        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                    },
                    url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookGenres',
                    type: 'POST',
                    data: {
                        'book' : this.bookId,
                        'genres1' : JSON.stringify(this.chosenGenres1),
                        'genres2' : JSON.stringify(this.chosenGenres2),
                        'genres3' : JSON.stringify(this.chosenGenres3)
                    },
                    success: (response) => {
                        location.reload(true);
                    },
                    error: (response) => {
                        console.log(response);
                    }
                })
            }
        }
    }

    saveLanguageEdits(e){
        if (JSON.stringify(this.chosenLanguages) === JSON.stringify(this.oldLanguages)){
            $('#tomc-book-organization--edit-languages-errors').removeClass('hidden');
            $('#tomc-book-organization--edit-languages-no-changes').removeClass('hidden');
            $('#tomc-book-organization--edit-no-languages-selected').addClass('hidden');
        } else if (this.chosenLanguages.length === 0){
            $('#tomc-book-organization--edit-languages-errors').removeClass('hidden');
            $('#tomc-book-organization--edit-no-languages-selected').removeClass('hidden');
            $('#tomc-book-organization--edit-languages-no-changes').addClass('hidden');
        } else {
            console.log()
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookLanguages',
                type: 'POST',
                data: {
                    'book' : this.bookId,
                    'languages' : JSON.stringify(this.chosenLanguages)
                },
                success: (response) => {
                    location.reload(true);
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }
    }

    saveWarningEdits(e){
        console.log('the chosen warnings are ' + this.chosenWarnings);
        if (JSON.stringify(this.chosenWarnings) === JSON.stringify(this.oldWarnings)){
            $('#tomc-book-organization--edit-warnings-no-changes').removeClass('hidden');
        } else {
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookWarnings',
                type: 'POST',
                data: {
                    'book' : this.bookId,
                    'warnings' : JSON.stringify(this.chosenWarnings)
                },
                success: (response) => {
                    location.reload(true);
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }
    }

    saveIdentityEdits(e){
        console.log('the chosen identities are ' + this.chosenIdentities);
        if (JSON.stringify(this.chosenIdentities) === JSON.stringify(this.oldIdentities)){
            $('#tomc-book-organization--edit-identities-no-changes').removeClass('hidden');
        } else if (this.chosenIdentities.length === 0){
            $('#tomc-book-organization--edit-no-identities-selected').removeClass('hidden');
        } else {
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/editBookIdentities',
                type: 'POST',
                data: {
                    'book' : this.bookId,
                    'identities' : JSON.stringify(this.chosenIdentities)
                },
                success: (response) => {
                    location.reload(true);
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }
    }

    togglePublish(e){
        let bookToUpdate = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        let newStatus = $(e.target).data('toggle');
        console.log('the new book status is ' + newStatus);
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/togglePublish',
            type: 'POST',
            data: {
                'book' : bookToUpdate,
                'status' : newStatus,
            },
            success: (response) => {
                location.reload(true);
            },
            error: (response) => {
                console.log('error occurred.');
                console.log(response);
            }
        })
    }

    saveBasicInfoEdits(e){
        let newTitle = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-title').children('.tomc-book-organization-input--edit').val();
        let newDescription = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-description').children('.tomc-book-organization-textarea--edit').val().substring(0, 3000);
        let newExcerpt = $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-excerpt').children('.tomc-book-organization-textarea--edit').val().substring(0, 10000);
        if (this.title != newTitle
        || ((this.subTitle) && (this.subTitle != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val()))
        || ((! this.subTitle) && $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val())
        || ((this.edition) && (this.edition != $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val()))
        || ((! this.edition) && $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val())
        || (this.description != newDescription)
        || (this.excerpt != newExcerpt)
        ){
            if (newTitle.length === 0 || newDescription.length === 0){
                $('#tomc-book-organization--edit-basic-info-errors').removeClass('hidden');
                $('#tomc-book-organization--edit-basic-info-no-changes').addClass('hidden');
                if (newTitle.length === 0){
                    $('#tomc-book-organization--edit-basic-info-errors-title').removeClass('hidden');
                }
                if (newDescription.length === 0){
                    $('#tomc-book-organization--edit-basic-info-errors-description').removeClass('hidden');
                }
                if (newExcerpt.length === 0){
                    $('#tomc-book-organization--edit-basic-info-errors-excerpt').removeClass('hidden');
                }
            } else {
                $.ajax({
                    beforeSend: (xhr) => {
                        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                    },
                    url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/updateBasicInfo',
                    type: 'POST',
                    data: {
                        'book' : this.bookId,
                        'title' : newTitle,
                        'subtitle' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-subtitle').children('.tomc-book-organization-input--edit').val(),
                        'edition' : $(e.target).parent('.overlay-main-container').children('.tomc-book-organization__edit-basic-info-container').children('.tomc-book-organization--edit-overlay-new-form').children('.tomc-book-organization--form-div-edition').children('.tomc-book-organization-input--edit').val(),
                        'description' : newDescription,
                        'excerpt' : newExcerpt
                    },
                    success: (response) => {
                        console.log('success occurred');
                        location.reload(true);
                    },
                    error: (response) => {
                        console.log('error occurred.');
                        console.log(response);
                    }
                })
            }
        } else {
            $('#tomc-book-organization--edit-basic-info-errors').removeClass('hidden');
            $('#tomc-book-organization--edit-basic-info-no-changes').removeClass('hidden');
        }
    }

    openProductsOverlay(e){
        this.bookId = $(e.target).parent('.tomc-book-organization--edit-book-options').data('book');
        let formatOptions = [];
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getProductTypes',
            type: 'POST',
            success: (response) => {
                for(let i = 0; i < response.length; i++){
                    formatOptions.push(response[i]);
                }
                console.log(formatOptions);
                $.ajax({
                    beforeSend: (xhr) => {
                        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                    },
                    url: tomcBookorgData.root_url + '/wp-json/tomcBookorg/v1/getBookProducts',
                    type: 'POST',
                    data: {
                        'book' : this.bookId
                    },
                    success: (response) => {
                        console.log(response);
                        if (this.productsOverlayIsOpen != true){
                            this.productsOverlayIsOpen = true;
                            for(let i = 0; i < response.length; i++){
                                let productDiv = $('<div />').addClass('tomc-book-organization--book-products-div');
                                let productOption = $('<div />').addClass('tomc-book-organization--product-option');
                                let checkbox = $('<input />').addClass('tomc-book-organization--product-checkbox').attr('type', 'checkbox').attr('id', 'tomc-book-organization--book-product-id-' + response[i]['id']).val(response[i]['id']);
                                if (response[i]['productid']){
                                    checkbox.prop("checked", true);
                                }
                                productOption.append(checkbox);
                                let checkboxLabel = $('<label />').addClass('tomc-book-organization--large-label').attr('for', 'tomc-book-organization--book-product-id-' + response[i]['id']).html(response[i]['post_title'] + ' (' + response[i]['name'] + ')');
                                productOption.append(checkboxLabel);
                                let thumbnail = $('<img />').attr('src', response[i]['guid']);
                                productOption.append(thumbnail);
                                productOption.append('<br><br>');
                                let selectLabel = $('<label />').addClass('tomc-book-organization--select-label').attr('for', 'tomc-book-organization--select-for-' + response[i]['id']).html('Which format is this product?');
                                productOption.append(selectLabel);
                                let typeSelect = $('<select />').addClass('tomc-book-organization--product-format').attr('id', 'tomc-book-organization--select-for-' + response[i]['id']);
                                for (let j = 0; j < formatOptions.length; j++){
                                    let selectOption = $('<option />').attr('value', formatOptions[j]['id']).text(formatOptions[j]['type_name']);
                                    if (formatOptions[j]['id'] == response[i]['typeid']){
                                        selectOption.attr('selected', 'selected');
                                    } else if (formatOptions[j]['type_name'] == response[i]['name']){
                                        selectOption.attr('selected', 'selected');
                                    } else {
                                        console.log('type name is ' + formatOptions[j]['type_name']);
                                        console.log('name is ' + response[i]['name']);
                                    }
                                    typeSelect.append(selectOption);
                                }
                                productOption.append(typeSelect);
                                productOption.append('<br>');
                                let radio = $('<input />').attr('type', 'radio').attr('name', 'tomc-book-organization--main-image-product').val(response[i]['id']).attr('id', 'tomc-book-organization--book-product-image-' + response[i]['id']);
                                if (response[i]['productid'] == response[i]['product_image_id']){
                                    radio.prop('checked', true);
                                }
                                productOption.append(radio);
                                let radioLabel = $('<label />').attr('for', 'tomc-book-organization--book-product-image-' + response[i]['id']).text("use this product's image as the main image for this book.");
                                productOption.append(radioLabel);
        
                                productDiv.append(productOption);
                                $('.tomc-book-organization__edit-products-container').append(productDiv);
                            }
                            this.productsOverlay.addClass("tomc-book-organization__box--active");
                        }
                    },
                    failure: (response) => {
                        console.log(response);
                    }
                })
            },
            failure: (response) => {
                console.log(response);
            }
        })
    }

    closeEditOverlay(e){
        this.bookId = 0;
        $(e.target).parent('.overlay-main-container').find('.tomc-book-org-html').html('');
        this.basicInfoOverlayIsOpen = false;
        this.languageOverlayIsOpen = false;
        this.genresOverlayIsOpen = false;
        this.identitiesOverlayIsOpen = false;
        this.warningsOverlayIsOpen = false;
        this.readalikesOverlayIsOpen = false;
        this.productsOverlayIsOpen = false;
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
        $('.tomc-book-organization--genres2-error-section').addClass('hidden');
        $('.tomc-book-organization--genres3-error-section').addClass('hidden');
        $('#tomc-book-organization--edit-warnings-no-changes').addClass('hidden');
        $('#tomc-book-organization--edit-readalikes-no-changes').addClass('hidden');
        $('#tomc-book-organization--edit-identities-no-changes').addClass('hidden');
        $('#tomc-book-organization--edit-no-identities-selected').addClass('hidden');
        $('#tomc-book-organization--edit-languages-errors').addClass('hidden');
        $('.tomc-book-organization--languages-error-section').addClass('hidden');
        $('#tomc-book-organization--edit-basic-info-errors').addClass('hidden');
        this.chosenGenres1 = [];
        this.oldGenres1 = [];
        this.chosenGenres2 = [];
        this.oldGenres2 = [];
        this.chosenGenres3 = [];
        this.oldGenres3 = [];
        $(e.target).parent().parent('.tomc-book-organization__overlay').removeClass("tomc-book-organization__box--active");
    }
}

export default BookInfo;