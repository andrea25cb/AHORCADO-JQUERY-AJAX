<?php
include('database.php');

//cuando pierda/gane, se inseta la puntuacion final

$usuario=$_GET["usuario"];
$aciertos = $_POST['aciertos'];
$fallos = $_POST['fallos'];

//si pierde:
$aciertos * 2 - $fallos - 5;
//si gana:
$aciertos * 2 - $fallos + 10;

$puntuacion = $aciertos *2 - $fallos -5;;

$fecha=date('Y-m-d H:i:s');

    $query = "INSERT INTO partida (usuario, puntuacion,fecha) 
    VALUES ('" . $usuario . "','" . $puntuacion . "','" . $fecha."')";
    $result = $mysqli->query($query);
    echo $query;
