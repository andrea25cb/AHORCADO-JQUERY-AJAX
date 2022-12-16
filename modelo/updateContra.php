<?php

include('database.php');
$contra=$_GET['contra'];//pasar desde login...

$nuevaContra=$_GET['nuevaContra'];//no la cogeee

$query = "UPDATE usuario SET contra='$nuevaContra' WHERE contra='$contra'";
$result = $mysqli->query($query);
echo $query;

