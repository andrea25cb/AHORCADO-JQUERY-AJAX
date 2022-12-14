<?php
include('database.php');

$orden = $_GET['orden'];

$query = "SELECT * FROM partida ORDER BY $orden";
$partidas = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        $partidas[] = array('id'=>$row['id'],'usuario'=>$row['usuario'],'puntuacion'=>$row['puntuacion'],'fecha'=>$row['fecha']);
    }

$result->free();
$partidas2 = json_encode($partidas);
echo $partidas2;
}