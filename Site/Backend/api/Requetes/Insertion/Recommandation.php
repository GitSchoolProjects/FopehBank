<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Recommandation"){
        $descRec = $_POST['DescRec'];
        $numEmp = $_POST['NumEmp'];

        $query = "insert into recommandation values (null, '$descRec', '$numEmp')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>