<?php

include('database.php');
$nombre=$_POST['nombre'];//pasar desde login...
$nuevaContra=$_POST['nuevaContra'];//pasar desde vista anterior

$query = "UPDATE usuario SET contra='$nuevaContra' WHERE nombre='$nombre'";
$result = $mysqli->query($query);
echo $query;