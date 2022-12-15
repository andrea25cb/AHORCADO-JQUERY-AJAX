<?php
include('database.php');

$query = "DELETE FROM usuario WHERE id=".$_GET['id'];
if ($result = $mysqli->query($query)){
    echo "OK";
};

