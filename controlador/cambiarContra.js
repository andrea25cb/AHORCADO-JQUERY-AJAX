$(document).ready(function() {

    var contra = $('#contra').text();
    var nuevaContra = $('#nuevaContra').val();

    muestraContra(contra);
    console.log(contra);
    console.log(nuevaContra);

    $('#cambiarContra').click(function(contra, nuevaContra) {
        $.ajax({
            url: '../modelo/updateContra.php?contra=' + contra + '&nuevaContra=' + nuevaContra,
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
    });

})