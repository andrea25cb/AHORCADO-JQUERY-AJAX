<?php

include('database.php');

if($_POST['palabra'] ==null || $_POST['seleccion'] ==null){
    echo "no puede estar vacio";
} else {
    $query = "UPDATE palabra SET palabra='".$_POST['palabra']."', categoria='".$_POST['seleccion']."' WHERE id=".$_GET['id'];

    if ($result = $mysqli->query($query)) {
        echo "OK";
    }
   
}
