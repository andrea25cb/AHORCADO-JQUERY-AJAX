<?php
//include('../config.php');
 if(!class_exists('Database')){

/**
 * Clase de abstracción de base de datos de 'proyecto1ev'
 */

 
$username = "andreacordon";
$password = "N2l@7nu1";
$database = "andreacordon";

$mysqli = new mysqli("localhost", $username, $password, $database);
mysqli_set_charset($mysqli,'UTF8');


class Database { 
    
    public $pdo = null;
    public $db;   // handle of the db connexion    
     private static $dns = "mysql:host=localhost;dbname=andreacordon"; 
    //  private static $user = "root"; 
    //  private static $pass = "";    
     private static $user = "andreacordon"; 
     private static $pass = "N2l@7nu1";     
    private static $instance;

    public function __construct ()  {        
       $this->db = new PDO(self::$dns,self::$user,self::$pass);       
    } 

    public static function getInstance(){ 
        if(!isset(self::$instance)) 
        { 
            $object= __CLASS__; 
            self::$instance=new $object; 
        } 
        return self::$instance; 
    }  

    public function pdo(){
		return $this->pdo;
	}
    
} 

}