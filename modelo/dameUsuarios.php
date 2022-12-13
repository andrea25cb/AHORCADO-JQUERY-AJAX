<?php
// include('database.php');

$username = "root";
$password = "";
$database = "ahorcado";

$mysqli = new mysqli("localhost", $username, $password, $database);
mysqli_set_charset($mysqli,'UTF8');

$orden = $_GET['orden'];

$query = "SELECT * FROM usuario ORDER BY $orden";
$usuarios = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        //$usuarios = $usuarios.$row['id'].",".$row['palabra'].",".$row['categoria'].",".$row['editorial'].",".$row['paginas'].",".$row['anno'].",";
        $usuarios[] = array('id'=>$row['id'],'nombre'=>$row['nombre'],'contra'=>$row['contra'],'nivel'=>$row['nivel']);
    }

$result->free();
$usuarios2 = json_encode($usuarios);
echo $usuarios2;
}

