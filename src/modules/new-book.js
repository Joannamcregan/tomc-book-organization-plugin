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
        this.addBookCategoryError = $("#tomc-book-organization--add-book-errors-category");
        // book genres form
        this.bookGenresForm = $("#tomc-book-organization--book-genre-form");
        this.addGenreButtons = $(".tomc-book-organization--add-genre");
        // book pen name form
        this.bookPenNameForm = $("#tomc-book-organization--book-pen-name");
        //overlays
        this.overlayCloseButtons = $(".tomc-book-organization__overlay__close");
        this.genreOverlay = $("#tomc-book-organization__genre-overlay");
        this.genreInput = $("#tomc-book-organization__new-genre");
        this.saveGenresButton = $("#tomc-book-organization--save-book-genres");
        this.addGenreButton = $('#tomc-book-organization--new-genre');
        this.events();
        this.createdBookId;
        this.currentUserId;
        this.addedGenreLevel = '';
        this.chosenGenres1 = '';
        this.chosenGenres2 = [];
        this.chosenGenres3 = [];
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
        this.overlayCloseButtons.on("click", this.closeGenreOverlay.bind(this));
        this.addGenreButton.on("click", this.addGenre.bind(this));
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

    toggleGenreSelection(e){
        console.log('toggle time');
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
                    if (this.addedGenreLevel == 2){
                        console.log('if genre-level == 2 met');
                        if (this.chosenGenres2.length < 2) {
                            console.log('less than 3 genres');
                            this.chosenGenres2.push(response);
                            console.log('the first item in the array is ' + this.chosenGenres2[0]);
                        }
                    } else if (this.addedGenreLevel == 3){
                        console.log('if genre level == 3 met');
                        if (this.chosenGenres3.length < 10) {
                            console.log('less than 11 genres');
                            this.chosenGenres3.push(response);
                            console.log('the first item in the array is ' + this.chosenGenres3[0]);
                        }
                    }
                    this.newSpan = $('<span />').addClass('tomc-book-organization--option').addClass('tomc-book-organization--option-selected').attr('data-genre-id', response).attr('aria-checked', true).html(this.genreName).on('click', this.toggleGenreSelection.bind(this));
                    $('#tomc-book-organization--genres-' + this.addedGenreLevel).prepend(this.newSpan);
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

    addNewBook(e){
        console.log('the user id is ' + $(e.target).data('user'));
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