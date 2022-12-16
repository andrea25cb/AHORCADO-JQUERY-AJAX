<?php
include('database.php');

$usuario = $_GET['nombre'];

echo $usuario;
$query = "SELECT * FROM partida WHERE usuario='$usuario'";
$partidas = [];
if ($result = $mysqli->query($query)) {

    while ($row = $result->fetch_assoc()) {
        $partidas[] = array('id'=>$row['id'],'usuario'=>$row['usuario'],'puntuacion'=>$row['puntuacion'],'fecha'=>$row['fecha']);
    }

$result->free();
$partidas2 = json_encode($partidas);
echo $partidas2;
}
?>
<div class="col-sm-12">
<div id="usuario"></div>  <!-- aqui sale la variable del login -->
     <a href="opcionesUsuario.php?nombre='<?=$usuario?>'">VOLVER</a>
 </div>
 <div class="login-form">
     <h1>PARTIDAS USUARIO: <?php 
echo $usuario?> </h1>
     <div id="contenido">
     </div>
 </div>
