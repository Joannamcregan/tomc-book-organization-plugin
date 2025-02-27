import $ from 'jquery';

class Settings {
// 1. describe and create/initiate object
    constructor() {    
        this.settingsOverlay = $(".tomc-settings-overlay");
        this.openButton = $(".js-settings-trigger");
        this.closeButton = $(".search-overlay__close");
        this.saveLanguageSettingsButton = $("#tomc-reader-settings--save-language-settings");
        this.saveTriggerSettingsButton = $("#tomc-reader-settings--save-trigger-settings");
        this.events();
        this.isOverlayOpen = false;
        this.chosenWarnings = [];
        this.chosenLanguages = [];
    }
// 2. events
    events(){
        this.openButton.on("click", this.openSettingsOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
        this.saveLanguageSettingsButton.on("click", this.saveLanguageSettings.bind(this));
        this.saveTriggerSettingsButton.on("click", this.saveTriggerSettings.bind(this));
    }

// 3. methods (functions, actions...)

    closeOverlay(){
        this.settingsOverlay.removeClass("search-overlay--active");
        $("#settings-overlay--triggers-container").html('');
        $("#settings-overlay--languages-container").html('');
        this.chosenLanguages = [];
        this.chosenWarnings = [];
        $("body").removeClass("body-no-scroll");
        this.isOverlayOpen = false;
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
    }

    //potentially add below to the html when suggestions functionality added-----------------------
    // <div class="settings-overlay--section">
    //     <h2 class="centered-text">My Favorite Genres</h2>
    //     <div id="settings-overlay--genres-2-container"></div>
    //     <h2 class="centered-text">My Favorite Topics</h2>
    //     <div id="settings-overlay--genres-3-container"></div>
    // </div>
    openSettingsOverlay(e){
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
                    $(e.target).removeClass('spinningIcon')
                    for(let i = 0; i < response.length; i++){
                        if (response[i]['settingtype']=='trigger'){
                            if (response[i]['triggerid']){
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                                this.chosenWarnings.push(Number(response[i]['id']));
                            } else {
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-warning-id', response[i]['id']).attr('aria-label', response[i]['warning_name'] + ' is not selected').html(response[i]['warning_name']).on('click', this.toggleWarningSelection.bind(this));
                            }
                            $("#settings-overlay--triggers-container").append(this.newSpan);
                        } else if (response[i]['settingtype']=='language'){
                            if (response[i]['languageid']){
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span tomc-book-organization--option-selected').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                                this.chosenLanguages.push(Number(response[i]['id']));
                            } else {
                                this.newSpan = $('<span />').addClass('tomc-book-organization--option-span').attr('data-language-id', response[i]['id']).attr('aria-label', response[i]['language_name'] + ' is not selected').html(response[i]['language_name']).on('click', this.toggleLanguageSelection.bind(this));
                            }
                            $("#settings-overlay--languages-container").append(this.newSpan);
                        }
                    }
                    this.settingsOverlay.addClass("search-overlay--active");
                    $("body").addClass("body-no-scroll");
                },
                error: (response) => {
                    // console.log(response);
                }
            })
        }
    }

    saveLanguageSettings(){
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/saveLanguageSettings',
            type: 'POST',
            data: {
                'languages': JSON.stringify(this.chosenLanguages)
            },
            success: (response) => {
                // console.log(response);
                $("#tomc-reader-settings-language-settings-saved-message").fadeIn().delay(3000).fadeOut();
            },
            error: (response) => {
                // console.log(response);
            }
        })
    }

    saveTriggerSettings(){
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcReaderSettings/v1/saveTriggerSettings',
            type: 'POST',
            data: {
                'triggers': JSON.stringify(this.chosenWarnings)
            },
            success: (response) => {
                $("#tomc-reader-settings-trigger-settings-saved-message").fadeIn().delay(3000).fadeOut();
            },
            error: (response) => {
                // console.log(response);
            }
        })
    }

}

export default Settings;