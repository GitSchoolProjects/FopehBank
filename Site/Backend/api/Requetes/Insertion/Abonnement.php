<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Abonnement"){
        $refAb = $_POST['RefAb'];
        $dateSouscrip = $_POST['DateSouscrip'];
        $numClt = $_POST['NumClt'];

        $query = "insert into abonnement values ('$refAb', '$dateSouscrip', $numClt)";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>