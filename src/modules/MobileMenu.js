import $ from 'jquery';

class MobileMenu {
// 1. describe and create/initiate object
    constructor() {
        this.openButton = $(".site-header__menu-trigger");
        this.closeButton = $(".menu-overlay__close");
        this.searchOverlay = $(".menu-overlay");
        this.events();
        this.isOverlayOpen = false;
    }
// 2. events
    events(){
        this.openButton.on("click", this.openOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
    }

// 3. methods (functions, actions...)
    openOverlay(){
        this.searchOverlay.addClass("search-overlay--active");
        $("body").addClass("body-no-scroll");
        this.isOverlayOpen = true;
    }
    closeOverlay(){
        this.searchOverlay.removeClass("search-overlay--active");
        $("body").removeClass("body-no-scroll");
        this.isOverlayOpen = false;
    }
}

export default MobileMenu;