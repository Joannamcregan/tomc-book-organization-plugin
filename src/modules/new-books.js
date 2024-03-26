import $ from 'jquery';

class NewBooks{
    constructor(){
        this.moreEbooks = $('#tomc-book-organization--newly-add-more-ebooks');
        this.moreAudiobooks = $('#tomc-book-organization--newly-add-more-audiobooks');
        this.ebooksContinued = $('#tomc-book-organization--newly-added-continued-ebooks');
        this.audiobooksContinued = $('#tomc-book-organization--newly-added-continued-audiobooks');
        this.events();
    }
    events(){
        this.moreEbooks.on('click', this.showMoreEbooks.bind(this));
        this.moreAudiobooks.on('click', this.showMoreAudiobooks.bind(this));
    }
    showMoreEbooks(e){
        this.ebooksContinued.removeClass('hidden');
        $(e.target).removeClass('padded-arrow-accent');
        $(e.target).addClass('hidden');
    }
    showMoreAudiobooks(e){
        this.audiobooksContinued.removeClass('hidden');
        $(e.target).removeClass('padded-arrow-accent');
        $(e.target).addClass('hidden');
    }
}

export default NewBooks;