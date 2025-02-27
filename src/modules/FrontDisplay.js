class FrontDisplay {

    constructor() {
        this.leaves = document.querySelectorAll('.expandable-leaf');
        this.events();
    }

    events(){
        this.leaves.forEach(leaf => {
            leaf.addEventListener('click', e => {
                e.preventDefault();
                let parentSection = leaf.parentElement.parentElement.querySelector('.sub-leaf-section');
                if (parentSection.classList.contains('not-displayed')) {
                    parentSection.classList.remove('not-displayed');
                } else {
                    parentSection.classList.add('not-displayed');
                }
            })
        })
    }
}

export default FrontDisplay;