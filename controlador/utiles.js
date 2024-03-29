$(document).ready(function() {

    //LOGIN
    $('#ingresar').click(function() {
        $.ajax({
            url: 'modelo/comprobarLogin.php',
            type: 'POST',
            dataType: 'json',
            data: {
                nombre: $('#nombre').val(),
                contra: $('#contra').val(),
            },
            success: function(datos) {
                if ($('#nombre').val() == 'admin' && $('#contra').val() == '1234') {
                    window.location.href = "vista/opcionesAdmin.html";

                } else if (datos.nombre != $('#nombre').val() && datos.contra != $('#contra').val()) {
                    $('#mensaje').html("USUARIO O CONTRASEÑA INCORRECTO");

                } else {
                    var nombre = $('#nombre').val();
                    var contra = $('#contra').val();
                    window.location.href = "vista/opcionesUsuario.php?nombre=" + nombre + "&contra=" + contra;
                }
            },

            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    });

    // //INSERTAR NUEVO USUARIO
    $('#registrarUsuario').click(function() {
        $.ajax({
            url: '../modelo/registroUsuario.php',
            type: 'POST',
            dataType: 'text',
            data: {
                nombre: $('#nombre').val(),
                contra: $('#contra').val(),
            },
            success: function(datos) {
                if (datos.nombre != $('#nombre').val() && datos.contra != $('#contra').val()) {
                    $('#mensaje').html("USUARIO O CONTRASEÑA INCORRECTO");
                } else if ($('#nombre').val() == null || $('#contra').val() == null)
                    $('#mensaje').html("DEBE RELLENAR TODOS LOS CAMPOS");
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    });
});