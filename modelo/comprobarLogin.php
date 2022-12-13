<?php

include('database.php');

$nombre=$_POST['nombre'];
$contra=$_POST['contra'];

function getUser(string $nombre, string $contra){
    $cc = Database::getInstance();
			$sql=$cc->db->prepare("SELECT * FROM usuario
										WHERE
										nombre=:nombre AND contra=:contra"); 
			$sql->bindParam(":nombre",$nombre);
			$sql->bindParam(":contra",$contra);
		
			$sql->execute();
			return $sql->fetchAll();
}

$usuario_encontrado = getUser($nombre,$contra);

if ($usuario_encontrado!=null){
   echo json_encode($usuario_encontrado[0]);
}else{
	$datos = array(
		"mensaje"=>"usuario no encontrado"
	);
    echo json_encode($datos);
}
