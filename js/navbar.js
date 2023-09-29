


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.navbar .logo');

    if (window.scrollY >= 150) {
        navbar.classList.add('scroll');
        logo.src = 'imagenes/logo-ond.png';
    } else {
        navbar.classList.remove('scroll');
        logo.src = 'imagenes/friologo.png';
    }
});

const image = document.querySelector('.image'); // Selecciona la imagen por su clase "image"

image.addEventListener('mouseenter', () => {
    image.src = 'imagenes/logo-ond.png'; // Cambia la imagen al hacer hover
});

image.addEventListener('mouseleave', () => {
    image.src = 'imagenes/friologo.png'; // Restaura la imagen original al quitar el mouse
});