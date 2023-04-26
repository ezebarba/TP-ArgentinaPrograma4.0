$("#submit").click(function(event) {
  event.preventDefault(); // Evita que la página se recargue
  alert('Se envio correctamente el formulario')
});

$(document).ready(function() {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 2
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: 'Por favor, ingrese su nombre',
        minlength: 'El nombre debe tener al menos 2 caracteres'
      },
      email: {
        required: 'Por favor, ingrese su correo electrónico',
        email: 'Por favor, ingrese un correo electrónico válido'
      },
      subject: {
        required: 'Por favor, ingrese un asunto válido',
        minlength: 'El asunto debe tener al menos 2 caracteres'
      },
      message: {
        required: 'Por favor, ingrese un mensaje válido',
        minlength: 'El asunto debe tener al menos 10 caracteres'        
      }
    },
  });
});


$(document).ready(function() {  
  // Listener para el botón de descarga
  $('#download-pdf').on('click', function() {
    // Obtener la información del formulario y opciones
    var form = $('#contact-form')[0];
    var opt = {
      margin:       1,
      filename:     'contacto.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });

    // Generar el PDF
    html2pdf().set(opt).from($('#contact-form').get(0)).save();

    // Evitar que se recargue la página
    return false;
  });
});
