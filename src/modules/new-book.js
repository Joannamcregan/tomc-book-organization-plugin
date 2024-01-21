import $ from 'jquery';

class NewBookForm{
    constructor() {
        // main elements in the main form to create a new book
        this.addBookForm = $("#tomc-book-organization--add-book");
        this.addBookSaveButton = $("#tomc-book-organization--save-book");
        this.subtitleYesButton = $("#tomc-book-organization--subtitle-yes");
        this.subtitleDiv = $("#tomc-book-organization--subtitle-div");
        this.editionYesButton = $("#tomc-book-organization--new-edition-yes");
        this.editionDiv = $("#tomc-book-organization--edition-div");
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
        // book genres form
        this.bookGenresForm = $("#tomc-book-organization--book-genre-form");
        this.additionalGenreButton = $("#tomc-book-organization--additional-genre");
        this.additionalSubgenreButton = $("#tomc-book-organization--additional-subgenre");
        this.noAdditonalGenreButton = $("#tomc-book-organization--no-additional-genres");
        this.additionalGenreDiv = $("#tomc-book-organization--genre-1");
        this.additionalSubgenresDiv = $("#tomc-book-organization--genre-0-additional-subgenres");
        // book pen name form
        this.bookPenNameForm = $("#tomc-book-organization--book-pen-name");
        this.events();
        this.createdBookId;
    }
    events() {
        this.addBookSaveButton.on("click", this.addNewBook.bind(this));
    }

    addNewBook(e){
        console.log(parseInt(this.bookEdition.val().substring(0, 10)));
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