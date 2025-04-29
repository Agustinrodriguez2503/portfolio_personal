let menuIcon = document.querySelector('#icono-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bn-x');
    navbar.classList.toggle('active');
}

