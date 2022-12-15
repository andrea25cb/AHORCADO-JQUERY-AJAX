<?php 
if(isset($_POST['txtbusca'])):
	include "buscar.php";
	$user=new ApptivaDB();	
	$query=$user->buscar("usuario"," nombre like '%".$_POST['txtbusca']."%'");
	$html="";
	foreach ($query as $v)
		$html.="<table class='table table-danger' border='1' ><tr><td>".$v['id'].
        "</td><td>".$v['nombre']."</td><td>".$v['contra']."</td><td>".$v['nivel']."</td><td><button class='borrar'>Borrar
        </button></td><td><button class='modificar'>Modificar</button></td></tr></table>";
	echo $html;
else:
	echo "Error";
endif;
 ?>