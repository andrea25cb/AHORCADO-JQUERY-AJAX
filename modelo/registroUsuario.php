<?php
include('database.php');

$nombre = $_POST['nombre'];
$contra = $_POST['contra'];

function registro(string $nombre, string $contra){
    $cc = Database::getInstance();
			$sql=$cc->db->prepare("INSERT INTO usuario (nombre, contra, tipo) VALUES ('".$nombre."','".$contra."','usuario')");
			$sql->bindParam(":nombre",$nombre);
			$sql->bindParam(":contra",$contra);
		
			$sql->execute();
			return $sql->fetchAll();
}

$usuario_nuevo = registro($nombre,$contra);

if ($usuario_nuevo!=null){
   echo json_encode($usuario_nuevo[0]);
}else{
	$datos = array(
		"mensaje"=>"usuario no nuevo"
	);
    echo json_encode($datos);
}
