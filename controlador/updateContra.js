$(document).ready(function() {

    var contra = $('#contrahidden').val();

    muestraContra(contra);
    console.log(contra);

    function cambiarContra() {
        $.ajax({
            url: '../modelo/updateContra.php?contra=' + contra,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    }

    function muestraContra(contra) {
        $.ajax({
            url: '../modelo/dameContra.php?contra=' + contra,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
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