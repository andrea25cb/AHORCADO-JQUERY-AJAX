<?php

//DAME CATEGORIAS DE OTRA FORMA PARA PODER USAR AJAX:

include('database.php');

$query = "SELECT DISTINCT categoria FROM palabra";
$categoria = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        $categoria[] = array('categoria'=>$row['categoria']);
    }

$result->free();
$categoria2 = json_encode($categoria);
echo $categoria2;
}

