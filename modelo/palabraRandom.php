<?php
include('database.php');

$categoria=$_GET['catSeleccionada'];
$cc = Database::getInstance();
$sql = "SELECT palabra FROM palabra WHERE categoria = '$categoria' ORDER BY RAND() LIMIT 1";
$query = $cc->db->prepare($sql);
$query->execute();
$results = $query->fetchAll(PDO::FETCH_OBJ);


if ($query->rowCount() > 0) {
    foreach ($results as $registro) {
        echo json_encode($registro->palabra);
    }
}

