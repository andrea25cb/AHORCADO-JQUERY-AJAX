$(document).ready(function() {
    // var orden = 'id';
    // var dir = 'ASC';
    //el get se lo debo pasar directamente al sql(?)
    // var usuario = $_GET['usuario']; 
    //el problema es que no podemos usar get, ya que no es un archivo php..
    // $('#contenido').on('click', function() {
    //     elemento = $(this).text();
    //     muestraPartidas(elemento);

    //     if (dir == 'ASC') {
    //         dir == 'DESC'
    //     } else if (dir == 'DESC') {
    //         dir == 'ASC'
    //     }
    // });
    var usuario = $('#usuariohidden').val();

    muestraPartidas(usuario);
    console.log(usuario);

    function muestraPartidas(usuario) {
        $.ajax({
            url: '../modelo/damePartidasUsuario.php?usuario=' + usuario,
            type: 'GET',
            dataType: 'json',

            success: function(datos) {
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