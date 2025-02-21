import $ from 'jquery';

class ShopDisplays{
    constructor(){
        this.oldestButtons = $('.tomc-shop-books-oldest');
        this.newestButtons = $('.tomc-shop-books-newest');
        this.randomButtons = $('.tomc-shop-books-random');
        this.audiobooksContainer = $('#tomc-book-org--container-audiobooks');
        this.ebooksContainer = $('#tomc-book-org--container-ebooks');
        this.physicalContainer = $('#tomc-book-org--container-physical');
        this.events();
    }
    events(){
        this.oldestButtons.on('click', this.getByDate.bind(this));
        this.newestButtons.on('click', this.getByDate.bind(this));
        this.randomButtons.on('click', this.getRandom.bind(this));
    }
    toggleHTML(e){
        $(e.target).parent('.tomc-shop-books-sort-by-section').children('.tomc-shop-books-sort-options-selected').removeClass('tomc-shop-books-sort-options-selected');
        $(e.target).parent('.tomc-shop-books-sort-by-section').children('.tomc-shop-books-sort-options-selected').attr('aria-label', 'this option is not selected');
        $(e.target).addClass('tomc-shop-books-sort-options-selected');
        $(e.target).attr('aria-label', 'this option is selected');
        $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').addClass('contracting');
        $(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container').html('');
    }
    getByDate(e){
        if (!$(e.target).hasClass('tomc-shop-books-sort-options-selected')){
            let format = $(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
            let orderBy = $(e.target).data('order');
           this.toggleHTML(e);
           $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/byDateAndFormat',
                type: 'GET',
                data: {
                    'format' : format,
                    'order': orderBy
                },
                success: (response) => {
                    $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
                    let columnsContainer = $(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container');
                    for(let $index = 0; $index < response.length; $index++){
                        let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns');
                        let img = $('<img />').attr('src', response[$index]['product_image_id']).attr('alt', 'cover for ' + response[$index]['title']);
                        bookDiv.append(img);
                        let bookLink = $('<a />').addClass('centered-text').attr('href', response[$index]['product_url']);
                        let h3 = $('<h3 />').html(response[$index]['title']);
                        bookLink.append(h3);
                        bookDiv.append(bookLink);
                        let p = $('<p />').addClass('centered-text');
                        let strong = $('<strong />').html(response[$index]['pen_name'] ? 'by ' + response[$index]['pen_name'] : 'by unknown or anonymous author');
                        p.append(strong);
                        bookDiv.append(p);
                        let bottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section prewrap');
                        p = $('<p />').html(response[$index]['book_description'].substr(0, 500) + '...');
                        bottomSection.append(p);
                        bookDiv.append(bottomSection);
                        columnsContainer.append(bookDiv);
                    }
                },
                error: (response) => {
                    // console.log(response);
                }
            })
        }
    }
    getRandom(e){
        if (!$(e.target).hasClass('tomc-shop-books-sort-options-selected')){
            let format = $(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
            this.toggleHTML(e);
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/byFormatRandom',
                type: 'GET',
                data: {
                    'format' : format
                },
                success: (response) => {
                    $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
                    let columnsContainer = $(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container');
                    for(let $index = 0; $index < response.length; $index++){
                        let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns');
                        let img = $('<img />').attr('src', response[$index]['product_image_id']).attr('alt', 'cover for ' + response[$index]['title']);
                        bookDiv.append(img);
                        let bookLink = $('<a />').addClass('centered-text').attr('href', response[$index]['product_url']);
                        let h3 = $('<h3 />').html(response[$index]['title']);
                        bookLink.append(h3);
                        bookDiv.append(bookLink);
                        let p = $('<p />').addClass('centered-text');
                        let strong = $('<strong />').html(response[$index]['pen_name'] ? 'by ' + response[$index]['pen_name'] : 'by unknown or anonymous author');
                        p.append(strong);
                        bookDiv.append(p);
                        let bottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section prewrap');
                        p = $('<p />').html(response[$index]['book_description'].substr(0, 500) + '...');
                        bottomSection.append(p);
                        bookDiv.append(bottomSection);
                        columnsContainer.append(bookDiv);
                    }
                },
                error: (response) => {
                    // console.log(response);
                }
            })
        }
    }
}

export default ShopDisplays;