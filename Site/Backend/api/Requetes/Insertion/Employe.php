<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Employe"){
        $numEmp = $_POST['NumEmp'];
        $nomEmp = $_POST['NomEmp'];
        $prenomEmp = $_POST['PrenomEmp'];
        $dateNaissEmp = $_POST['DateNaissEmp'];
        $adrEmp = $_POST['AdrEmp'];
        $telEmp = $_POST['TelEmp'];
        $idEmp = $_POST['IdEmp'];
        $mdpEmp = $_POST['MdpEmp'];
        $codeServ = $_POST['CodeServ'];

        $query = "insert into employe values ('$numEmp', '$nomEmp', '$prenomEmp', '$dateNaissEmp', '$adrEmp', '$telEmp', '$idEmp', '$mdpEmp', '$codeServ');";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>