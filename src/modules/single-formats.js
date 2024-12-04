import $ from 'jquery';

class SingleFormat{
    constructor(){
        this.seeMoreButtons = $('.tomc-bookorg--see-more-format');
        this.events();
    }
    events(){
        this.seeMoreButtons.on('click', this.seeMore.bind(this));
    }
    getByDate(e){
        $(e.target).addClass('contracting');
        let columnsContainer = $(e.target).parent().children('tomc-book-org--columns-container');
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcShopDisplay/v1/getMoreByFormatAndCount',
            type: 'GET',
            data: {
                'format' : columnsContainer.data('format'),
                'count' : columnsContainer.data('count')
            },
            success: (response) => {
                $(e.target).closest('.tomc-shop-books--format-section').children('.sub-banner--slim').children('h2').removeClass('contracting');
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
                    columnsContainer.append(bookDiv);
                }
            },
            error: (response) => {
                console.log(response);
            }
        })
    }
}

export default SingleFormat;