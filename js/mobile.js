// Función para alternar la visibilidad de los elementos de contenido
function toggleContent() {
    const desktopContent = document.querySelectorAll('#desktop-content');
    const mobileContent = document.querySelector('#mobile-content');

    if (isMobile()) {
        desktopContent.forEach(element => {
            element.style.display = 'none';
        });
        mobileContent.style.display = 'block';
    } else {
        desktopContent.forEach(element => {
            element.style.display = 'block';
        });
        mobileContent.style.display = 'none';
    }
}

// Llama a la función inicialmente y cada vez que cambia el tamaño de la ventana
toggleContent();
window.addEventListener('resize', toggleContent);