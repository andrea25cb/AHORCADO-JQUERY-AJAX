<?php
session_start();
include('database.php');

if(isset($_SESSION["admin_login"]))	//Condicion admin
{
	header("location: vista/opcionesAdmin.html");
	exit;
}
if(isset($_SESSION["usuario_login"]))	//Condicion usuario
{
	header("location: vista/opcionesUsuario.html");
	exit;
}

if(isset($_REQUEST['ingresar']))	//si le doy al boton login:
{
	$nombre = $_REQUEST["nombre"];	//textbox nombre "nombre"
	$contra = $_REQUEST["contra"];	//textbox nombre "contra"

	if(empty($nombre)){						
		$errorMsg[]="Por favor ingrese nombre ";	//Revisar nombre vacio
	}
	else if(empty($contra)){
		$errorMsg[]="Por favor ingrese contraseña";	//Revisar contra vacia
	}
	else if($nombre AND $contra) //y si no están vacios:
	{
		try{
			$cc = Database::getInstance();
			$sql=$cc->db->prepare("SELECT * FROM usuario
										WHERE
										nombre=:nombre AND contra=:contra"); 
			$sql->bindParam(":nombre",$nombre);
			$sql->bindParam(":contra",$contra);
			$sql->execute();
			
			while($row=$sql->fetch(PDO::FETCH_ASSOC))	
			{
				$dbnombre	=$row["nombre"];
				$dbcontra	=$row["contra"];
				$dbnivel	=$row["nivel"];
			}

			if($nombre!=null AND $contra!=null)	
			{
				if($sql->rowCount()>0)
				{
					if($nombre==$dbnombre and $contra==$dbcontra)
					{
						$_SESSION['hora_conexion'] = date('H:i:s');	
						switch($dbnivel)		
						{
							case "admin":
								$_SESSION["admin_login"]=$nombre;		
								header("location: vista/vista/opcionesAdmin.html");
								break;
								
							case "usuario";
								$_SESSION["usuario_login"]=$nombre;	
								header("location: vista/opcionesUsuario.html");
								break;
								
							default:
								$errorMsg[]="nombre electrónico o contraseña incorrectos";
						}
					}
					else
					{
						$errorMsg[]="nombre electrónico o contraseña incorrectos";
					}
				}
				else
				{
					$errorMsg[]="nombre electrónico o contraseña incorrectos";
				}
			}
			else
			{
				$errorMsg[]="nombre electrónico o contraseña incorrectos";
			}
		}
		catch(PDOException $e)
		{
			$e->getMessage();
		}		
	}
	else
	{
		$errorMsg[]="nombre electrónico o contraseña incorrectos";
	}

/** Muestra mensaje de error */ ?>
<div class="wrapper">
	<div class="container">
		<div class="col-lg-12">
		
		<?php
		if(isset($errorMsg))
		{
			foreach($errorMsg as $error)
			{
			?>
				<div class="alert alert-danger">
					<strong><?php echo $error; ?></strong>
				</div>
            <?php
			}
		}
}