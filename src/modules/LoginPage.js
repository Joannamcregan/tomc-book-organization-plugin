import $ from 'jquery';

class LoginPage {

    constructor() {
        this.showLogin = $('#tomc-show-login');
        this.showRegister = $('#tomc-show-registration');
        this.loginSection = $('#tomc-login-section');
        this.registrationSection = $('#tomc-register-section');
        this.events();
    }

    events(){
        this.showLogin.on('click',()=>{
            this.loginSection.removeClass('hidden');
            this.registrationSection.addClass('hidden');
        });
        this.showRegister.on('click',()=>{
            this.registrationSection.removeClass('hidden');
            this.loginSection.addClass('hidden');
        });
    }
}

export default LoginPage;