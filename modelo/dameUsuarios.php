<?php
// include('database.php');

$username = "root";
$password = "";
$database = "ahorcado";

$mysqli = new mysqli("localhost", $username, $password, $database);
mysqli_set_charset($mysqli,'UTF8');

$orden = $_GET['orden'];

$query = "SELECT * FROM usuario ORDER BY $orden";
$palabras = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        //$palabras = $palabras.$row['id'].",".$row['palabra'].",".$row['categoria'].",".$row['editorial'].",".$row['paginas'].",".$row['anno'].",";
        $palabras[] = array('id'=>$row['id'],'nombre'=>$row['nombre'],'contra'=>$row['contra']);
    }

$result->free();
$palabras2 = json_encode($palabras);
echo $palabras2;
}