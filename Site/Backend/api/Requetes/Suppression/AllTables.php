<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    /*
    *   table=>La table,  column=>La colonne, type=>Le type de la colonne, value=>La valeur du paramètre
    */

    $table = $_POST['table'];
    $column = $_POST['column'];
    $type = $_POST['type'];
    $value = $_POST['value'];
    
    if($type == 'int')
        $query = "delete from $table where $column=$value";
    else
        $query = "delete from $table where $column='$value'";

    // Exécution de la requête
    $result = $bdd->query($query);
?>