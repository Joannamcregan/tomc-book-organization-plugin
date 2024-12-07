import $ from 'jquery';

class SingleFormat{
    constructor(){
        this.seeMoreButton = $('.tomc-bookorg--see-more-format');
        this.orderButtons = $('.tomc-shop-format-order');
        this.genreButtons = $('.tomc-shop-books-include-options');
        this.updateButton = $('#tomc-bookorg--shop-by-format--update');
        this.columnsContainer = $('.tomc-shop-format--results-container');
        this.events();
        this.batchCount = 0;
    }
    events(){
        // this.seeMoreButton.on('click', this.getMore.bind(this));
        this.updateButton.on('click', this.updateFormatDisplay.bind(this));
        this.orderButtons.on('click', this.updateOrder.bind(this));
    }
    updateOrder(e){
        if (!($(e.target).hasClass('tomc-shop-books-sort-options-selected'))){
            $('.tomc-shop-books-sort-options-selected').attr('aria-label', 'This option is not selected');
            $('.tomc-shop-books-sort-options-selected').removeClass('tomc-shop-books-sort-options-selected');
            $(e.target).addClass('tomc-shop-books-sort-options-selected');
            $(e.target).attr('aria-label', 'This option is selected');
            setTimeout(this.clearResults, 1000);
            setTimeout(this.updateFormatDisplay(e), 2000);
        }
    }
    getMore(e){
        //getMoreByFormatAndBatch
    }
    clearResults(){
        $('.tomc-book-org--columns-container').fadeOut();
    }
    updateFormatDisplay(e){
        let genres = [];
        $('.tomc-shop-books-include-options-selected').each(function(){
            genres.push($(this).html());
        });
        let order = $('.tomc-shop-books-sort-options-selected').data('order');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/updateFormatDisplay',
            type: 'GET',
            data: {
                'format' : this.columnsContainer.data('format'),
                'genres' : JSON.stringify(genres),
                'orderBy' : order
            },
            success: (response) => {
                console.log(response);
                // $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
                // for(let $index = 0; $index < response.length; $index++){
                //     let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns');
                //     if ($index % 3 == 0){
                //         bookDiv.addClass('tomc-book-org--three-of-three');
                //     } else if ($index % 2 == 0){
                //         bookDiv.addClass('tomc-book-org--two-of-three');
                //     } else {
                //         bookDiv.addClass('tomc-book-org--one-of-three');
                //     }
                //     if ($index % 4 == 0){
                //         bookDiv.addClass('tomc-book-org--four-of-four');
                //     } else if ($index % 3 == 0){
                //         bookDiv.addClass('tomc-book-org--three-of-four');
                //     } else if ($index % 2 == 0){
                //         bookDiv.addClass('tomc-book-org--two-of-four');
                //     } else {
                //         bookDiv.addClass('tomc-book-org--one-of-four');
                //     }
                //     let bookLink = $('<a />').addClass('centered-text').attr('href', response[$index]['product_url']);
                //     let h3 = $('<h3 />').html(response[$index]['title']);
                //     bookLink.append(h3);
                //     bookDiv.append(bookLink);
                //     let p = $('<p />').addClass('centered-text');
                //     let strong = $('<strong />').html(response[$index]['pen_name'] ? 'by ' + response[$index]['pen_name'] : 'by unknown or anonymous author');
                //     p.append(strong);
                //     bookDiv.append(p);
                //     let bottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section prewrap');
                //     p = $('<p />').html(response[$index]['book_description'].substr(0, 500) + '...');
                //     bottomSection.append(p);
                //     bookDiv.append(bottomSection);
                //     columnsContainer.append(bookDiv);
                // }
            },
            error: (response) => {
                console.log(response);
            }
        })
    }
}

export default SingleFormat;