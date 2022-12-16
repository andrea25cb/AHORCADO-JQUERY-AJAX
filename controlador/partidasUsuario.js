$(document).ready(function() {

    var nombre = $('#usuario').text();
    muestraPartidas(nombre);

    function muestraPartidas(nombre) {
        $.ajax({
            url: '../modelo/damePartidasUsuario.php?nombre=' + nombre,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                console.log(nombre);
                var partidas = '<table class="table table-striped" id="tablaPartidasUsuario" border=1><tr><th>ID</th><th id="nombre">nombre</th><th id="puntuacion">PUNTUACION</th><th id="fecha">FECHA</th></tr>'
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