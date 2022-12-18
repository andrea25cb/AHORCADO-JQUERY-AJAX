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
            margin: 10px;
            padding: 10px;
            font-family: 'Vollkorn', serif;
            font-weight: bolder;
            background-color: rgb(198, 247, 198);
            border-radius: 20px;
        }
        
        span {
            font-size: 1em;
        }
#usuario{
    display: none;
}
        
        a {
            background-color: green;
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
<?php 
$nombre = $_GET['nombre'];
$contra = $_GET['contra'];
?>
<a href="opcionesUsuario.php?nombre=<?=$nombre?>&contra=<?=$contra?>">VOLVER</a><br><br>

<span id="usuario"><?=$nombre?></span>  
<center><h1>PARTIDAS USUARIO: <?=$nombre?> </h1></center>
        <div id="contenido">
  
    </div>
 
</body>

</html>