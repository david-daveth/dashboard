const navMenu = document.querySelector('.nav__menu'),
        navToggle = document.querySelector('.nav__toggler'),
        navClose = document.querySelector('.nav__close')

if (navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
        navClose.classList.remove('display')
    })
}
if (navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
        navClose.classList.add('display')
    })
}