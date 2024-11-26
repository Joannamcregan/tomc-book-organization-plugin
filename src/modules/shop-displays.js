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
        this.oldestButtons.on('click', this.getOldest.bind(this));
        this.newestButtons.on('click', this.getNewest.bind(this));
        this.randomButtons.on('click', this.getRandom.bind(this));
    }
    toggleHTML(e){
        $(e.target).parent('.tomc-shop-books-sort-by-section').children('.tomc-shop-books-sort-options-selected').removeClass('tomc-shop-books-sort-options-selected');
        $(e.target).addClass('tomc-shop-books-sort-options-selected');
        $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').addClass('contracting');
        $(e.target).closest('.tomc-shop-books--format-section').find('.tomc-book-org--columns-container').html('');
    }
    getOldest(e){
        if (!$(e.target).hasClass('tomc-shop-books-sort-options-selected')){
            let format = $(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
           this.toggleHTML(e);
           $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/byDateAndFormat',
                type: 'GET',
                data: {
                    'format' : format,
                    'order': 'asc'
                },
                success: (response) => {
                    console.log(response);
                    $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }
    }
    getNewest(e){
        if (!$(e.target).hasClass('tomc-shop-books-sort-options-selected')){
            let format = $(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
           this.toggleHTML(e);
        }
    }
    getRandom(e){
        if (!$(e.target).hasClass('tomc-shop-books-sort-options-selected')){
            let format = $(e.target).parent('.tomc-shop-books-sort-by-section').data('format');
           this.toggleHTML(e);
        }
    }
}

export default ShopDisplays;