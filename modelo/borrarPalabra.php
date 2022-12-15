<?php
include('database.php');

$query = "DELETE FROM palabra WHERE id=".$_GET['id'];
if ($result = $mysqli->query($query)){
    echo "OK";
};

