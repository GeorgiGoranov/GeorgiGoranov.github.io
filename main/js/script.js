
const toggleBtn = document.querySelector('.nav__toggle')
const toggleBtnIcon = document.querySelector('.nav__toggle i')
const dropdownMenu = document.querySelector('.nav__menu_phone')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('nav_menu_phone_open')

    const isOpen = dropdownMenu.classList.contains('nav_menu_phone_open')

    toggleBtnIcon.classList = isOpen
    ? 'ri-close-line'
    : 'ri-menu-line'
    
}

/*background header change*/ 
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
    
}
window.addEventListener('scroll', blurHeader)

/*Scroll Reveal */
ScrollReveal({
    rest: true,
    distance: '60px',
    duration: 1500
})

ScrollReveal().reveal('.home_data, .home__social, .footer__container');
ScrollReveal().reveal('.home__image', {origin: 'bottom'});
ScrollReveal().reveal('.education__data, .skills__container', {origin: 'left'});
ScrollReveal().reveal('.experience__data, .projects__container', {origin: 'right'});
ScrollReveal().reveal('.projects__card, .skills_card', {interval: 100});

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = button.closest('.info__modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null)return
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal(modal){
    if(modal == null)return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.info__modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
