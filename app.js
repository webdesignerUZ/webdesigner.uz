const menuBtn = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

let navbarOpen = false;

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    menuBtn.classList.toggle('change')
    // navbarOpen ? false : true;
    // navbarOpen ? navbar.style.position = 'fixed' : navbar.style.position = 'absolute';
})