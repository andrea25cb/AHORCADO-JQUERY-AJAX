<?php
/** 
* @file cerrar_sesion.php
* @author andrea cordon
* @date 11/12/2022
* @brief cerrar_sesion implementation
*/

session_start();

//Cerrar Session
$_SESSION["correo"] = "";
session_destroy();

// Borrar cookies

header("location: ../index.php");
?>