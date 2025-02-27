import $ from 'jquery';

class SiteSearch {
    constructor() {
        this.resultsDiv = $("#search-overlay__results");
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.searchField = $("#search-term");
        this.rollResults = $("#tomc-search--roll-results");
        this.triggersSection = $("#search-overlay__warnings-section");
        this.languagesSection = $("#search-overlay__languages-section");
        this.triggersContainer = $("#search-overlay--triggers-container");
        this.languagesContainer = $("#search-overlay--languages-container");
        this.filtersSection = $('#search-overlay__filters-section');
        this.triggersFilterOption = $('#search-overlay__filter-out-warnings');
        this.languagesFilterOption = $('#search-overlay__filter-languages');
        this.filtersSectionToggle = $('#search-overlay__toggle-filters-section');
        this.events();
        this.isOverlayOpen = false;
        this.chosenWarnings = [];
        this.chosenLanguages = [];
        this.filterTriggers = false;
        this.filterLanguages = false;
    }

    events(){
        this.openButton.on("click", this.openSearchOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
        $(document).on("keydown", this.keyPressDispatcher.bind(this));
        this.rollResults.on('click', this.getResults.bind(this));
        this.triggersFilterOption.on('click', this.toggleTriggersOption.bind(this));
        this.languagesFilterOption.on('click', this.toggleLanguagesOption.bind(this));
        this.filtersSectionToggle.on('click', this.toggleFiltersSection.bind(this));
    }

    toggleFiltersSection(e) {
        if ($(e.target).hasClass('fa-caret-down')) {
            $(e.target).removeClass('fa-caret-down');
            $(e.target).addClass('fa-caret-up');
            this.filtersSection.removeClass('hidden');
        } else {
            $(e.target).removeClass('fa-caret-up');
            $(e.target).addClass('fa-caret-down');
            this.filtersSection.addClass('hidden');
        }
    }

    toggleTriggersOption(e){
        if (this.filterTriggers == false){
            this.filterTriggers = true;
            this.triggersFilterOption.text("don't filter out triggering books");
            this.filtersSection.removeClass('hidden');
            this.triggersSection.removeClass('hidden');
            this.filtersSectionToggle.removeClass('hidden');
            this.filtersSectionToggle.addClass('inline');
        } else {
            this.filterTriggers = false;
            this.triggersFilterOption.text('filter out triggering books');
            this.triggersSection.addClass('hidden');
            $('.tomc-book-organization--option-span--trigger').removeClass('tomc-book-organization--option-selected');
            if (this.filterLanguages == false){
                this.filtersSectionToggle.addClass('hidden');
                this.filtersSectionToggle.removeClass('inline');
                this.filtersSectionToggle.addClass('fa-caret-up');
                this.filtersSectionToggle.removeClass('fa-caret-down');
                this.filtersSection.addClass('hidden');
            }
        }
    }

    toggleLanguagesOption(e) {
        if (this.filterLanguages == false){
            this.filterLanguages = true;
            this.languagesFilterOption.text("don't filter books by language");
            this.filtersSection.removeClass('hidden');
            this.languagesSection.removeClass('hidden');
            this.filtersSectionToggle.removeClass('hidden');
            this.filtersSectionToggle.addClass('inline');
        } else {
            this.filterLanguages = false;
            this.languagesFilterOption.text('filter books by language');
            this.languagesSection.addClass('hidden');
            $('.tomc-book-organization--option-span--language').removeClass('tomc-book-organization--option-selected');
            if (this.filterTriggers == false){
                this.filtersSectionToggle.addClass('hidden');
                this.filtersSectionToggle.removeClass('inline');
                this.filtersSectionToggle.addClass('fa-caret-up');
                this.filtersSectionToggle.removeClass('fa-caret-down');
                this.filtersSection.addClass('hidden');
            }
        }
    }

    toggleWarningSelection(e){
        let labelName = $(e.target).text();
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            $(e.target).attr('aria-label', labelName + ' is not selected');
            for (let i = 0; i < this.chosenWarnings.length; i++){
                if (this.chosenWarnings[i] == $(e.target).data('warning-id')){
                    this.chosenWarnings.splice(i, 1);
                }
            }
        } else {
            this.chosenWarnings.push($(e.target).data('warning-id'));
            $(e.target).addClass('tomc-book-organization--option-selected');
            $(e.target).attr('aria-label', labelName + ' is selected');
        }
    }
    toggleLanguageSelection(e){        
        let labelName = $(e.target).text();
        if ($(e.target).hasClass('tomc-book-organization--option-selected')){
            $(e.target).removeClass('tomc-book-organization--option-selected');
            $(e.target).attr('aria-label', labelName + ' is not selected');
            for (let i = 0; i < this.chosenLanguages.length; i++){
                if (this.chosenLanguages[i] == $(e.target).data('language-id')){
                    this.chosenLanguages.splice(i, 1);
                }
            }
        } else {
            this.chosenLanguages.push($(e.target).data('language-id'));
            $(e.target).addClass('tomc-book-organization--option-selected');  
            $(e.target).attr('aria-label', labelName + ' is selected');
        }
        if (this.chosenLanguages.length > 0){
            $("#tomc-search--no-languages-selected").addClass('hidden');
        } else {
            $("#tomc-search--no-languages-selected").removeClass('hidden');
        }        
    }

