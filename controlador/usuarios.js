$(document).ready(function() {
    var orden = 'id';
    var dir = 'ASC';
    muestraUsuarios(orden);

    $('#contenido').on('click', 'th:not("#acciones")', function() {
        elemento = $(this).text();
        muestraUsuarios(elemento);

        if (dir == 'ASC') {
            dir == 'DESC'
        } else if (dir == 'DESC') {
            dir == 'ASC'
        }
    });

    $('#insertar').click(function() {
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

    $('#contenido').on('click', '.borrar', function() {
        var id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        var fila = $(this).parent().parent();
        $.ajax({
            url: 'borralibro.php?id=' + id,
            type: 'GET',
            dataType: 'text',
            success: function(datos) {
                fila.remove();
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    })

    $('#contenido').on('click', '.modificar', function() {
        var id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        var fila = $(this).parent().parent();
        $.ajax({
            url: 'modificalibro.php?id=' + id,
            type: 'GET',
            dataType: 'text',
            success: function(datos) {
                fila.remove();
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    })


    function muestraUsuarios(orden) {
        $.ajax({
            url: '../modelo/dameUsuarios.php?orden=' + orden + '&dir=' + dir,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var usuarios = '<table class="table table-striped" id="tablaUsuarios" border=1 class="table table-stripped"><tr><th>ID</th><th id="titulo">PALABRA</th><th id="autor">CATEGORIA</th><th id="acciones">ACCIONES</th></tr>'
                $.each(datos, function(i, elemento) {
                    usuarios = usuarios +
                        '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.nombre +
                        '</td><td>' + elemento.contra +
                        '</td><td>' + elemento.nivel +
                        '</td><td><button id="borrar" class="btn btn-danger">Borrar</button>  <button class="btn btn-warning" id="modificar">Modificar</button></td></tr>'
                });
                usuarios
                usuarios = usuarios + '</table>';
                $('#contenido').html(usuarios);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    };


})