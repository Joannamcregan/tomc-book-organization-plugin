class FAQDisplay {

    constructor() {
        this.questions = document.querySelectorAll('.tomc-faq-section h2');
        this.events();
    }

    events(){
        this.questions.forEach(question => {
            question.addEventListener('click', e => {
                question.closest('.tomc-faq-section').querySelector('.tomc-faq-a').classList.toggle('hidden');
            })
        })
    }
}

export default FAQDisplay;