import $ from 'jquery';

class PenNames{
    constructor(){
        this.displaySections = $('.tomc-book-organization--display-penname-section');
        this.editButtons = $('.tomc-book-organization--edit-penname-bio');
        this.editSections = $('.tomc-book-organization--edit-penname-section');
        this.saveEditButtons = $('.tomc-book-organization--save-penname-edit');
        this.cancelEditButtons = $('.tomc-book-organization--cancel-penname-edit');
        this.newName = $('#tomc-book-organization-new-penname');
        this.newNameBio = $('#tomc-book-organization--ew-name-bio');
        this.saveNewName = $('#tomc-book-organization--save-new-penname');
        this.cancelNewName = $('#tomc-book-organization--cancel-new-penname');
        this.events();
    }

    events(){
        this.editButtons.on('click', this.editPenName.bind(this));
        this.cancelEditButtons.on('click', this.cancelEdit.bind(this));
        this.saveEditButtons.on('click', this.submitEdit.bind(this));
        this.saveNewName.on('click', this.submitNewName.bind(this));
        this.cancelNewName.on('click', this.clearNewName.bind(this));
    }
    
    editPenName(e){
        $(e.target).parent('.tomc-book-organization--display-penname-section').parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--edit-penname-section').toggleClass('hidden');
        $(e.target).parent('.tomc-book-organization--display-penname-section').toggleClass('hidden');
    }

    cancelEdit(e){
        $(e.target).parent().parent().children('.tomc-blank-bio-message').addClass('hidden');
        $(e.target).parent().parent('.tomc-book-organization--edit-penname-section').parent('.tomc-book-organization--book-to-edit').children('.tomc-book-organization--display-penname-section').toggleClass('hidden');
        $(e.target).parent().parent('.tomc-book-organization--edit-penname-section').toggleClass('hidden');
    }

    clearNewName(e){
        this.newName.val('');
        this.newNameBio.val('');
    }

    submitEdit(e){
        let $content = $(e.target).parent().parent('.tomc-book-organization--edit-penname-section').children('.tomc-book-organization-textarea--edit').val().substring(0, 1000);
        let $id = $(e.target).parent().parent('.tomc-book-organization--edit-penname-section').parent('.tomc-book-organization--book-to-edit').data('pen-name');
        if ($content){
            $(e.target).parent().parent().children('.tomc-blank-bio-message').addClass('hidden');
            $.ajax({
                beforeSend: (xhr) => {
                    xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                },
                url: tomcBookorgData.root_url + '/wp-json/tomcPennames/v1/submitEdit',
                type: 'POST',
                data: {
                    'content' : $content,
                    'postId' : $id
                },
                success: (response) => {
                    // console.log(response);
                    location.reload(true);
                },
                error: (response) => {
                    // console.log(response);
                }
            })
        } else {
            $(e.target).parent().parent().children('.tomc-blank-bio-message').removeClass('hidden');
        }        
    }

    submitNewName(e){
        let $name = this.newName.val().substring(0, 100);
        let $content = this.newNameBio.val().substring(0, 1000);
        if ($name){
            $('#tomc-blank-new-name-message').addClass('hidden');
            if ($content){
                $('#tomc-blank-new-bio-message').addClass('hidden');
                this.newPenNameData = {
                    'title':  $name,
                    'content': $content,
                    'status': 'publish'
                }
                $.ajax({
                    beforeSend: (xhr) => {
                        xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
                    },
                    url: tomcBookorgData.root_url + '/wp-json/wp/v2/author-profile',
                    type: 'POST',
                    data: this.newPenNameData,
                    success: (response) => {
                        // console.log(response);
                        location.reload(true);
                    },
                    error: (response) => {
                        // console.log(response);
                    }
                })
            } else {
                $('#tomc-blank-new-bio-message').removeClass('hidden');
            }
        } else {
            $('#tomc-blank-new-name-message').removeClass('hidden');
        }        
    }
}

export default PenNames;