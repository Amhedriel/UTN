// Obtener los elementos del formulario
var formulario = document.getElementById("form");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var tipoSeguro = document.getElementById("tipo-seguro");
var boton = document.getElementById("boton");

// Asignar un evento de escucha al botón de enviar
boton.addEventListener("click", function (e) {
  // Crear la variable destinatario
  var destinatario = "davikin01@gmail.com";

  // Crear la variable asunto
  var asunto = "Solicitud de seguro";

  // Crear la variable cuerpo
  var cuerpo = 'Has recibido una nueva solicitud de seguro con los siguientes datos: \n\n';
  cuerpo += "Nombre: " + nombre.value + "\n";
  cuerpo += "Apellido: " + apellido.value + "\n";
  cuerpo += "Email: " + email.value + "\n";
  cuerpo += "Teléfono: " + telefono.value + "\n";
  cuerpo += "Tipo de seguro: " + tipoSeguro.value + "\n";

  // Crear la variable mailto
  var mailto = "mailto:" + destinatario + "?subject=" + asunto + "&body=" + cuerpo;

  // Abrir el cliente de correo del usuario con la dirección de mailto
  window.open(mailto);

  // Evitar que el formulario se envíe por el método POST
  e.preventDefault();
});
