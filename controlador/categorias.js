$(document).ready(function() {
    muestraCategorias(); //se muestra al cargar la pagina

    //al seleccionar una opcion, coge el valor de la categoria y lo pasa
    $("#sel_cat").change(function() {
        $("#sel_cat option:selected").each(function() {
            catSeleccionada = $(this).val();
            $.get("../modelo/palabraRandom.php", { catSeleccionada }, function(data) {
                console.log(data);
                $("#palabraRandom").html(data);

            });
        });
    });
    document.getElementById('palabraRandom').style.visibility = "hidden";
    //muestra las categorias
    function muestraCategorias() {
        $.ajax({
            url: '../modelo/dameCategorias.php',
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var len = datos.length;

                $("#sel_cat").empty();
                '<option>SELECCIONA</option>'
                for (var i = 0; i < len; i++) {
                    var categoria = datos[i]['categoria'];
                    $("#sel_cat").append("<option>" + categoria + "</option>");
                }
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        })
    };

    function palabraRandom() {

    }
})