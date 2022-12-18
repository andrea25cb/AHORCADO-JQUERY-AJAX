<?php
include('database.php');

$primeraPalabra = $_POST['primeraPalabra'];
$categoria = $_POST['categoria'];

if($primeraPalabra ==null || $categoria ==null){
    echo "no puede estar vacio";
} else {
    $query = "INSERT INTO palabra (palabra, categoria) VALUES ('" . $primeraPalabra . "','" . $categoria . "')";
    $result = $mysqli->query($query);
    echo $query;
}