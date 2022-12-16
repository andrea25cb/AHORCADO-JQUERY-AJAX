<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PARTIDAS</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="../jquery-3.6.1.js"></script>
    <script src="../controlador/partidasUsuario.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <style type="text/css">
        * {
            box-sizing: border-box;
            margin: 10px;
            padding: 10px;
            font-family: 'Vollkorn', serif;
            font-weight: bolder;
        }
        
        @keyframes glow {
            from {
                text-shadow: 0 0 10px #fff, 0 0 30px #28b969, 0 0 40px #fff, 0 0 50px #fff;
            }
            to {
                text-shadow: 0 0 10px #fff, #fff, 0 0 45px #28b969, 0 0 55px #fff, 0 0 65px #fff;
            }
        }
        
        span {
            font-size: 1em;
        }
        
        h2 {
            color: rgb(32, 133, 32);
            font-size: 4rem;
            font-weight: bolder;
            margin-top: 150px;
            -webkit-animation: glow 1.2s ease-in-out infinite alternate;
            animation: glow 1.2s ease-in-out infinite alternate;
            align-items: center;
            text-align: center;
        }
        
        a {
            background-color: rgb(38, 0, 255);
            color: white;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
        }
    </style>
</head>

<body>
<?php $usuario= $_GET['nombre'];
echo $usuario?>
    <div class="col-sm-12">
   <div id="usuario"></div>  <!-- aqui sale la variable del login -->
        <a href="opcionesUsuario.php?nombre='<?=$usuario?>'">VOLVER</a>
    </div>
    <div class="login-form">
        <h1>PARTIDAS USUARIO: <?php 
echo $usuario?> </h1>
        <div id="contenido">
        </div>
    </div>
 
<input type="hidden" id="usuariohidden" value="<?php $usuario?>">
</body>

</html>