$(document).ready(function() {
    muestraCategorias(); //se muestra al cargar la pagina
    var palabras;
    var vidas = 6;
    var fallos = 1;
    var imagenes = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png"]
    var guiones;
    var audio = new Audio('images/music.mp3');
    var acierto = [];
    var victorias = 0;
    var derrotas = 0;
    //al seleccionar una opcion, coge el valor de la categoria y lo pasa
    $("#sel_cat").change(function() {
        $("#sel_cat option:selected").each(function() {
            catSeleccionada = $(this).val();
            $.get("../modelo/palabraRandom.php", { catSeleccionada }, function(data) {
                palabras = data;
                $("#palabraRandom").html(data);
                $('#start').fadeIn(1000);
            });
        });
    });

    //CUANDO PULSA START PLAY:
    $('#start').click(function() {
        ocultar();
        crearBotones();
        cargarBotones();
        generarGuiones();
        // elegirCategoria(); //hecho
        // obtenerPalabra(); //hecho

        $('#vidas').text = "VIDAS: 6";
        $('#victorias').text = "VICTORIAS: 0 / ";
        $('#derrotas').text = "DERROTAS: 0";
        $('#imagen').attr('src', "images/0.png")

        play();
    });

    $('#reiniciar').click(function() { //en vez de hacer reload, hago que vuelva a aparecer lo escondido, y escondo lo anterior.
        $('#sel_cat').css("visibility", "visible");
        $('#start').css("visibility", "visible");
        $('#title').css("visibility", "visible");
        document.getElementById('imagen').style.visibility = "visible";

        $('#ganapierde').css("visibility", "hidden");
        $('#letras').css("visibility", "hidden");
        $('#reiniciar').css("visibility", "hidden");
        $('#mensaje').css("visibility", "hidden");
        $('#mensaje').css("visibility", "guiones");

    });
    //musica:
    function play() {
        audio.play();
    }

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

    //SOLO JAVASCRIPT:
    //musica:
    function play() {
        audio.play();
    }

    //al darle a reiniciar se vuelven a inicializar las variables
    function reiniciar() {
        location.reload();
    }
    //paso a la siguiente pantalla, oculto los elementos de la primera
    function ocultar() {
        $('#reiniciar').css("visibility", "hidden");
        $('#sel_cat').css("visibility", "hidden");
        $('#start').css("visibility", "hidden");
        $('#title').css("visibility", "hidden");
    }

    //generamos un span con los guiones según letras tenga la palabra
    function generarGuiones() {
        if (palabras != null)
            for (i = 0; i < palabras.toString().length; i++) {
                guiones = "<span class='guiones' id='letra" + i + "'> _</span>";
                document.getElementById("guiones").innerHTML += guiones; //escribe los guiones
            }
    }

    //generamos botones que contendrán las letras del abecedario
    function crearBotones() {
        if (document.getElementById("letras") != null) {
            letras = document.getElementById("letras");
            for (let i = 65; i < 79; i++) {
                letras.innerHTML += "<button id='letraz' type='button' value='" + String.fromCharCode(i) + "'>" + String.fromCharCode(i) + "</button>"
            }
            for (let i = 79; i < 91; i++) {
                letras.innerHTML += "<button id='letraz' type='button' value='" + String.fromCharCode(i) + "'>" + String.fromCharCode(i) + "</button>"
            }
        }
    }

    //le asigno el evento 'click' para cada boton de abecedario, cuando haga click: buscarLetra
    function cargarBotones() {
        arrayBotones = document.getElementsByTagName("button");
        for (let i = 0; i < arrayBotones.length; i++) {
            arrayBotones[i].addEventListener("click", buscarLetra)
        }
    }

    //cada vez que se hace 'click'(evento) a un boton, si la palabra no incluye la letra, funcion usuarioFalla(),
    //si la palabra incluye la letra, funcion cambiarLetra
    function buscarLetra(event) { //no me da por valida ninguna letra a pesar de existir...
        letra = event.target.value;
        var i = 0;
        if (palabras.toString().includes(letra)) {
            cambiarLetra(i, letra);
        } else {
            usuarioFalla();
        }
        event.target.disabled = true;
        comprobarLetra();
    }

    //los guiones se intercambian por la letra si ésta es acertada
    function cambiarLetra(i, letra) {
        console.log(letra);
        for (let j = 0; j < palabras.length; j++) {
            i = palabras.toString().indexOf(letra, i);
            if (i == -1) break;
            acierto[i] = letra;
            document.getElementById("letra" + i).innerHTML = " " + letra;
            i++;
        }
    }

    function usuarioFalla() {
        if (document.getElementById("imagen") != null) {
            document.getElementById("imagen").src = imagenes[fallos];
            fallos++;
            if (!palabras.toString().includes(letra)) {
                vidas--;
                document.getElementById('vidas').textContent = "VIDAS: " + vidas;
            }

            if (vidas <= 0) {
                derrotas++;
                document.getElementById('mensaje').textContent = "HAS PERDIDO... LA PALABRA ERA: " + palabras.toString();
                document.getElementById('reiniciar').value = "PLAY AGAIN?";
                document.getElementById('derrotas').textContent = "DERROTAS: " + derrotas;
                document.getElementById('ganapierde').innerHTML = "<img src='images/gameover.gif'>";
                //poner sonido de perder
                document.getElementById('palabra').style.visibility = "hidden";
                document.getElementById('letras').style.visibility = "hidden";

                document.getElementById('reiniciar').style.visibility = "visible";
                document.getElementById('reiniciar').style.display = "initial";
            }
        }
    }
    //si acierta todas las letras gana:
    function comprobarLetra() {
        if (acierto.join('') == palabras.toString()) {
            victorias++;
            document.getElementById('victorias').textContent = "VICTORIAS: " + victorias;
            document.getElementById('mensaje').textContent = "¡FELICIDADES, HAS GANADO!";
            document.getElementById('reiniciar').value = "PLAY AGAIN?";
            document.getElementById('reiniciar').style.visibility = "visible";
            document.getElementById('reiniciar').style.display = "initial";
            document.getElementById('ganapierde').innerHTML = "<img src='images/winner.gif'>";
            //poner sonido de ganar
            document.getElementById('palabra').style.visibility = "hidden";
            document.getElementById('letras').style.visibility = "hidden";

        }
    }


});