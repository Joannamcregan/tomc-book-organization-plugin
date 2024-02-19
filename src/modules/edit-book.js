import $ from 'jquery';

class EditBookForm{
    constructor(){
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
        this.editBookEvents();
        this.bookId = 0;
        this.basicInfoOverlayIsOpen = false;
        this.languageOverlayIsOpen = false;
        this.title = '';
        this.subTitle = '';
        this.edition = '';
        this.description = '';
        this.excerpt = '';
    }

    editBookEvents(){
        this.bookOptionTitles.on('click', this.expandTitleEditingOptions.bind(this));
        // overlays
        this.closeOverlayButtons.on('click', this.closeOverlay.bind(this));
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
            this.closeOverlay(e);
        }
    }
    closeOverlay(e){
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

export default EditBookForm;