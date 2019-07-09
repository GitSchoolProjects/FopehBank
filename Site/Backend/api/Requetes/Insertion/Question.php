<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Question"){
        $desQuest = $_POST['DesQuest'];
        $numClt = $_POST['NumClt'];

        $query = "insert into question values (null, '$desQuest', $numClt)";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>