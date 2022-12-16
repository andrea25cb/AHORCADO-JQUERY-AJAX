$(document).ready(function() {
    const queryString = window.location.search;
    // Convierte la cadena de consulta en un objeto con clave-valor
    const urlParams = new URLSearchParams(queryString);

    nombre = urlParams.get("nombre");
    $(function() {
        $("#login").on("click", function() {
            $.ajax({
                url: '../controlador/comprobarLogin.php',
                type: 'GET',
                dataType: 'json',
                data: {
                    nombre: $('#nombre').val(),
                    contra: $('#contra').val(),
                },
                success: function(datos) {
                    console.log(datos);
                    console.log(datos['nombre']);
                    // Luego, agrega la cadena de texto como un parámetro de consulta en la URL

                    const url = "../vista/opcionesUsuario.php?nombre=" + datos['nombre'];

                    if (datos['nombre'] != "") {
                        window.location.replace(url);
                    };

                },
                error: function(xhr, status) {
                    alert('Disculpe, existió un problema');

                },
                complete: function(xhr, status) {
                    //alert('Petición realizada');
                }
            });
        });
    });

});