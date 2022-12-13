$(document).ready(function() {
    var orden = 'id';
    var dir = 'ASC';
    muestraPartidas(orden, usuario);

    $('#contenido').on('click', 'th:not("#acciones")', function() {
        elemento = $(this).text();
        muestraPartidas(elemento);

        if (dir == 'ASC') {
            dir == 'DESC'
        } else if (dir == 'DESC') {
            dir == 'ASC'
        }
    });

    function muestraPartidas(orden, usuario) {
        $.ajax({
            url: '../modelo/damePartidas.php?orden=' + orden + '&dir=' + dir + '&usuario=' + usuario,
            type: 'GET',
            dataType: 'json',
            data: {
                usuario: $('#usuario').val(),

            },
            success: function(datos) {
                console.log(datos);
                if (datos.nombre)
                    var partidas = '<table id="tablaPartidas" border=1 class="table table-striped"><tr><th id="usuario">USUARIO</th><th id="puntuacion">PUNTUACION</th><th id="fecha">FECHA</th></tr>'
                $.each(datos, function(i, elemento) {
                    partidas = partidas +
                        '<tr><td>' + elemento.usuario +
                        '</td><td>' + elemento.puntuacion +
                        '</td><td>' + elemento.fecha +
                        '</td></>'
                });
                partidas = partidas + '</table>';
                $('#contenido').html(partidas);
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