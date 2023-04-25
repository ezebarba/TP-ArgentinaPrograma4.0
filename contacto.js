/* import { jsPDF } from "jspdf"; */

$(document).ready(function() {
  event.preventDefault();
    // Validación del formulario usando Validate.js
    $('#contact-form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Por favor ingresa tu nombre completo.'
        },
        email: {
          required: 'Por favor ingresa tu correo electrónico.',
          email: 'Por favor ingresa un correo electrónico válido.'
        },
        subject: {
          required: 'Por favor ingresa el asunto del mensaje.'
        },
        message: {
          required: 'Por favor escribe tu mensaje.'
        }
      },
      errorElement: 'div',
      errorPlacement: function(error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
    });
});

// Manejar el envío del formulario
$("form[name='contact-form']").submit(function(event) {
    // Prevenir el comportamiento predeterminado del formulario
  
    // Verificar si el formulario es válido
    if ($(this).valid()) {
      // Obtener los datos del formulario
      var fullname = $("input[name='fullname']").val();
      var email = $("input[name='email']").val();
      var subject = $("input[name='subject']").val();
      var message = $("textarea[name='message']").val();
  
      // Crear una nueva instancia de jsPDF
      var doc = new jsPDF();
  
      // Establecer el tamaño de fuente
      doc.setFontSize(12);
  
      // Agregar contenido al PDF
      doc.text("Nombre y Apellido: " + fullname, 10, 20);
      doc.text("Email: " + email, 10, 30);
      doc.text("Asunto: " + subject, 10, 40);
      doc.text("Mensaje: " + message, 10, 50);
  
      // Descargar el PDF
      doc.save("formulario_contacto.pdf");
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.querySelector('#pdf'), function() {
        pdf.save('documentoPDF1.pdf');
    });
});