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

// Agrega un manejador de eventos cuando se envía el formulario
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtén los valores de los campos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const help = document.getElementById("help").value;
    const instagram = document.getElementById("instagram").value;
    const investmentRange = document.getElementById("investment-range").value;
    const services = document.getElementById("services").value;

    // Accede a Firestore de Firebase
    const db = firebase.firestore();

    // Crea un objeto con los datos del formulario
    const formData = {
        name: name,
        email: email,
        whatsapp: whatsapp,
        help: help,
        instagram: instagram,
        investmentRange: investmentRange,
        services: services
    };

    // Guarda los datos en Firestore
    db.collection("contact-form").add(formData)
        .then(function (docRef) {
            console.log("Datos guardados con ID: ", docRef.id);
            alert("Mensaje enviado con éxito");
            document.getElementById("contact-form").reset(); // Reinicia el formulario después del envío
        })
        .catch(function (error) {
            console.error("Error al guardar datos: ", error);
            alert("Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        });
});