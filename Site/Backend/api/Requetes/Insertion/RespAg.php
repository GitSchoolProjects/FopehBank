<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "RespAg"){
        $nomResp = $_POST['NomResp'];
        $prenomResp = $_POST['PrenomResp'];
        $dateNaissResp = $_POST['DateNaissResp'];
        $adrResp = $_POST['AdrResp'];
        $telResp = $_POST['TelResp'];

        $query = "insert into respag values (null, '$nomResp', '$prenomResp', '$dateNaissResp', '$adrResp', '$telResp')";
        $bdd->query($query);
        echo json_encode("Done");
    }
    
?>