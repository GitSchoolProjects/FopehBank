<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table'])){
        $table = $_POST['Table'];
        $column = $_POST['column'];
        $nType = $_POST['NType'];
        $value = $_POST['value'];

        $idColumn = $_POST['idColumn'];
        $idType = $_POST['idType'];
        $idValue = $_POST['idValue'];

        if($nType == "int"){
            if($idType == "int")
                $query = "update $table set $column = $value where $idColumn = $idValue";
            else
                $query = "update $table set $column = $value where $idColumn = '$idValue'";
        }else{
            if($idType == "int")
                $query = "update $table set $column = '$value' where $idColumn = $idValue";
            else
                $query = "update $table set $column = '$value' where $idColumn = '$idValue'";
        }
    }

    $bdd->query($query);
    echo json_encode("Done");

?>