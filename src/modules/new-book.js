import $ from 'jquery';

class NewBookForm{
    constructor() {
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
        //book genres form
        this.bookGenresForm = $("#tomc-book-organization--book-genre-form");
        this.addGenreButtons = $(".tomc-book-organization--add-genre");
        this.selectGenreButtons = $(".tomc-book-organization--option");
        this.saveGenresButton = $("#tomc-book-organization--save-book-genres");
        //book identities form
        this.bookIdentitiesForm = $("#tomc-book-organization--book-identities-form");
        this.addIdentityOverlayButton = $(".tomc-book-organization--add-identity");
        this.selectIdentityButtons = $(".tomc-book-organization--option-alt-0");
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
        this.selectWarningButtons = $(".tomc-book-organization--option-alt");
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
        //overlays
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
        this.addPenNameOverlayButton.on("click", this.openPenNameOverlay.bind(this));
        this.penNameOverlayCloseButton.on("click", this.closePenNameOverlay.bind(this));
        this.addNewPenNameButton.on("click", this.addPenName.bind(this));
        this.savePenNameButton.on("click", this.addBookPenName.bind(this));
        this.bookProductsSaveButton.on("click", this.saveBookProducts.bind(this));
        this.bookProductsSavePublishButton.on("click", this.savePublish.bind(this));
    }

    showAddProductsInstructions(){
        console.log('book products add button called');
        this.bookProductsAddInstructions .hasClass("hidden") ? this.bookProductsAddInstructions.removeClass("hidden") : this.bookProductsAddInstructions.addClass("hidden");
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

    toggleGenreSelection(e){
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            if ($(e.target).data('genre-level') == 1){
                this.chosenGenres1 = 0;
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
                if (this.chosenGenres1 == 0) {
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
        if (this.chosenGenres1 == 0 && this.chosenGenres2.length == 0 && this.chosenGenres3.length == 0){
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
                    'genres1' : this.chosenGenres1,
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
            this.bookPenNameForm.removeClass("hidden");
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
                    'edition' : parseInt(this.bookEdition.val().substring(0, 10)),
                    'description' : this.bookDescription.val().substring(0, 1000),
                    'excerpt' : this.bookExcerpt.val().substring(0, 500),
                    'user' : $(e.target).data('user')
                },
                success: (response) => {
                    this.createdBookId = response;
                    this.addBookForm.addClass("hidden");
                    this.bookGenresForm.removeClass("hidden");
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
}

export default NewBookForm;