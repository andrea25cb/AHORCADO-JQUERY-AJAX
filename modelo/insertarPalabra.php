<?php
include('database.php');

$palabra = $_POST['palabra'];
$categoria = $_POST['seleccion'];
if($palabra ==null || $categoria ==null){
    echo "no puede estar vacio";
} else {
    $query = "INSERT INTO palabra (palabra, categoria) VALUES ('" . $palabra . "','" . $categoria . "')";
    $result = $mysqli->query($query);
    echo $query;
}