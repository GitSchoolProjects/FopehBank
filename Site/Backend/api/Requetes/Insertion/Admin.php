<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Admin"){
        $idAdmin = $_POST['IdAdmin'];
        $mdpAdmin = $_POST['MdpAdmin'];

        $query = "insert into admin values ('$idAdmin', '$mdpAdmin')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>