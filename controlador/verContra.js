$(document).ready(function() {

    var contra = $('#contra').val();
    var nuevaContra = $('#nuevaContra').val();

    muestraContra(contra);
    console.log(contra);
    console.log(nuevaContra);

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