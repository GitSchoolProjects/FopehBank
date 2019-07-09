<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Reponse"){
        $descRep = $_POST['DescRep'];
        $numQuest = $_POST['NumQuest'];
        $numEmp = $_POST['NumEmp'];

        $query = "insert into reponse values (null, '$descRep', $numQuest, '$numEmp')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>