import $ from 'jquery';

class Roadmap {
    constructor() {
        this.sellBooksSpan = $("#sellBooksSpan");
        this.sellProductsSection = $("#sellProductsSection");
        this.sellServicesSpan = $("#sellServicesSpan");
        this.sellServicesSection = ("#sellServicesSection");
        this.events();
    }

    events(){
        this.sellBooksSpan.on('click', () => {
            this.sellBooksSpan.toggleClass('roadmap--purple-span');
            this.sellBooksSpan.toggleClass('roadmap--hollow-purple-span');
            this.sellProductsSection.toggleClass('hidden');
        });
        this.sellServicesSpan.on('click', ()=> {
            this.sellServicesSpan.toggleClass('roadmap--blue-span');
            this.sellServicesSpan.toggleClass('roadmap--hollow-blue-span');
            this.sellServicesSection.toggleClass('hidden');
        })
    }

}

export default Roadmap;