// Inicializa Firebase con tu configuración
const firebaseConfig = {
    apiKey: "AIzaSyBVg9vvfDrnZRgiJDZiZ-apzRSjNxh3RBU",
    authDomain: "frio-creativos.firebaseapp.com",
    projectId: "frio-creativos",
    storageBucket: "frio-creativos.appspot.com",
    messagingSenderId: "615296536631",
    appId: "1:615296536631:web:5d7ae00bf2635c78d4efb2",
    measurementId: "G-E42XGEF7L3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Agrega un manejador de eventos para el envío del formulario
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Guarda los datos en Firestore
    db.collection("contact-form").add({
        name: name,
        email: email,
        message: message
    })
    .then(function(docRef) {
        console.log("Datos guardados con ID: ", docRef.id);
        alert("Mensaje enviado con éxito");
        form.reset();
    })
    .catch(function(error) {
        console.error("Error al guardar datos: ", error);
        alert("Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    });
});