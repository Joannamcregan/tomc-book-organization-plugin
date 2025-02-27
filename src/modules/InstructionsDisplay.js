import $ from 'jquery';

class Instructions{
    constructor(){
        this.sellBooksSpan = $('#sellBooksSpan');
        this.sellServicesSpan = $('#sellServicesSpan');
        this.sellBooksSection = $('#sellBooksSection');
        this.sellServicesSection = $('#sellServicesSection');
        this.ebookProductsSpan = $('#ebookProductsSpan');
        this.ebookProductsSection = $('#ebookProductsSection');
        this.audiobookProductsSpan = $('#audiobookProductsSpan');
        this.audiobookProductsSection = $('#audiobookProductsSection');
        this.physicalBookProductSpan = $('#physicalBookProductSpan');
        this.physicalBookProductSection = $('#physicalBookProductSection');
        this.events();
        this.ebookSectionShowing = false;
        this.audiobookSectionShowing = false;
        this.physicalBookSectionShowing = false;
    }

    events(){
        this.sellBooksSpan.on('click', this.toggleSellBooks.bind(this));
        this.sellServicesSpan.on('click', this.toggleSellServices.bind(this));
        this.ebookProductsSpan.on('click', this.toggleEbookProducts.bind(this));
        this.audiobookProductsSpan.on('click', this.toggleAudiobookProducts.bind(this));
        this.physicalBookProductSpan.on('click', this.togglePhysicalBookProducts.bind(this));
    }

    toggleSellBooks(){
        this.sellBooksSection.toggleClass('hidden');
        this.sellBooksSpan.toggleClass('purple-span');
        this.sellBooksSpan.toggleClass('hollow-purple-span');
    }

    toggleSellServices(){
        this.sellServicesSection.toggleClass('hidden');
        this.sellServicesSpan.toggleClass('blue-span');
        this.sellServicesSpan.toggleClass('hollow-blue-span');
    }

    toggleEbookProducts(){
        this.ebookProductsSection.toggleClass('hidden');
        this.ebookProductsSpan.toggleClass('orange-button');
        this.ebookProductsSpan.toggleClass('hollow-orange-button');
    }

    toggleAudiobookProducts(){
        this.audiobookProductsSection.toggleClass('hidden');
        this.audiobookProductsSpan.toggleClass('blue-button');
        this.audiobookProductsSpan.toggleClass('hollow-blue-button');
    }

    togglePhysicalBookProducts(){
        this.physicalBookProductSection.toggleClass('hidden');
        this.physicalBookProductSpan.toggleClass('purple-button');
        this.physicalBookProductSpan.toggleClass('hollow-purple-button');
    }
}

export default Instructions;