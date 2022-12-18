$(document).ready(function() {

    $nombre = $('#usuario').text();
    $contra = $('#contra').text();
    console.log($contra);

    $('#jugar').click(function() {
        window.location.href = "ahorcado.php?nombre=" + $nombre; + "&contra=" + $contra;
    });

    $('#verPartidas').click(function() {
        window.location.href = "listarPartidasUsuario.php?nombre=" + $nombre; + "&contra=" + $contra;
    });

    $('#cambiarContra').click(function() {
        window.location.href = "cambiarContra.php?nombre=" + $nombre; + "&contra=" + $contra;
    });

})