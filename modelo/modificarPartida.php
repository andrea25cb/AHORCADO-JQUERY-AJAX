<?php

include('database.php');

if($_POST['usuario'] ==null || $_POST['puntuacion'] ==null){
    echo "no puede estar vacio";
} else {
    $query = "UPDATE partida SET usuario='".$_POST['usuario']."', puntuacion='".$_POST['puntuacion']."', fecha='".$_POST['fecha']."' WHERE id=".$_GET['id'];

    if ($result = $mysqli->query($query)) {
        echo "OK";
    }
   
}
