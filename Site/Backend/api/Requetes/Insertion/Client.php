<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Client"){
        $nomClt = $_POST['NomClt'];
        $prenomClt = $_POST['PrenomClt'];
        $dateNaissClt = $_POST['DateNaissClt'];
        $adrClt = $_POST['AdrClt'];
        $telClt = $_POST['TelClt'];
        $idClt = $_POST['IdClt'];
        $mdpClt = $_POST['MdpClt'];
        $refAg = $_POST['RefAg'];

        $query = "insert into client values (null, '$numClt', '$nomClt', '$prenomClt', '$dateNaissClt', '$telClt', '$idClt', '$mdpClt', '$refAg')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>