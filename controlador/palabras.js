$(document).ready(function() {
    var orden = 'id';
    var dir = 'ASC';
    muestraPalabras(orden);

    $('#contenido').on('click', 'th:not("#acciones")', function() {
        elemento = $(this).text();
        muestraPalabras(elemento);

        if (dir == 'ASC') {
            dir == 'DESC'
        } else if (dir == 'DESC') {
            dir == 'ASC'
        }
    });

    $('#insertar').click(function() {
        $.ajax({
            url: 'insertaPalabra.php',
            type: 'POST',
            dataType: 'text',
            data: {
                titulo: $('#titulo').val(),
                autor: $('#autor').val(),
                editorial: $('#editorial').val(),
                páginas: $('#páginas').val(),
                anno: $('#anno').val(),
            },
            success: function(datos) {
                fila = '<tr><td>id</td><td>' + $('#titulo').val() + '</td><td>' + $('#autor').val() + '</td><td>' + $('#editorial').val() + '</td><td>' + $('#páginas').val() + '</td><td>' + $('#anno').val() + '</td><td><button class="borrar"' + '>Borrar</button></td><td><button class="modificar"' + '>Modificar</button></td></tr>';
                $('#tablalibros').append(fila);
            },
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');

            },
            complete: function(xhr, status) {
                //alert('Petición realizada');
            }
        });
    });

    $('#contenido').on('click', '.borrar', function() {
        var id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        var fila = $(this).parent().parent();
        $.ajax({
            url: 'borralibro.php?id=' + id,
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

    $('#contenido').on('click', '.modificar', function() {
        var id = $(this).parent().siblings().eq(0).html();
        console.log(id);
        var fila = $(this).parent().parent();
        $.ajax({
            url: 'modificalibro.php?id=' + id,
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

    function muestraPalabras(orden) {
        $.ajax({
            url: '../modelo/damePalabras.php?orden=' + orden + '&dir=' + dir,
            type: 'GET',
            dataType: 'json',
            success: function(datos) {
                console.log(datos);
                var palabras = '<table class="table table-striped" id="tablaPalabras" border=1 class="table table-stripped"><tr><th>ID</th><th id="palabra">PALABRAS</th><th id="categoria">CATEGORIAS</th><th id="acciones">ACCIONES</th></tr>'
                $.each(datos, function(i, elemento) {
                    palabras = palabras + '<tr><td>' + elemento.id +
                        '</td><td>' + elemento.palabra +
                        '</td><td>' + elemento.categoria +
                        '</td><td><button class="btn btn-danger" class="borrar">Borrar</button>  <button class="btn btn-warning" class="modificar">Modificar</button></td></tr>'
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