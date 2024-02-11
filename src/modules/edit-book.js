import $ from 'jquery';
class EditBookForm{
    constructor(){
        this.bookOptions = $('.tomc-book-organization--book-to-edit');
        this.bookOptionTitles = $('.tomc-book-organization--book-to-edit-title');
        // overlays
        this.closeOverlayButtons = $('.tomc-book-organization--close-overlay');
        this.basicInfoOverlay = $('#tomc-book-organization__edit-basic-info-overlay');
        this.languagesOverlay = $('#tomc-book-organization__edit-languages-overlay');
        this.genresOverlay = $('#tomc-book-organization__edit-genres-overlay');
        this.identitiesOverlay = $('#tomc-book-organization__edit-identities-overlay');
        this.readalikesOverlay = $('#tomc-book-organization__edit-readalikes-overlay');
        this.contentWarningsOverlay = $('tomc-book-organization__edit-content-warnings-overlay');
        this.productsOverlay = $('tomc-book-organization__edit-products-overlay');
        this.events();
    }

    events(){
        this.bookOptions.on('click', this.expandEditingOptions.bind(this));
        this.bookOptionTitles.on('click', this.expandTitleEditingOptions.bind(this));
        // overlays
        this.closeOverlayButtons.on('click', this.closeOverlay.bind(this));
        this.basicInfoOverlay.on('click', this.openBasicInfoOverlay.bind(this));
        // this.languagesOverlay.on('click', this.openLanguagesOverlay.bind(this));
        // this.genresOverlay.on('click', this.openIdentitiesOverlay.bind(this));
        // this.identitiesOverlay.on('click', this.openIdentitiesOverlay.bind(this));
        // this.readalikesOverlay.on('click', this.openReadalikesOverlay.bind(this));
        // this.contentWarningsOverlay.on('click', this.openContentWarningsOverlay.bind(this));
        // this.productsOverlay.on('click', this.openProductsOverlay.bind(this));
    }

    expandEditingOptions(e){
        $(e.target).removeClass('tomc-book-options--cursor-pointer');
        $(e.target).children('p').children('.tomc-book-organization--book-to-edit-title').addClass('tomc-book-options--cursor-pointer');
        $(e.target).children('.tomc-book-organization--edit-book-options').removeClass('hidden');
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
    openBasicInfoOverlay(){
        $('#tomc-book-organization__edit-basic-info-overlay').addClass("tomc-book-organization__box--active");
    }
    closeOverlay(e){
        $(e.target).parent().parent('.tomc-book-organization__overlay').removeClass("tomc-book-organization__box--active");
    }
}

export default EditBookForm;