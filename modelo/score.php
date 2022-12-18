<?php
include('database.php');

//cuando pierda/gane, se inseta la puntuacion final

$usuario=$_GET["nombre"];

$puntuacion = $_GET["puntos"];

$fecha=date('Y-m-d H:i:s');

    $query = "INSERT INTO partida (usuario,puntuacion,fecha) 
    VALUES ('" . $usuario . "','" . $puntuacion . "','" . $fecha."')";
    $result = $mysqli->query($query);
    echo $query;
