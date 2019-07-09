<?php 
    header("Access-Control-Allow-Origin:*");
    require_once "../../BaseDeDonnee/DbConnect.php";

    $bdd = connect();

    // Récupération des paramètres
    if(isset($_POST['Table']) && $_POST['Table'] == "Service"){
        $codeServ= $_POST['CodeServ'];
        $libServ= $_POST['LibServ'];
        $refAg= $_POST['RefAg'];

        $query = "insert into service values ('$codeServ', '$libServ', '$refAg')";
        $bdd->query($query);
        echo json_encode("Done");
    }

?>