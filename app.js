const accQuestions = document.querySelectorAll('.accordion__question');
const plusIcon = document.querySelectorAll('.plus--icon');
const minusIcon = document.querySelectorAll('.minus--icon');

accQuestions.forEach(item => {
    item.addEventListener('click', () => {
        let accCollapse = item.nextElementSibling;

        if(!accCollapse.classList.contains('open')) {
            accCollapse.classList.add('open');
            accCollapse.style.height = accCollapse.scrollHeight + 'px';
        }
        else {
            accCollapse.classList.remove('open');
            accCollapse.style.height = '0px';
        }
    })
})