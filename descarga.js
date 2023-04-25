import { jsPDF } from "jspdf";

/* $(document).ready(function () {
    $('#contact-form').validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true,
        },
        subject: 'required',
        message: 'required',
      },
      messages: {
        name: 'Por favor ingrese su nombre y apellido',
        email: {
          required: 'Por favor ingrese su correo electrónico',
          email: 'Por favor ingrese un correo electrónico válido',
        },
        subject: 'Por favor ingrese un asunto',
        message: 'Por favor ingrese un mensaje',
      },
      submitHandler: function (form) {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        var doc = new jsPDF();
        doc.text(`Nombre y Apellido: ${name}`, 20, 20);
        doc.text(`Email: ${email}`, 20, 30);
        doc.text(`Asunto: ${subject}`, 20, 40);
        doc.text(`Mensaje: ${message}`, 20, 50);
        doc.save('formulario.pdf');
      },
    });
  
    $('#download-pdf').click(function (e) {
      e.preventDefault();
      $('#contact-form').submit();
    });
  });
  
 */
  // Manejar el envío del formulario
/* $("form[name='contact-form']").submit(function(event) { */
    // Prevenir el comportamiento predeterminado del formulario
  
    // Verificar si el formulario es válido
/*     if ($(this).valid()) { */
// Landscape export, 2×4 inches
const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [4, 2]
  });
  
  doc.text("Hello world!", 1, 1);
  doc.save("two-by-four.pdf");
/* }); */
/*   }); */