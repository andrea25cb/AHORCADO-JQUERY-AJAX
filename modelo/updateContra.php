<?php

include('database.php');
$contra=$_GET['contra'];

$nuevaContra=$_GET['nuevaContra'];//no la coge:(

$query = "UPDATE usuario SET contra='$nuevaContra' WHERE contra='$contra'";
$result = $mysqli->query($query);
echo $query;

