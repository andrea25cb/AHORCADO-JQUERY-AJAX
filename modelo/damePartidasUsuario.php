<?php
include('database.php');

$usuario = $_GET['nombre'];

$query = "SELECT * FROM partida WHERE usuario='$usuario'";
$partidas = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        $partidas[] = array('id'=>$row['id'],'usuario'=>$row['usuario'],'puntuacion'=>$row['puntuacion'],'fecha'=>$row['fecha']);
    }

$result->free();
$partidas2 = json_encode($partidas);
echo $partidas2;
}
