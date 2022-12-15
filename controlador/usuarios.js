$(document).ready(function() {
    var orden = 'id';
    var dir = 'ASC';
    muestraUsuarios(orden);

    $(document).ready(function() {
        $("#txtbusca").keyup(function() {
            var parametros = "txtbusca=" + $(this).val()
            $.ajax({
                data: parametros,
                url: '../modelo/buscarUsuarios.php',
                type: 'post',
                beforeSend: function() {},
                success: function(response) {
                    $(".salida").html(response);
                },
                error: function() {
                    alert("error")
                }
            });
        })
    })

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
                if ($('#nombre').val() == null || $('#contra').val() == null) {
                    $('#mensaje').html("DEBE RELLENAR TODOS LOS CAMPOS");
                } else {
                    fila = '<tr><td>id</td><td>' + $('#nombre').val() + '</td><td>' + $('#contra').val() + '</td><td><button class="borrar"' + '>Borrar</button></td><td><button class="modificar"' + '>Modificar</button></td></tr>';

                }
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            compvare: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    });

    $('#contenido').on('click', '.borrar', function() {
        var id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        var fila = $(this).parent().parent();
        $.ajax({
            url: '../modelo/borrarUsuario.php?id=' + id,
            type: 'GET',
            dataType: 'text',
            success: function(datos) {
                fila.remove();
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            compvare: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    })

    let id = '';
    $('#contenido').on('click', '.modificar', function() {
        id = $(this).parent().siblings().eq(0).html();
        let nombre = $(this).parent().siblings().eq(1).html();
        let contra = $(this).parent().siblings().eq(2).html();

        $('#nombre').val(nombre);
        $('#contra').val(contra);

        console.log(id);
        console.log(nombre);
        console.log(contra);
        $('#aceptar').css('display', 'initial');
    });

    $('#aceptar').on('click', function() {
        console.log('holaaaaa');

        $('#aceptar').css('display', 'none');

        $.ajax({
            url: '../modelo/modificarUsuario.php?id=' + id,
            type: 'POST',
            dataType: 'text',
            data: {
                nombre: $('#nombre').val(),
                contra: $('#contra').val(),
            },
            success: function(datos) {
                $('#nombre').val();
                $('#contra').val();

                muestraUsuarios(orden);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function(xhr, status) {
                // alert('Petición realizada');
            }
        });
    });


    function muestraUsuarios(orden) {
        $.ajax({
            url: '../modelo/dameUsuarios.php?orden=' + orden + '&dir=' + dir,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var usuarios = '<table class="table table-striped" id="tablaUsuarios" border=1"><tr><th>ID</th><th id="nombre">NOMBRE</th><th id="contra">CONTRASEÑA</th><th id="nivel">NIVEL</th><th id="acciones">ACCIONES</th></tr>'
                $.each(datos, function(i, elemento) {
                    usuarios = usuarios +
                        '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.nombre +
                        '</td><td>' + elemento.contra +
                        '</td><td>' + elemento.nivel +
                        '</td><td><button class="borrar"' + '>Borrar</button></td><td><button class="modificar"' + '>Modificar</button></td></tr>';
                });
                usuarios
                usuarios = usuarios + '</table>';
                $('#contenido').html(usuarios);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            compvare: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    };

})