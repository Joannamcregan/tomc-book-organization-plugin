import $ from 'jquery';

class Suggestions{
    constructor(){
        this.suggestionSection = $("#tomc-book-organization--enter-suggestion-section");
        this.suggestionText = $("#tomc-book-organization--suggestion-text");
        this.gotItSection = $("#tomc-book-organization--got-suggestion");
        // uncomment the below if we decide to add multiple suggestion options -------------
        // this.instructions = $("#tomc-book-organization--suggestion-instructions");
        // this.dropdown = $("#tomc-book-organization--suggestion-types-select");
        this.submit = $("#tomc-book-organization--submit-suggestion");
        this.events();
    }
    events(){
        // this.dropdown.on('change', this.updateInstructions.bind(this));
        this.submit.on('click', this.submitSuggestion.bind(this));
    }
    // updateInstructions(){
    //     console.log('called');
    //     if (this.dropdown.val() > 0){
    //         this.instructions.html(this.dropdown.find(':selected').data('instruction'));
    //         this.suggestionSection.removeClass('hidden');
    //     } else {
    //         this.instructions.html('');
    //         this.suggestionSection.addClass('hidden');
    //     }
    // }
    submitSuggestion(){
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcSuggestions/v1/simpleTriggerSuggestion',
            type: 'POST',
            data: {
                'suggestion' : this.suggestionText.val().substring(0, 200)
            },
            success: (response) => {
                this.suggestionSection.addClass('hidden');
                this.gotItSection.removeClass('hidden');
            },
            error: (response) => {
                console.log(response);
            }
        })
    }
}

export default Suggestions;