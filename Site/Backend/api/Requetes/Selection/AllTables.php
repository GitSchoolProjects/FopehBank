<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    /*
    *   table=>La table,  column=>La colonne, type=>Le type de la colonne, value=>La valeur du paramètre
    */

    $table = $_POST['Table'];
    
    if(isset($_POST['column'])){
        $column = $_POST['column'];
        $type = $_POST['type'];
        $value = $_POST['value'];
        
        if($type == 'int')
            $query = "select * from $table where $column=$value";
        else
            $query = "select * from $table where $column='$value'";
    }else
        $query = "select * from $table";

    // Exécution de la requête
    $result = $bdd->query($query);
    $result = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
?>