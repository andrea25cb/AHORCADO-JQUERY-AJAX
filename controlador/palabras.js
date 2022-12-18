$(document).ready(function() {
    var orden = 'id';
    var dir = 'ASC';
    muestraPalabras(orden);
    selectCategorias();

    $('#contenido').on('click', 'th:not("#acciones")', function() {
        elemento = $(this).text();
        muestraPalabras(elemento);

        if (dir == 'ASC') {
            dir == 'DESC'
        } else if (dir == 'DESC') {
            dir == 'ASC'
        }
    });

    $('#insertarPalabra').click(function() {
        $.ajax({
            url: '../modelo/insertarPalabra.php',
            type: 'POST',
            dataType: 'text',
            data: {
                palabra: $('#palabra').val(),
                seleccion: $('#seleccion').val(),
            },
            success: function(datos) {
                if ($('#palabra').val() == null || $('#seleccion').val() == null) {
                    $('#mensaje').html('No puede estar vacio');

                } else {
                    fila = '<tr><td>id</td><td>' + $('#palabra').val() + '</td><td>' + $('#seleccion').val() + '</td><td><button class="borrar"' + '>Borrar</button></td><td><button class="modificar"' + '>Modificar</button></td></tr>';

                }
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    });

    $('#insertarCategoria').click(function() {
        $.ajax({
            url: '../modelo/insertarCategoria.php',
            type: 'POST',
            dataType: 'text',
            data: {
                categoria: $('#categoria').val(),
                primeraPalabra: $('#primeraPalabra').val(),
            },
            success: function(datos) {
                if ($('#categoria').val() == null || $('#primeraPalabra').val() == null) {
                    $('#mensaje').html('No puede estar vacio');
                }
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    });



    function selectCategorias() {
        $.ajax({
            url: '../modelo/dameCategorias.php',
            type: 'GET',
            dataType: 'json',
            success: function(datos) {

                $.each(datos, function(idx, elemento) {
                    select = '<option>' + elemento.categoria + '</option>';
                    $('#seleccion').append(select);
                });
            },
            error: function(xhr, status) {
                alert('error');
            },
            complete: function(xhr, status) {
                //alert('PeticiÃ³n realizada');
            }
        });
    }

    $('#contenido').on('click', '.borrar', function() {
        var id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        var fila = $(this).parent().parent();
        $.ajax({
            url: '../modelo/borrarPalabra.php?id=' + id,
            type: 'GET',
            dataType: 'text',
            success: function(datos) {
                fila.remove();
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    })

    let id = '';
    $('#contenido').on('click', '.modificar', function() {
        id = $(this).parent().siblings().eq(0).html();
        let palabra = $(this).parent().siblings().eq(1).html();
        let seleccion = $(this).parent().siblings().eq(2).html();

        $('#palabra').val(palabra);
        $('#seleccion').val(seleccion);

        console.log(id);
        console.log(palabra);
        console.log(seleccion);
        $('#aceptar').css('display', 'initial');
    });

    $('#aceptar').on('click', function() {
        $('#aceptar').css('display', 'none');

        $.ajax({
            url: '../modelo/modificarPalabra.php?id=' + id,
            type: 'POST',
            dataType: 'text',
            data: {
                palabra: $('#palabra').val(),
                seleccion: $('#seleccion').val(),
            },
            success: function(datos) {
                $('#palabra').val();
                $('#seleccion').val();

                muestraPalabras(orden);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete: function(xhr, status) {
                // alert('Petición realizada');
            }
        });
    });


    function muestraPalabras(orden) {
        $.ajax({
            url: '../modelo/damePalabras.php?orden=' + orden + '&dir=' + dir,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var palabras = '<table id="tablaPalabras" border=1 class="table table-stripped"><tr><th>ID</th><th id="palabra">PALABRAS</th><th id="categoria">CATEGORIAS</th><th id="acciones">ACCIONES</th></tr>'
                $.each(datos, function(i, elemento) {
                    palabras = palabras + '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.palabra +
                        '</td><td>' + elemento.categoria +
                        '</td><td><button class="borrar"' + '>Borrar</button></td><td><button class="modificar"' + '>Modificar</button></td></tr>';
                });
                palabras = palabras + '</table>';
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