$(document).ready(function() {
    var orden = 'id';
    var dir = 'ASC';
    muestraPartidas(orden);

    $('#contenido').on('click', 'th:not("#acciones")', function() {
        elemento = $(this).text();
        muestraPartidas(elemento);

        if (dir == 'ASC') {
            dir == 'DESC'
        } else if (dir == 'DESC') {
            dir == 'ASC'
        }
    });

    $('#insertar').click(function() {
        $.ajax({
            url: 'insertalibro.php',
            type: 'POST',
            dataType: 'text',
            data: {
                titulo: $('#titulo').val(),
                autor: $('#autor').val(),
                editorial: $('#editorial').val(),
                páginas: $('#páginas').val(),
                anno: $('#anno').val(),
            },
            success: function(datos) {
                fila = '<tr><td>id</td><td>' + $('#titulo').val() + '</td><td>' + $('#autor').val() + '</td><td>' + $('#editorial').val() + '</td><td>' + $('#páginas').val() + '</td><td>' + $('#anno').val() + '</td><td><button class="borrar"' + '>Borrar</button></td><td><button class="modificar"' + '>Modificar</button></td></tr>';
                $('#tablalibros').append(fila);
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

    function muestraPartidas() {
        $.ajax({
            url: 'modelo/damePartidas.php',
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var partidas = '<table id="tablaPartidas" border=1 class="table table-stripped"><tr><th>ID</th><th id="usuario">USUARIO</th><th id="puntuacion">PUNTUACION</th><th id="fecha">FECHA</th><th id="acciones">ACCIONES</th></tr>'
                $.each(datos, function(i, elemento) {
                    partidas = partidas + '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.palabra +
                        '</td><td>' + elemento.categoria +
                        '</td><td><button class="borrar">Borrar</button>  <button class="modificar">Modificar</button></td></tr>'
                });
                partidas = partidas + '</table>';
                $('#tablaPalabras').html(partidas);
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