$(document).ready(function() {

    //tabla de palabras
    $('#cargarPalabras').click(function() {
        muestraPalabras();
    })

    function muestraPalabras() {
        $.ajax({
            url: '../modelo/damePalabras.php',
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var palabras = '<table id="tablaPalabras" border=1 class="table table-stripped"><tr><th>ID</th><th id="palabra">PALABRA</th><th id="categoria">CATEGORIA</th><th id="acciones">ACCIONES</th></tr>'
                $.each(datos, function(i, elemento) {
                    palabras = palabras + '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.palabra +
                        '</td><td>' + elemento.categoria +
                        '</td><td><button class="borrar">Borrar</button>  <button class="modificar">Modificar</button></td></tr>'
                });
                palabras = palabras + '</table>';
                $('#tablaPalabras').html(palabras);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    };






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
                    window.location.href = "vista/opcionesUsuario.html";
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
            url: 'modelo/registroUsuario.php',
            type: 'POST',
            dataType: 'text',
            data: {
                nombre: $('#nombre').val(),
                contra: $('#contra').val(),
            },
            success: function(datos) {
                if (datos.nombre != $('#nombre').val() && datos.contra != $('#contra').val()) {
                    $('#mensaje').html("USUARIO O CONTRASEÑA INCORRECTO");
                } else if ($('#nombre').val() == empty || $('#contra').val() == empty)
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