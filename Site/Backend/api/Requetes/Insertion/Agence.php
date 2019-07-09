<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Agence"){
        $refAg = $_POST['RefAg'];
        $nomAg = $_POST['NomAg'];
        $villeAg = $_POST['VilleAg'];
        $numResp = $_POST['NumResp'];

        $query = "insert into agence values ('$refAg', '$nomAg', '$villeAg', $numResp)";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>