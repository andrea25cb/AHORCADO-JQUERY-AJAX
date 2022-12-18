<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MIAURCADO</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="../jquery-3.6.1.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="../controlador/juego.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <style type="text/css">
        a {
            background-color: rgb(167, 32, 106);
            color: white;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
        }
        #resolver,
        #respuesta,
        #nombre,
        #puntos,
        #imagen,
        #reiniciar,
        #start,
        #resolver,
        #vidas {
            display: none;
        }
 
        
      
    </style>
</head>

<body>
<?php $nombre = $_GET['nombre'];
 $contra=$_GET['contra'] ?>
    <div class="col-sm-12">
        <a href="../index.html">CERRAR SESIÓN</a> 
        <a href="opcionesUsuario.php?nombre="<?=$nombre?>&contra=<?=$contra?>">OPCIONES</a>
    </div>
    <center>
 <span id='nombre'><?=$nombre?></span>
        <img id="imagen" alt="" width="200x">
        <div id="vidas">VIDAS: 6  </div>  <div id="puntos"> PUNTOS: 0</div><input type="button" id="resolver" value="RESOLVER"><input type="text" id="respuesta" placeholder="chorizo">
        <h1>
            <span id="title">
            MIAURCADO
        </span>
            <div id="palabra"></div>
        </h1>
        <input id="reiniciar" type="submit" onclick="reiniciar()">
        <span id="mensaje"></span>
        <div id="ganapierde"></div>
        <!-- <input id="reiniciar" type="submit" onclick="reiniciar()"><br> -->

        <div id="palabraRandom"></div>
        <div id="le">
            <span id="letras"></span>
        </div>

        <div class="login-form">
            <select id="sel_cat">
            <!-- <option value="0" disabled selected>Seleccione su categoría</option> -->
        </select>

        </div>
        <input id="start" type="submit" value="PLAY" onclick="start()"><br>

        <input id="resolver" type="button" value="QUIERO RESOLVER!"><br>
    </center>
    <!-- </div> -->
</body>

</html>