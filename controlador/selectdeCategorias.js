$(document).ready(function() {
    function muestraPalabras(orden) {
        $.ajax({
            url: '../modelo/selectdeCategorias.php',
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var palabras = '<select id="selectCategorias">'
                $.each(datos, function(i, elemento) {
                    palabras = palabras + '<option>' +
                        elemento.categoria +
                        '</option></select>'
                });
                palabras = palabras + '</select>';
                $('#contenido').html(palabras);
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