    openSearchOverlay(e){
        if (! this.isOverlayOpen){       
            this.isOverlayOpen = true;
            $(e.target).addClass('spinningIcon');
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/getReaderSettings',
                type: 'GET',
                success: (response) => {
                    $(e.target).removeClass('spinningIcon');
                    for(let i = 0; i < response.length; i++){
                        if (response[i]['settingtype']=='trigger'){
                            if (response[i]['triggerid']){
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span--trigger tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                                this.chosenWarnings.push(Number(response[i]['id']));
                            } else {
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span--trigger tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                            }
                            this.triggersContainer.append(this.newSpan);
                        } else if (response[i]['settingtype']=='language'){
                            if (response[i]['languageid']){
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span--language tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').attr('id', 'search-overlay-language-option-' + response[i]['language_name']).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                                this.chosenLanguages.push(Number(response[i]['id']));
                            } else {
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span--language tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').attr('id', 'search-overlay-language-option-' + response[i]['language_name']).html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                            }
                            this.languagesContainer.append(this.newSpan);
                        }
                    }
                    if (this.chosenLanguages < 1){
                        $('#search-overlay-language-option-English').addClass('tomc-book-organization--option-span--language tomc-book-organization--option-span tomc-book-organization--option-selected').attr('aria-label', 'English is selected');
                        this.chosenLanguages.push($('#search-overlay-language-option-English').data('language-id'));
                    }
                    this.searchOverlay.addClass("search-overlay--active");
                    $("body").addClass("body-no-scroll");
                    this.searchField.val('');
                    setTimeout(() => this.searchField.focus(), 301);
                },
                error: (response) => {
                    // console.log('error getting triggers');
                }
            })
            // return false;
        }
    }

    closeOverlay(){
        this.triggersContainer.html('');
        this.languagesContainer.html('');
        this.resultsDiv.html('');
        $("body").removeClass("body-no-scroll");
        this.isOverlayOpen = false;
        this.chosenLanguages = [];
        this.chosenWarnings = [];
        this.searchOverlay.removeClass("search-overlay--active");
    }

    getResults(e) {
        let routeEnding;
        let routeData;
        if ((this.chosenLanguages.length > 0) && (this.filterLanguages)){
            routeEnding = 'search';
            routeData = {
                'searchterm' : this.searchField.val().substring(0, 300),
                'triggers' : JSON.stringify(this.chosenWarnings),
                'hasTriggers' : this.chosenWarnings > 0 ? 'yes' : 'no',
                'languages' : JSON.stringify(this.chosenLanguages)
            }
        } else {
            routeEnding = 'searchWithoutLanguages';
            routeData = {
                'searchterm' : this.searchField.val().substring(0, 300),
                'triggers' : JSON.stringify(this.chosenWarnings),
                'hasTriggers' : this.chosenWarnings > 0 ? 'yes' : 'no'
            }
        }
        console.log(this.filterLanguages);
        console.log(this.chosenLanguages.length);
        console.log(routeEnding);
        if (this.searchField.val().length > 2){
            $(e.target).addClass('contracting');
            $('#tomc-search--no-search-term').addClass('hidden');
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/ebookMarketplace/v1/' + routeEnding,
                type: 'GET',
                data: routeData,
                success: (response) => {
                    $(e.target).removeClass('contracting');
                    let alreadyAddedBookIds = [];
                    let alreadyAddedProductIds = [];
                    if(response.length < 1){
                        this.resultsDiv.html("<p class='centered-text'>Sorry! We couldn't find any matching results.</p>");
                    } else {
                        this.resultsDiv.html("");
                        for(let i = 0; i < response.length; i++){
                            if (response[i]['resulttype'] === 'author'){
                                let newDiv = $('<div />').addClass('tomc-search-result--author').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                                let newTitle = $('<h1 />').addClass('centered-text small-heading');
                                let newSpan = $('<span />').html('Author ');
                                newTitle.append(newSpan);
                                let newLink = $('<a />').attr('href', response[i]['author_url']).html(response[i]['pen_name']);
                                newTitle.append(newLink);
                                newDiv.append(newTitle);
                                this.resultsDiv.append(newDiv);
                                newDiv.fadeIn();
                            } else if ($.inArray(response[i]['id'], alreadyAddedBookIds) > -1){
                                if ($.inArray(response[i]['productid'], alreadyAddedProductIds) == -1){
                                    let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                                    let newFormat = $('<p />').html(response[i]['type_name'].slice(0, -1));
                                    newLink.append(newFormat);
                                    $('#tomc-browse-genres--results--book-' + response[i]['id']).children('.tomc-browse--search-result-bottom-section').append(newLink);
                                    alreadyAddedProductIds.push(response[i]['productid']);
                                    newLink.fadeIn();
                                }
                            } else if (response[i]['resulttype'] === 'book') {
                                let newDiv = $('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                                let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                                newDiv.append(newTitle);
                                let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                                newDiv.append(newAuthor);
                                let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
                                let newCoverDescription = $('<div />').addClass('tomc-search-result-cover-description');
                                let newImage = $('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                                newCoverDescription.append(newImage);
                                let newDescription = $('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                                newCoverDescription.append(newDescription);
                                newBottomSection.append(newCoverDescription);
                                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                                let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                                let newFormat = $('<p />').html(response[i]['type_name'].slice(0, -1));
                                newLink.append(newFormat);
                                newBottomSection.append(newLink);
                                newDiv.append(newBottomSection);
                                this.resultsDiv.append(newDiv);
                                newDiv.fadeIn();
                                alreadyAddedBookIds.push(response[i]['id']);
                                alreadyAddedProductIds.push(response[i]['productid']);
                            } else if (response[i]['resulttype'] === 'genrebooks') {
                                let newDiv = $('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                                let newEm = $('<em />').html('new in ' + this.searchField.val());
                                newDiv.append(newEm);
                                let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                                newDiv.append(newTitle);
                                let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                                newDiv.append(newAuthor);
                                let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
                                let newCoverDescription = $('<div />').addClass('tomc-search-result-cover-description');
                                let newImage = $('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                                newCoverDescription.append(newImage);
                                let newDescription = $('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                                newCoverDescription.append(newDescription);
                                newBottomSection.append(newCoverDescription);
                                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                                let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                                let newFormat = $('<p />').html(response[i]['type_name'].slice(0, -1));
                                newLink.append(newFormat);
                                newBottomSection.append(newLink);
                                newDiv.append(newBottomSection);
                                this.resultsDiv.append(newDiv);                                    
                                newDiv.fadeIn();
                                alreadyAddedBookIds.push(response[i]['id']);
                                alreadyAddedProductIds.push(response[i]['productid']);
                            } else if (response[i]['resulttype'] === 'identitybooks') {
                                let newDiv = $('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                                let newEm = $('<em />').html('new with main characters who are ' + response[i]['identity_name']);
                                newDiv.append(newEm);
                                let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                                newDiv.append(newTitle);
                                let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                                newDiv.append(newAuthor);
                                let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
                                let newCoverDescription = $('<div />').addClass('tomc-search-result-cover-description');
                                let newImage = $('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                                newCoverDescription.append(newImage);
                                let newDescription = $('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                                newCoverDescription.append(newDescription);
                                newBottomSection.append(newCoverDescription);
                                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                                let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                                let newFormat = $('<p />').html(response[i]['type_name'].slice(0, -1));
                                newLink.append(newFormat);
                                newBottomSection.append(newLink);
                                newDiv.append(newBottomSection);
                                this.resultsDiv.append(newDiv);
                                newDiv.fadeIn();
                                alreadyAddedBookIds.push(response[i]['id']);
                                alreadyAddedProductIds.push(response[i]['productid']);
                            } else if (response[i]['resulttype'] === 'readalikebooks') {
                                let newDiv = $('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                                let newEm = $('<em />').html('If you loved ' + response[i]['readalike_title'] + ' by ' + (response[i]['readalike_author'] != null ? response[i]['readalike_author'] : 'unknown or anonymous') + ', you might love this book, too.');
                                newDiv.append(newEm);
                                let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                                newDiv.append(newTitle);
                                let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                                newDiv.append(newAuthor);
                                let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
                                let newCoverDescription = $('<div />').addClass('tomc-search-result-cover-description');
                                let newImage = $('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                                newCoverDescription.append(newImage);
                                let newDescription = $('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                                newCoverDescription.append(newDescription);
                                newBottomSection.append(newCoverDescription);
                                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                                let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                                let newFormat = $('<p />').html(response[i]['type_name'].slice(0, -1));
                                newLink.append(newFormat);
                                newBottomSection.append(newLink);
                                newDiv.append(newBottomSection);
                                this.resultsDiv.append(newDiv);
                                newDiv.fadeIn();
                                alreadyAddedBookIds.push(response[i]['id']);
                                alreadyAddedProductIds.push(response[i]['productid']);
                            } else if (response[i]['resulttype'] === 'genreIdentity'){
                                let newDiv = $('<div />').addClass('tomc-search-result').attr('id', 'tomc-browse-genres--results--book-' + response[i]['id']);
                                let newEm = $('<em />').html('new in ' + response[i]['genre_name'] + ' about ' + response[i]['identity_name']);
                                newDiv.append(newEm);
                                let newTitle = $('<h1 />').addClass('centered-text, small-heading').html(response[i]['title']);
                                newDiv.append(newTitle);
                                let newAuthor = $('<p />').html(response[i]['pen_name'].length > 0 ? 'by ' + response[i]['pen_name'] : 'by unknown or anonymous author');
                                newDiv.append(newAuthor);
                                let newBottomSection = $('<div />').addClass('tomc-browse--search-result-bottom-section');
                                let newCoverDescription = $('<div />').addClass('tomc-search-result-cover-description');
                                let newImage = $('<img />').attr('src', response[i]['product_image_id']).attr('alt', 'the cover for ' + response[i]['title']);
                                newCoverDescription.append(newImage);
                                let newDescription = $('<p />').addClass('bottomSection-description').html(response[i]['book_description'].substring(0, 500) + '...');
                                newCoverDescription.append(newDescription);
                                newBottomSection.append(newCoverDescription);
                                newBottomSection.append('<h4 class="centered-text">available in</h4>');
                                let newLink = $('<a />').addClass('centered-text').attr('href', response[i]['product_url']);
                                let newFormat = $('<p />').html(response[i]['type_name'].slice(0, -1));
                                newLink.append(newFormat);
                                newBottomSection.append(newLink);
                                newDiv.append(newBottomSection);
                                this.resultsDiv.append(newDiv);                                    
                                newDiv.fadeIn();
                                alreadyAddedBookIds.push(response[i]['id']);
                                alreadyAddedProductIds.push(response[i]['productid']);
                            }
                        }
                    }
                },
                error: (response) => {
                    // console.log('fail');
                }
            });
        } else {
            $('#tomc-search--no-search-term').removeClass('hidden');
        } 
    }

    keyPressDispatcher(e) {
        if(e.keyCode == 83 && !this.isOverlayOpen && !$("input, textarea").is(':focus')) {
            this.openOverlay()
        }
        if(e.keyCode == 27 && this.isOverlayOpen) {
            this.closeOverlay()
        }
    }
}

export default SiteSearch;