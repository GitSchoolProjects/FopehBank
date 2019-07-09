<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Commentaire"){
        $descRep = $_POST['DescRep'];
        $numEmp = $_POST['NumEmp'];

        $query = "insert into recommandation values (null, '$descRep', '$numEmp')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>