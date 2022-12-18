$(document).ready(function() {

    var contra = $('#contra').text();

    muestraContra(contra);

    function muestraContra(contra) {
        $.ajax({
            url: '../modelo/dameContra.php?contra=' + contra,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                // $('#contenido').html(datos);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    };

    $('#cambiarContra').click(function() {
        window.location.href = "../index.html";
    });

    $('#cambiarContra').click(function() {
        $.ajax({
            url: '../modelo/updateContra.php?contra=' + contra,
            type: 'GET',
            dataType: 'json',
            data: {
                nuevaContra: $('#nuevaContra').val(),
            },
            success: function(datos) {
                window.location.href = "../index.html";
                console.log(datos);

            },
            error: function(xhr, status) {
                //  alert('Disculpe, existió un problema');
            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    });

})