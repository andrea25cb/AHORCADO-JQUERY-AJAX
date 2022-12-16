<?php
include('database.php');

$contra=$_GET['contra'];
$cc = Database::getInstance();
$sql = "SELECT contra FROM usuario WHERE contra = '$contra'";
$query = $cc->db->prepare($sql);
$query->execute();
$results = $query->fetchAll(PDO::FETCH_OBJ);

if ($query->rowCount() > 0) {
    foreach ($results as $registro) {
        echo json_encode($registro->contra);
    }
}

