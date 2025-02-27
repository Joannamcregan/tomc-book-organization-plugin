import $ from 'jquery';

class VendorInfo {

    constructor() {
        this.sellAsVendorButton = $('#sell-as-vendor-button');
        this.events();
    }
    events(){
        this.sellAsVendorButton.on('click', this.getVendorRoleAssignment.bind(this));
    }
    getVendorRoleAssignment(){
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', marketplaceData.nonce);
            },
            url: tomcBookorgData.root_url + '/wp-json/tomcVendor/v1/assignVendorRole',
            type: 'POST',
            success: (response) => {
                // console.log(response);
                location.reload(true);
            },
            error: (response) => {
                // console.log(response);
            }
        })
    }
}

export default VendorInfo;