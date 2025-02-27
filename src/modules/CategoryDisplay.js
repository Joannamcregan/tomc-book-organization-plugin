class CategoryDisplay {

    constructor() {
        this.arrows = document.querySelectorAll('.arrow');
        this.events();
    }

    events(){
        this.arrows.forEach(arrow => {
            arrow.addEventListener('click', e => {
                e.preventDefault();
                let parentSection = arrow.parentElement.querySelector('.category-children');
                if (parentSection.classList.contains('not-displayed')) {
                    parentSection.classList.remove('not-displayed');
                    arrow.classList.add('fa-caret-up');
                    arrow.classList.remove('fa-caret-down');
                } else {
                    parentSection.classList.add('not-displayed');
                    arrow.classList.add('fa-caret-down');
                    arrow.classList.remove('fa-caret-up');
                }
            })
        })
    }
}

export default CategoryDisplay;