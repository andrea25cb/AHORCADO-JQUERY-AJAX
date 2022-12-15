<?php

include('database.php');

if($_POST['nombre'] ==null || $_POST['contra'] ==null){
    echo "no puede estar vacio";
} else {
    $query = "UPDATE usuario SET nombre='".$_POST['nombre']."', contra='".$_POST['contra']."' WHERE id=".$_GET['id'];

    if ($result = $mysqli->query($query)) {
        echo "OK";
    }
   
}
