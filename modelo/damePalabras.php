<?php
// include('database.php');

include('database.php');

$orden = $_GET['orden'];

$query = "SELECT * FROM palabra ORDER BY $orden";
$palabras = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        //$palabras = $palabras.$row['id'].",".$row['palabra'].",".$row['categoria'].",".$row['editorial'].",".$row['paginas'].",".$row['anno'].",";
        $palabras[] = array('id'=>$row['id'],'palabra'=>$row['palabra'],'categoria'=>$row['categoria']);
    }

$result->free();
$palabras2 = json_encode($palabras);
echo $palabras2;
}