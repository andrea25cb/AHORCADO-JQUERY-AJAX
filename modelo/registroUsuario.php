<?php
include('database.php');

$nombre = $_POST['nombre'];
$contra = $_POST['contra'];

if($nombre ==null || $contra ==null){
    echo "no puede estar vacio";
} else {
$query="INSERT INTO usuario (nombre, contra, nivel) VALUES ('".$nombre."','".$contra."','usuario')";
$result = $mysqli->query($query);
echo $query;
}