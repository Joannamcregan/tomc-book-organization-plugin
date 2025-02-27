import $ from 'jquery';

class ProductDisplay {

    constructor() {
        this.warningMessage = $('.tomc-product-view-warnings');
        this.warningList = $('.tomc-product-content-warnings');
        this.events();
    }

    events(){
        this.warningMessage.on('click', this.toggleWarningList.bind(this));
    }

    toggleWarningList() {
        if (this.warningList.hasClass('hidden')) {
            this.warningList.removeClass('hidden');
            this.warningMessage.text('hide trigger warnings');
        } else {
            this.warningList.addClass('hidden');
            this.warningMessage.text('show trigger warnings');
        }
    }
}

export default ProductDisplay;