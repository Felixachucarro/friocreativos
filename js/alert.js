function openModal() {
    var modal = document.getElementById("constructionModal");
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("constructionModal");
    modal.style.display = "none";
}

// Mostrar el modal al cargar la página (puedes ajustar el tiempo)
setTimeout(openModal, 2000); // Mostrar después de 2 segundos