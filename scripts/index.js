let menuIcons = document.querySelector('.menu-icons');
let nav = document.querySelector('nav');

menuIcons.addEventListener('click' , () => {
    nav.classList.toggle('active');
})