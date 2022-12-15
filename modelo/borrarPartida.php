<?php
include('database.php');

$query = "DELETE FROM partida WHERE id=".$_GET['id'];
if ($result = $mysqli->query($query)){
    echo "OK";
};

