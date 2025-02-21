import $ from 'jquery';

class SingleFormat{
    constructor(){
        this.seeMoreButton = $('.tomc-bookorg--see-more-format');
        this.orderButtons = $('.tomc-shop-format-order');
        this.genreButtons = $('.tomc-shop-books-include-options');
        this.columnsContainer = $('.tomc-shop-format--results-container');
        this.noGenresError = $('.tomc-shop-format--no-genres-error');
        this.noMoreResults = $('.tomc-shop-format--no-more-results');
        this.events();
        this.selectedGenreCount = 3;
    }
    events(){
        this.orderButtons.on('click', this.updateOrder.bind(this));
        this.genreButtons.on('click', this.updateGenres.bind(this));
        this.seeMoreButton.on('click', this.getMoreFormatDisplay.bind(this));
    }

    updateOrder(e){
        if (!($(e.target).hasClass('tomc-shop-books-sort-options-selected'))){
            $('.tomc-shop-books-sort-options-selected').attr('aria-label', 'This option is not selected');
            $('.tomc-shop-books-sort-options-selected').removeClass('tomc-shop-books-sort-options-selected');
            $(e.target).addClass('tomc-shop-books-sort-options-selected');
            $(e.target).attr('aria-label', 'This option is selected');
            this.updateFormatDisplay(e);
        }
    }

    updateGenres(e){
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
        this.seeMoreButton.removeClass('purple-width-fit-button');
        this.seeMoreButton.addClass('hidden');
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
                    this.displayedBooks = [];
                    if (response.length > 0){
                        for(let $index = 0; $index < response.length; $index++){
                            let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns tomc-shop-format--books').attr('data-bookid', response[$index]['id']);
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
                            this.columnsContainer.append(bookDiv);
                            this.displayedBooks.push(response[$index]['id']);
                        }
                        this.columnsContainer.fadeIn();
                        setTimeout(()=>{
                            this.seeMoreButton.removeClass('hidden');
                            this.seeMoreButton.addClass('purple-width-fit-button');
                        }, 2000);                        
                        this.noMoreResults.addClass('hidden');
                    } else {
                        this.noMoreResults.removeClass('hidden');
                    }
                },
                error: (response) => {
                    // console.log(response);
                }
            })
        }, 2000)
    }
    
    getMoreFormatDisplay(e){
        let genres = [];
        let displayedBooks = [];
        $('.tomc-shop-books-include-options-selected').each(function(){
            genres.push($(this).html());
        });
        $('.tomc-shop-format--books').each(function(){
            displayedBooks.push($(this).data('bookid'));
        })
        let order = $('.tomc-shop-books-sort-options-selected').data('order');
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
                'displayedBooks' : JSON.stringify(displayedBooks)
            },
            success: (response) => {
                if (response.length > 0){
                    this.noMoreResults.addClass('hidden');
                    for(let $index = 0; $index < response.length; $index++){
                        let bookDiv = $('<div />').addClass('tomc-bookorg--all-columns tomc-shop-format--books').attr('data-bookid', response[$index]['id']);
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
                        this.columnsContainer.append(bookDiv);
                    }
                } else {
                    this.noMoreResults.removeClass('hidden');
                    this.seeMoreButton.removeClass('purple-width-fit-button');
                    this.seeMoreButton.addClass('hidden');
                }
            },
            error: (response) => {
                // console.log(response);
            }
        })
    }
}

export default SingleFormat;