<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "DbConfig.php";

    function connect(){
        $bdd = new PDO("mysql:host=localhost;dbname=mini_projet", 'root', 'kali');    
        return $bdd;
    };
?>