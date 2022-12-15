$(document).ready(function() {
    // var orden = 'id';
    // var dir = 'ASC';
    // var usuario = $_GET['usuario'];
    muestraPartidas();

    // $('#contenido').on('click', function() {
    //     elemento = $(this).text();
    //     muestraPartidas(elemento);

    //     if (dir == 'ASC') {
    //         dir == 'DESC'
    //     } else if (dir == 'DESC') {
    //         dir == 'ASC'
    //     }
    // });

    function muestraPartidas() {
        $.ajax({
            url: '../modelo/damePartidasUsuario.php',
            type: 'GET',
            dataType: 'json',
            data: success: function(datos) {
                console.log(datos);
                var partidas = '<table class="table table-striped" id="tablaPartidasUsuario" border=1 class="table table-stripped"><tr><th>ID</th><th id="usuario">USUARIO</th><th id="puntuacion">PUNTUACION</th><th id="fecha">FECHA</th></tr>'
                $.each(datos, function(i, elemento) {
                    partidas = partidas +
                        '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.usuario +
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