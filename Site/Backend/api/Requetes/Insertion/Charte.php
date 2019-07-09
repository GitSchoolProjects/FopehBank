<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Charte"){
        $refCh = $_POST['RefCh'];
        $dateEdi = $_POST['DateEdi'];

        $query = "insert into charte values ('$refCh', '$dateEdi')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>