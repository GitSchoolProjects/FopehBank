<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Dossier"){
        $nomDos = $_POST['NomDos'];
        $prenomDos = $_POST['PrenomDos'];
        $carteId = $_POST['CarteId'];
        $refCh = $_POST['RefCh'];
        $idAdmin = $_POST['IdAdmin'];
        $statut = $_POST['Statut'];
        $numero = $_POST['Numero'];

        $query = "insert into dossier values (null, '$nomDos', '$prenomDos', '$carteId', '$refCh', '$idAdmin', '$statut', '$numero')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>