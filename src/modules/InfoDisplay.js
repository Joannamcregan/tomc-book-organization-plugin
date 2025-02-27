class InfoDisplay {

    constructor() {
        this.displays = document.querySelectorAll('.info-display');
        this.events();
    }

    events(){
        this.displays.forEach(display => {
            display.addEventListener('click', e => {
                e.preventDefault();
                let parentSection = display.parentElement.querySelector('.category-children');
                if (parentSection.classList.contains('not-displayed')) {
                    parentSection.classList.remove('not-displayed');
                } else {
                    parentSection.classList.add('not-displayed');
                }
            })
        })
    }
}

export default InfoDisplay;