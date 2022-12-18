var imagenes = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png"]
var acierto = [];
var vidas = 6;
var fallos = 1; //se van sumando
var aciertos = 0; //se van sumando
var palabras = '';
var puntos = 0;
var guiones;
var audio = new Audio('images/music.mp3');

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
                '<option>SELECCIONA</option>'
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
//al seleccionar una opcion, coge el valor de la categoria y lo pasa como variable, seleccionando una palabra random
function selectPalabra() {
    $("#sel_cat").change(function() {
        $("#sel_cat option:selected").each(function() {
            var catSeleccionada = $(this).val();
            $.get("../modelo/palabraRandom.php", { catSeleccionada }, function(data) {
                var palabramal = data;
                palabras = palabramal.slice(1, -1)
                palabras = palabras.toLocaleUpperCase();
                $('#start').fadeIn(2000);
                //    $("#palabraRandom").html(palabras);
            });
        });
    });
}

function start() {
    ocultar();
    crearBotones();
    cargarBotones();
    generarGuiones();
    document.getElementById('puntos').style.display = "initial";
    document.getElementById('vidas').style.display = "initial";
    document.getElementById('resolver').style.display = "initial";
    document.getElementById('resolver').style.visibility = "visible";
    document.getElementById('respuesta').style.display = "initial";
    document.getElementById('respuesta').style.visibility = "visible";
    document.getElementById('puntos').style.visibility = "visible";
    document.getElementById('puntos').textContent = "PUNTOS: 0";
    document.getElementById('vidas').style.visibility = "visible";
    document.getElementById('vidas').textContent = "VIDAS: 6";
    document.getElementById('imagen').style.visibility = "visible";
    document.getElementById('imagen').style.display = "initial";
    document.getElementById('imagen').src = "images/0.png";
    console.log(palabras);
    play();
}

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
    document.getElementById("reiniciar").style.visibility = "hidden";
    $('#sel_cat').css("visibility", "hidden");
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('title').style.visibility = "hidden";
}

//generamos un span con los guiones según letras tenga la palabra
function generarGuiones() {
    if (document.getElementById("palabra") != null)
        for (i = 0; i < palabras.length; i++) {
            guiones = "<span class='guiones' id='letra" + i + "'> _</span>";
            document.getElementById("palabra").innerHTML += guiones; //escribe los guiones
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
function buscarLetra(event) {
    console.log(event);
    letra = event.target.value;
    var i = 0;
    if (palabras.includes(letra)) {
        puntos += +2;
        $("#puntos").html("PUNTOS: " + puntos);
        console.log(palabras);
        console.log(letra);
        cambiarLetra(i, letra);
    } else {
        usuarioFalla();
    }
    event.target.disabled = true;
    comprobarLetra();
}

//los guiones se intercambian por la letra si ésta es acertada
function cambiarLetra(i, letra) {
    for (let j = 0; j < palabras.length; j++) {
        i = palabras.indexOf(letra, i);
        if (i == -1) break;
        acierto[i] = letra;
        document.getElementById("letra" + i).innerHTML = " " + letra; //guiones
        i++;
    }
}

function usuarioFalla() {
    if (document.getElementById("imagen") != null) {
        document.getElementById("imagen").src = imagenes[fallos];
        puntos += -1;
        fallos++;
        if (!palabras.includes(letra)) {
            vidas--;
            document.getElementById('vidas').textContent = " VIDAS: " + vidas;
            document.getElementById('puntos').textContent = "PUNTOS: " + puntos;
        }

        if (vidas <= 0) {
            score(puntos);
            document.getElementById('puntos').textContent = "HAS CONSEGUIDO: " + puntos + " PUNTOS.";
            document.getElementById('mensaje').textContent = "HAS PERDIDO... LA PALABRA ERA: " + palabras.toLocaleUpperCase();
            document.getElementById('reiniciar').value = "PLAY AGAIN?";
            // document.getElementById('derrotas').textContent = "DERROTAS: " + derrotas;
            document.getElementById('ganapierde').innerHTML = "<img src='images/gameover.gif'>";
            //poner sonido de perder
            document.getElementById('palabra').style.visibility = "hidden";
            document.getElementById('letras').style.visibility = "hidden";
            document.getElementById('vidas').style.visibility = "hidden";
            document.getElementById('reiniciar').style.visibility = "visible";
            document.getElementById('reiniciar').style.display = "initial";
        }
    }
}
//si acierta todas las letras gana:
function comprobarLetra() {
    if (acierto.join('') == palabras) {
        score(puntos);
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

function score(puntos) {
    var nombre = $('#nombre').text();
    $.ajax({
        url: '../modelo/score.php?nombre=' + nombre + '&puntos=' + puntos,
        type: 'POST',
        dataType: 'text',
        success: function(datos) {
            console.log(datos);
        },
        error: function(xhr, status) {
            alert('Disculpe, existio un problema');
        },
        complete: function(xhr, status) {

        }
    })
};

$(document).ready(function() {
    muestraCategorias();
    selectPalabra();
    $('#resolver').click(function() {
        $respuesta = $('#respuesta').val();
        $respuesta = $respuesta.toLocaleUpperCase();
        if ($respuesta != palabras) {
            puntos += -5;
            vidas--;
            document.getElementById('vidas').textContent = " VIDAS: " + vidas;
            document.getElementById('puntos').textContent = "PUNTOS: " + puntos;
        } else if ($respuesta == palabras) {
            puntos += +10;
            document.getElementById('puntos').textContent = "PUNTOS: " + puntos;
            score(puntos);
            document.getElementById('mensaje').textContent = "¡FELICIDADES, HAS GANADO!";
            document.getElementById('reiniciar').value = "PLAY AGAIN?";
            document.getElementById('reiniciar').style.visibility = "visible";
            document.getElementById('reiniciar').style.display = "initial";
            document.getElementById('ganapierde').innerHTML = "<img src='images/winner.gif'>";
            //poner sonido de ganar
            document.getElementById('palabra').style.visibility = "hidden";
            document.getElementById('letras').style.visibility = "hidden";
        }
    });

});