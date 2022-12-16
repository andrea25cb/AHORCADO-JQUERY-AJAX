$(document).ready(function() {

    $nombre = $('#usuario').text();
    $contra = $('#contra').text();
    console.log($contra);
    $('#verPartidas').click(function() {
        window.location.href = "listarPartidasUsuario.php?nombre=" + $nombre;
    });

    $('#cambiarContra').click(function() {
        window.location.href = "cambiarContra.php?contra=" + $contra;
    });


})