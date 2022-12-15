<?php 
if(isset($_POST['txtbusca'])):
	include "conexion.php";
	$user=new ApptivaDB();	
	$u=$user->buscar("usuario"," nombre like '%".$_POST['txtbusca']."%'");
	$html="";
	foreach ($u as $v)
		$html.="<p>".$v['nombre']."</p>";
	echo $html;
else:
	echo "Error";
endif;
 ?>