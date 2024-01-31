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
        // book genres form
        this.bookGenresForm = $("#tomc-book-organization--book-genre-form");
        this.addGenreButtons = $(".tomc-book-organization--add-genre");
        this.selectGenreButtons = $(".tomc-book-organization--option");
        this.saveGenresButton = $("#tomc-book-organization--save-book-genres");
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
        //overlays
        this.genreOverlayCloseButton = $("#tomc-book-organization__genre-overlay-close");
        this.genreOverlay = $("#tomc-book-organization__genre-overlay");
        this.genreInput = $("#tomc-book-organization__new-genre");
        this.addGenreButton = $('#tomc-book-organization--new-genre');
        this.warningOverlayCloseButton = $("#tomc-book-organization__warning-overlay-close");
        this.warningOverlay = $("#tomc-book-organization__warning-overlay");
        this.warningInput = $("#tomc-book-organization__new-warning");
        this.addNewWarningButton = $("#tomc-book-organization--new-warning");
        this.events();
        this.createdBookId;
        this.currentUserId;
        this.addedGenreLevel = '';
        this.chosenGenres1 = 0;
        this.chosenGenres2 = [];
        this.chosenGenres3 = [];
        this.chosenWarnings = [];
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
        // console.log(this.searchOverlay.data('id'));
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

    toggleWarningSelection(e){
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            for (let i = 0; i < this.chosenWarnings.length; i++){
                if (this.chosenWarnings[i] == $(e.target).data('warning-id')){
                    this.chosenWarnings.splice(i, 1);
                }
            }
            $('#tomc-book-organization--genres1-error-section').addClass('hidden');
        } else {
            if (this.chosenWarnings.length < 10) {
                this.chosenWarnings.push($(e.target).data('warning-id'));
                $(e.target).addClass('tomc-book-organization--option-selected');
            } else {
                $('#tomc-book-organization--warnings-error-section').removeClass('hidden');
            }
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
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option').attr('data-genre-id', response).attr('aria-checked', true).html(this.genreName).on('click', this.toggleGenreSelection.bind(this));
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

    addWarning(){
        console.log('add warning got called');
        this.warningName =  this.warningInput.val().substring(0, 200);
        console.log('the warning to add is ' + this.warningName);
        if (this.warningInput != ''){
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
                    console.log('adding the warning came back as a success')
                    if (response != 0 && response != 'fail') {
                        console.log('the response from adding the warning is ' + response);
                        this.newSpan = $('<span />').addClass('tomc-book-organization--option-alt').attr('data-warning-id', response).attr('aria-checked', true).html(this.warningName).on('click', this.toggleWarningSelection.bind(this));
                        $('#tomc-book-organization--warnings').prepend(this.newSpan);
                        if (this.chosenWarnings.length < 10) {
                            this.chosenWarnings.push(response);
                            this.newSpan.addClass('tomc-book-organization--option-selected');
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
                    this.bookPenNameForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                    console.log(response);
                },
                error: (response) => {
                    console.log(response);
                }
            })
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
                    'warnings' : this.chosenWarnings
                },
                success: (response) => {
                    this.bookWarningsForm.addClass("hidden");
                    this.bookReadalikesForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                    console.log(response);
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
                    this.bookWarningsForm.removeClass("hidden");
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                    console.log(response);
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
                    console.log(response);
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

    
}

export default NewBookForm;