import $ from 'jquery';

class BrowseStuff{
    constructor(){
        this.anyLevel1 = true;
        this.anyLevel2 = true;
        this.anyLevel3 = true;
        this.selectedGenres1 = [1, 2, 3];
        this.selectedGenres2 = [];
        this.selectedGenres3 = [];
        this.genreOptions1 = $('.tomc-book-organization--browse-option-1');
        this.genreOptions2 = $('.tomc-book-organization--browse-option-2');
        this.genreOptions3 = $('.tomc-book-organization--browse-option-3');
        this.rollButton = $('#tomc-book-organization--lets-roll-genres');
        this.resultsSection = $('#tomc-browse--search-results-container'); 
        this.events();
    }
    events(){
        this.genreOptions1.on('click', this.toggleSelected1.bind(this));
        this.genreOptions2.on('click', this.toggleSelected2.bind(this));
        this.genreOptions3.on('click', this.toggleSelected3.bind(this));
        this.rollButton.on('click', this.rollResults.bind(this));
    }
    toggleSelected2(e){
        console.log('in the beginning the selected genre 2s are ' + this.selectedGenres2 + ' and AnyGenre2 is ' + this.anyLevel2);
        if ($(e.target).hasClass('tomc-book-organization--browse-option-2-selected')){            
            this.anyLevel2 = false;
            $(e.target).removeClass('tomc-book-organization--browse-option-2-selected');
            $(e.target).attr('aria-label', $(e.target).html() + ' is not selected');
            if ($(e.target).data('genre-id') === 0){
                this.selectedGenres2 = [];
            } else {
                for (let i = 0; i < this.selectedGenres2.length; i++){
                    if (this.selectedGenres2[i] == $(e.target).data('genre-id')){
                        this.selectedGenres2.splice(i, 1);
                    }
                }
            }
            if (this.selectedGenres2.length === 0){
                $('#tomc-book-organization--browse-genres-2-error').removeClass('hidden');
            }
        } else {
            $('#tomc-book-organization--browse-genres-2-error').addClass('hidden');
            $(e.target).addClass('tomc-book-organization--browse-option-2-selected');
            $(e.target).attr('aria-label', $(e.target).html() + ' is selected');
            if ($(e.target).data('genre-id') === 0){
                this.anyLevel2 = true;
                this.selectedGenres2 = [];
                $('.tomc-book-organization--browse-normal-2').each(function(){
                    $(this).removeClass('tomc-book-organization--browse-option-2-selected');
                    $(this).attr('aria-label', $(this).html() + ' is not selected');
                })
            } else {
                $('#tomc-book-organization--browse-genre-any-2').removeClass('tomc-book-organization--browse-option-2-selected');
                this.anyLevel2 = false;
                $(e.target).addClass('tomc-book-organization--browse-option-2-selected');
                this.selectedGenres2.push($(e.target).data('genre-id'));
                if (this.selectedGenres2.length === $(e.target).parent('.tomc-book-organization--options-container').data('count')){
                    this.anyLevel2 = true;
                }
            }
        }
        console.log('at the end the selected genre 2s are ' + this.selectedGenres2 + ' and AnyGenre2 is ' + this.anyLevel2);
    }
    toggleSelected1(e){
        console.log('at the beginning, selected genre 1s are ' + this.selectedGenres1 + ' and anyLevel1 is ' + this.anyLevel1);
        if ($(e.target).hasClass('tomc-book-organization--browse-option-1-selected')){
            $(e.target).removeClass('tomc-book-organization--browse-option-1-selected');            
            $(e.target).attr('aria-label', $(e.target).html() + ' is not selected');
            for (let i = 0; i < this.selectedGenres1.length; i++){
                if (this.selectedGenres1[i] == $(e.target).data('genre-id')){
                    this.selectedGenres1.splice(i, 1);
                }
            }
            if (this.selectedGenres1.length === 0){
                $('#tomc-book-organization--browse-genres-1-error').removeClass('hidden');
            }
            this.anyLevel1 = false;
        } else {
            $(e.target).addClass('tomc-book-organization--browse-option-1-selected');            
            $(e.target).attr('aria-label', $(e.target).html() + ' is selected');
            this.selectedGenres1.push($(e.target).data('genre-id'));
            $('#tomc-book-organization--browse-genres-1-error').addClass('hidden');
            if (this.selectedGenres1.length === 3){
                this.anyLevel1 = true;
            } else {
                this.anyLevel1 = false;
            }
        }
        console.log('at the end, selected genre 1s are ' + this.selectedGenres1 + ' and anyLevel1 is ' + this.anyLevel1);
    }
    toggleSelected3(e){
        if ($(e.target).hasClass('tomc-book-organization--browse-option-3-selected')){            
            this.anyLevel3 = false;
            $(e.target).removeClass('tomc-book-organization--browse-option-3-selected');
            $(e.target).attr('aria-label', $(e.target).html() + ' is not selected');
            if ($(e.target).data('genre-id') === 0){
                this.selectedGenres3 = [];
            } else {
                for (let i = 0; i < this.selectedGenres3.length; i++){
                    if (this.selectedGenres3[i] == $(e.target).data('genre-id')){
                        this.selectedGenres3.splice(i, 1);
                    }
                }
            }
            if (this.selectedGenres3.length === 0){
                $('#tomc-book-organization--browse-genres-3-error').removeClass('hidden');
            }
        } else {
            $('#tomc-book-organization--browse-genres-3-error').addClass('hidden');
            $(e.target).addClass('tomc-book-organization--browse-option-3-selected');
            $(e.target).attr('aria-label', $(e.target).html() + ' is selected');
            if ($(e.target).data('genre-id') === 0){
                this.anyLevel3 = true;
                this.selectedGenres3 = [];
                $('.tomc-book-organization--browse-normal-3').each(function(){
                    $(this).removeClass('tomc-book-organization--browse-option-3-selected');
                    $(this).attr('aria-label', $(this).html() + ' is not selected');
                })
            } else {
                $('#tomc-book-organization--browse-genre-any-3').removeClass('tomc-book-organization--browse-option-3-selected');
                this.anyLevel3 = false;
                $(e.target).addClass('tomc-book-organization--browse-option-3-selected');
                this.selectedGenres3.push($(e.target).data('genre-id'));
                if (this.selectedGenres3.length === $(e.target).parent('.tomc-book-organization--options-container').data('count')){
                    this.anyLevel3 = true;
                }
            }
        }
        console.log('at the end the selected genre 3s are ' + this.selectedGenres3 + ' and AnyGenre3 is ' + this.anyLevel3);
    }
    rollResults(e){
        if ($('#tomc-book-organization--browse-genres-1-error').hasClass('hidden') && $('#tomc-book-organization--browse-genres-2-error').hasClass('hidden') && $('#tomc-book-organization--browse-genres-3-error').hasClass('hidden')){
            $(e.target).addClass('contracting');
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcBrowse/v1/byGenres',
                type: 'POST',
                data: {
                    'anyLevel1' : this.anyLevel1 ? 1 : 0,
                    'anyLevel2' : this.anyLevel2 ? 1 : 0,
                    'anyLevel3' : this.anyLevel3 ? 1 : 0,
                    'selectedGenres1' : JSON.stringify(this.selectedGenres1),
                    'selectedGenres2' : JSON.stringify(this.selectedGenres2),
                    'selectedGenres3' : JSON.stringify(this.selectedGenres3)
                },
                success: (response) => {
                    $(e.target).removeClass('contracting');
                    let alreadyAddedIds = [];
                    this.resultsSection.html('');
                    for(let i = 0; i < response.length; i++){
                        if ($.inArray(response[i]['id'], alreadyAddedIds) > -1){
                            let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                            let newFormat = $('<p />').html(response[i]['type_name']);
                            newLink.append(newFormat);
                            $('#tomc-browse-genres--results--book-' + response[i]['id']).children('.tomc-browse--search-result-bottom-section').append(newLink);
                        } else {
                            let newDiv = $('<div />').addClass('tomc-bookorg--all-columns').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                            let newTitle = $('<h3 />').html(response[i]['title']);
                            newDiv.append(newTitle);
                            let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                            newDiv.append(newAuthor);
                            let newImage = $('<img />').attr('src', response[i]['product_image_id']);
                            newDiv.append(newImage);
                            let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
                            let newDescription = $('<p />').html(response[i]['book_description'].substring(0, 500) + '...');
                            newBottomSection.append(newDescription);
                            newBottomSection.append('<h4 class="centered-text">available in</h4>');
                            let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                            let newFormat = $('<p />').html(response[i]['type_name']);
                            newLink.append(newFormat);
                            newBottomSection.append(newLink);
                            newDiv.append(newBottomSection);
                            this.resultsSection.append(newDiv);
                            alreadyAddedIds.push(response[i]['id']);
                        }
                    }
                    this.resultsSection.removeClass('hidden');
                },
                error: (response) => {
                    console.log(response);
                }
            })
        } else {
            console.log('else');
        }
    }
}

export default BrowseStuff;