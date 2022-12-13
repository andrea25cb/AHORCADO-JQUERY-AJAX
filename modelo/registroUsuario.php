<?php
$username = "root";
$password = "";
$database = "ahorcado";
$mysqli = new mysqli("localhost", $username, $password, $database);

$nombre = $_POST['nombre'];
$contra = $_POST['contra'];


$query="INSERT INTO usuario (nombre, contra, nivel) VALUES ('".$nombre."','".$contra."','usuario')";
$result = $mysqli->query($query);
echo $query;