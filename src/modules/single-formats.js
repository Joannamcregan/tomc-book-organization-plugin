import $ from 'jquery';

class SingleFormat{
    constructor(){
        this.seeMoreButton = $('.tomc-bookorg--see-more-format');
        this.orderButtons = $('.tomc-shop-format-order');
        this.genreButtons = $('.tomc-shop-books-include-options');
        this.columnsContainer = $('.tomc-shop-format--results-container');
        this.noGenresError = $('.tomc-shop-format--no-genres-error');
        this.events();
        this.displayedBooks = [];
        this.selectedGenreCount = 3;
    }
    events(){
        // this.seeMoreButton.on('click', this.getMore.bind(this));
        this.orderButtons.on('click', this.updateOrder.bind(this));
        this.genreButtons.on('click', this.updateGenres.bind(this));
    }

    updateOrder(e){
        if (!($(e.target).hasClass('tomc-shop-books-sort-options-selected'))){
            $('.tomc-shop-books-sort-options-selected').attr('aria-label', 'This option is not selected');
            $('.tomc-shop-books-sort-options-selected').removeClass('tomc-shop-books-sort-options-selected');
            $(e.target).addClass('tomc-shop-books-sort-options-selected');
            $(e.target).attr('aria-label', 'This option is selected');
            // setTimeout(this.clearResults, 1500);
            setTimeout(this.updateFormatDisplay(e), 3000);
        }
    }

    updateGenres(e){
        console.log(this.selectedGenreCount);
        if ($(e.target).hasClass('tomc-shop-books-include-options-selected')){
            if (this.selectedGenreCount > 1){
                $(e.target).removeClass('tomc-shop-books-include-options-selected');
                $(e.target).attr('aria-label', 'This option is not selected');
                this.selectedGenreCount--;
                this.updateFormatDisplay(e);
            } else {
                this.noGenresError.removeClass('hidden');
            }
        } else {
            this.noGenresError.addClass('hidden');
            $(e.target).addClass('tomc-shop-books-include-options-selected');
            $(e.target).attr('aria-label', 'This option is selected');
            this.selectedGenreCount++;
            this.updateFormatDisplay(e);
        }
    }

    updateFormatDisplay(e){
        this.columnsContainer.fadeOut();
        let genres = [];
        $('.tomc-shop-books-include-options-selected').each(function(){
            genres.push($(this).html());
        });
        let order = $('.tomc-shop-books-sort-options-selected').data('order');
        setTimeout(()=>{
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
                    this.columnsContainer.html('');
                    this.seeMoreButton.removeClass('purple-width-fit-button');
                    this.seeMoreButton.addClass('hidden');
                    this.displayedBooks = [];
                    if (response.length > 0){
                        for(let $index = 0; $index < response.length; $index++){
                            let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns');
                            if ($index % 3 == 0){
                                bookDiv.addClass('tomc-book-org--three-of-three');
                            } else if ($index % 2 == 0){
                                bookDiv.addClass('tomc-book-org--two-of-three');
                            } else {
                                bookDiv.addClass('tomc-book-org--one-of-three');
                            }
                            if ($index % 4 == 0){
                                bookDiv.addClass('tomc-book-org--four-of-four');
                            } else if ($index % 3 == 0){
                                bookDiv.addClass('tomc-book-org--three-of-four');
                            } else if ($index % 2 == 0){
                                bookDiv.addClass('tomc-book-org--two-of-four');
                            } else {
                                bookDiv.addClass('tomc-book-org--one-of-four');
                            }
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
                            this.columnsContainer.append(bookDiv);
                            this.displayedBooks.push(response[$index]['id']);
                        }
                        this.columnsContainer.fadeIn();
                        this.seeMoreButton.removeClass('hidden');
                        this.seeMoreButton.addClass('purple-width-fit-button');
                    }
                },
                error: (response) => {
                    console.log(response);
                }
            })
        }, 2000)
    }
    
    getMoreFormatDisplay(e){
        this.columnsContainer.fadeOut();
        let genres = [];
        $('.tomc-shop-books-include-options-selected').each(function(){
            genres.push($(this).html());
        });
        let order = $('.tomc-shop-books-sort-options-selected').data('order');
        setTimeout(
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/getMoreFormatDisplay',
                type: 'GET',
                data: {
                    'format' : this.columnsContainer.data('format'),
                    'genres' : JSON.stringify(genres),
                    'orderBy' : order,
                    'displayedBooks' : JSON.stringify(this.displayedBooks)
                },
                success: (response) => {
                    this.columnsContainer.html('');
                    this.displayedBooks = [];
                    for(let $index = 0; $index < response.length; $index++){
                        let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns');
                        if ($index % 3 == 0){
                            bookDiv.addClass('tomc-book-org--three-of-three');
                        } else if ($index % 2 == 0){
                            bookDiv.addClass('tomc-book-org--two-of-three');
                        } else {
                            bookDiv.addClass('tomc-book-org--one-of-three');
                        }
                        if ($index % 4 == 0){
                            bookDiv.addClass('tomc-book-org--four-of-four');
                        } else if ($index % 3 == 0){
                            bookDiv.addClass('tomc-book-org--three-of-four');
                        } else if ($index % 2 == 0){
                            bookDiv.addClass('tomc-book-org--two-of-four');
                        } else {
                            bookDiv.addClass('tomc-book-org--one-of-four');
                        }
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
                        this.columnsContainer.append(bookDiv);
                        this.displayedBooks.push(response[$index]['id']);
                    }
                    this.columnsContainer.fadeIn();
                },
                error: (response) => {
                    console.log(response);
                }
            }),
         3000)
    }
}

export default SingleFormat;