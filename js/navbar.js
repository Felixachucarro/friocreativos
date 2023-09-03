
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.navbar .logo');

    if (window.scrollY >= 150) { // Se cambió el valor a 150 píxeles
      navbar.classList.add('scroll');
      logo.src = 'imagenes/invert.png'; // Cambia la ruta de la imagen del logo al hacer scroll
    } else {
      navbar.classList.remove('scroll');
      logo.src = 'imagenes/friologo.png'; // Vuelve a la imagen original cuando se encuentra en la parte superior
    }
  });