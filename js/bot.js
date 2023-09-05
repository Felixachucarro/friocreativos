function responder() {
    const pregunta = document.getElementById("pregunta").value;
    const respuesta = document.getElementById("respuesta");

    // Objeto con preguntas y respuestas predefinidas
    const baseDeConocimiento = {
        
        "¿Cómo estás?" : "Estoy bien, gracias por preguntar.",
        "¿Cuál es tu nombre?": "Mi nombre es Bot.",
        "¿Qué es JavaScript?": "JavaScript es un lenguaje de programación utilizado para desarrollo web.",
        "¿Cómo estás?" : "Estoy bien, gracias por preguntar.",
        "trail" : "El curso Trail, el usuario ve el contenido en forma de un recorrido por etapas o postas. Un camino interactivo a través del cual avanza paso a paso por el curso y desbloquea nuevas etapas hasta llegar a la meta.",
        "mosaico" : "El formato mosaico, el usuario ve una tira de mosaicos, cada uno corresponde a una sección del curso. Esto permite una rápida visualización de la estructura de contenidos.",
        
    };

    // Buscar la respuesta en la base de conocimiento
    if (baseDeConocimiento.hasOwnProperty(pregunta)) {
        respuesta.textContent = baseDeConocimiento[pregunta];
    } else {
        respuesta.textContent = "Lo siento, no puedo responder esa pregunta.";
    }
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        responder();
    }
}

function responder() {
    const preguntaOriginal = document.getElementById("pregunta").value.toLowerCase();
    const respuesta = document.getElementById("respuesta");

    // Matriz de respuestas posibles
    const respuestasPosibles = [
        "Mi nombre es Bot.",
        "JavaScript es un lenguaje de programación utilizado para desarrollo web.",
        "Estoy bien, gracias por preguntar.",
        "No entiendo la pregunta.",
        "Esa es una pregunta interesante.",
        "Podrías hacerme una pregunta más específica?"
    ];

    // Seleccionar una respuesta aleatoria
    const respuestaAleatoria = respuestasPosibles[Math.floor(Math.random() * respuestasPosibles.length)];

    respuesta.textContent = respuestaAleatoria;
}

